import ProjectCard from '@/components/ProjectCard';

export default function Work() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-gray-100">
            Engineering Projects
          </h1>
          <p className="text-lg text-gray-900 dark:text-gray-400">
            Course projects and engineering work
          </p>
        </div>

        {/* Engineering Projects */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-gray-100">
            Engineering Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <ProjectCard
              title="SCARA Robot Arm"
              date="Sep 2024 – present"
              description="Final project for PS70: Introduction to Digital Fabrication. A SCARA-style robotic arm designed for planar motion with vertical actuation and an end-effector for grasping. The robot features multiple degrees of freedom including base rotation, Z-axis vertical movement, end-effector rotation, and a servo-driven claw. Mechanically, the robot is largely 3D printed and uses stepper motors for precise joint control, along with a rotary bearing to support smooth base rotation. The system architecture centers around an ESP32 microcontroller, which handles Bluetooth communication, motor control through stepper drivers, and servo actuation. This allows the robot to perform basic pick-and-place style motions and respond in real time to user input via keyboard controls (w/a/s/d for movement, z/x for end-effector rotation, o/c for claw open/close, spacebar to stop). The project was inspired by a YouTube video demonstrating a compact, DIY SCARA-style robotic arm, and combines mechanical design, electronics, and software into a single integrated system rather than relying on a prebuilt kit."
              video="/images/SCARA_Demo.mp4"
              images={['/images/claw.gif']}
              imageAlt="SCARA Robot Arm Claw"
              code={`/*
Keyboard Control
Controls z-axis stepper motor via serial input
'w' - Move up
's' - Move down
'd' - Base Rotates CW
'a' - Base Rotates CCW
'c' - Claw closes
'o' - Claw opens
'x' - Servo Rotates CW
'z' - Servo Rotates CCW
*/

#include <AccelStepper.h>
#include <ESP32Servo.h>
#include <ESP32PWM.h>

// Pin Assignments
#define STEP_PIN_Z 26   // Z-axis step signal
#define DIR_PIN_Z 25    // Z-axis direction signal
#define STEP_PIN_S 16
#define DIR_PIN_S 17
#define STEP_PIN_B 12   // Base rotation step signal
#define DIR_PIN_B 14    // Base rotation direction signal
#define limit_switch_NO 21  // Z-axis limit switch

// Define the z-axis stepper motor
AccelStepper stepperZ(1, STEP_PIN_Z, DIR_PIN_Z);  // (Type:driver, STEP, DIR)
AccelStepper stepperS(1, STEP_PIN_S, DIR_PIN_S);  // End-effector stepper
AccelStepper stepperB(1, STEP_PIN_B, DIR_PIN_B);  // Base rotation stepper

// Movement parameters
const int moveSpeed = 1000;  // Steps per second when moving
long currPositionZ = 0;
long currPositionS = 0;
long currPositionB = 0;
char lastCommand = 0;        // Track last command received

Servo myservo;  // create servo object to control a servo
int pos = 0;    // variable to store the servo position
int servoPin = 5;

// Check if limit switch is pressed
bool isLimitSwitchPressed() {
return digitalRead(limit_switch_NO) == LOW;
}

void setup() {
Serial.begin(115200);
pinMode(STEP_PIN_S, OUTPUT);
pinMode(DIR_PIN_S, OUTPUT);
digitalWrite(STEP_PIN_S, LOW);
digitalWrite(DIR_PIN_S, LOW);

// Configure limit switch
pinMode(limit_switch_NO, INPUT_PULLUP);

// Configure stepper motor
stepperZ.setMaxSpeed(500);
stepperZ.setAcceleration(200);
stepperZ.setSpeed(0);  // Start stopped

stepperS.setMaxSpeed(800);  // Reduced speed for smoother movement
stepperS.setAcceleration(200);  // Reduced acceleration for smoother, less jerky movement
stepperS.setSpeed(0);

stepperB.setMaxSpeed(50);
stepperB.setAcceleration(10);
stepperB.setSpeed(0);

// Allow allocation of all timers
ESP32PWM::allocateTimer(0);
ESP32PWM::allocateTimer(1);
ESP32PWM::allocateTimer(2);
ESP32PWM::allocateTimer(3);

myservo.setPeriodHertz(50);    // standard 50 hz servo
myservo.attach(servoPin, 1000, 2000); // attaches the servo on servoPin

// Initialize servo to open position (0 degrees)
pos = 0;
myservo.write(pos);
delay(500);  // Give servo time to reach open position

}

void loop() {
// Check for serial commands
if (Serial.available()) {
    char command = Serial.read();
    
    if (command == 'w') {
    // Move up - check limit switch first, disable 'w' if limit switch is pressed
    if (!isLimitSwitchPressed()) {
        currPositionZ -= 20;
        stepperZ.moveTo(currPositionZ);
        lastCommand = 'w';
    } else {
        // Limit switch pressed - stop immediately by setting target to current position
        stepperZ.moveTo(stepperZ.currentPosition());
        currPositionZ = stepperZ.currentPosition();
        lastCommand = 0;
    }
    }
    else if (command == 's') {
    currPositionZ += 20;
    // Move down
    stepperZ.moveTo(currPositionZ);  // Negative speed for down
    lastCommand = 's';
    }
    else if (command == 'a') {
    // Base rotate counter-clockwise
    currPositionB -= 20;
    stepperB.moveTo(currPositionB);
    lastCommand = 'a';
    }
    else if (command == 'd') {
    // Base rotate clockwise
    currPositionB += 20;
    stepperB.moveTo(currPositionB);
    lastCommand = 'd';
    }
    else if (command == 'z') {
    // End-effector rotate counter-clockwise (microstepped for smooth movement)
    currPositionS -= 100;  // Reduced from 10 to 2 for microstepping
    stepperS.moveTo(currPositionS);
    lastCommand = 'z';
    }
    else if (command == 'x') {
    // End-effector rotate clockwise (microstepped for smooth movement)
    currPositionS += 100;  // Reduced from 10 to 2 for microstepping
    stepperS.moveTo(currPositionS);
    lastCommand = 'x';
    }
    else if (command == 'o') {
    // Close servo - goes from 0 degrees to 180 degrees
    for (pos = 0; pos <= 180; pos += 3) {
        myservo.write(pos);    // tell servo to go to position in variable 'pos'
        delay(5);             // waits 5ms for the servo to reach the position
    }
    }
    else if (command == 'c') {
    // Open servo - goes from 180 degrees to 0 degrees
    for (pos = 180; pos >= 0; pos -= 3) {
        myservo.write(pos);    // tell servo to go to position in variable 'pos'
        delay(5);             // waits 5ms for the servo to reach the position
    }
    }
    else if (command == ' ') {
    // Stop (spacebar or any other key stops movement)
    // Immediately stop all steppers and sync positions
    stepperZ.stop();
    stepperS.stop();
    stepperB.stop();
    // Sync position variables with actual positions to prevent any movement
    currPositionZ = stepperZ.currentPosition();
    currPositionS = stepperS.currentPosition();
    currPositionB = stepperB.currentPosition();
    lastCommand = 0;
    }

}
else {
    // If no new command, continue with last command
    // This allows continuous movement while key is held
    // Only update target when stepper is close to current target to prevent shaking
    if (lastCommand == 'w') {
    // Check limit switch before continuing up movement
    if (!isLimitSwitchPressed() && abs(stepperZ.distanceToGo()) < 40) {
        currPositionZ -= 20;
        stepperZ.moveTo(currPositionZ);
    } else if (isLimitSwitchPressed()) {
        // Limit switch pressed - stop immediately by setting target to current position
        stepperZ.moveTo(stepperZ.currentPosition());
        currPositionZ = stepperZ.currentPosition();
        lastCommand = 0;
    }
    }
    else if (lastCommand == 's' && abs(stepperZ.distanceToGo()) < 40) {
    currPositionZ += 20;
    stepperZ.moveTo(currPositionZ);
    }
    else if (lastCommand == 'a' && abs(stepperB.distanceToGo()) < 40) {
    currPositionB -= 20;
    stepperB.moveTo(currPositionB);
    }
    else if (lastCommand == 'd' && abs(stepperB.distanceToGo()) < 40) {
    currPositionB += 20;
    stepperB.moveTo(currPositionB);
    }
    else if (lastCommand == 'z' && abs(stepperS.distanceToGo()) < 40) {
    currPositionS -= 100;  // Reduced from 10 to 2 for microstepping
    stepperS.moveTo(currPositionS);
    }
    else if (lastCommand == 'x' && abs(stepperS.distanceToGo()) < 40) {
    currPositionS += 100;  // Reduced from 10 to 2 for microstepping
    stepperS.moveTo(currPositionS);
    }

}

// Check limit switch and stop z-axis immediately if pressed while moving up
if (isLimitSwitchPressed() && (lastCommand == 'w' || stepperZ.distanceToGo() < 0)) {
    // Stop immediately by setting target to current position
    stepperZ.moveTo(stepperZ.currentPosition());
    currPositionZ = stepperZ.currentPosition();
    lastCommand = 0;
}

// Run the stepper motor (non-blocking)
stepperZ.run();
stepperS.run();
stepperB.run();
}`}
              links={[
                {
                  label: 'View Project Page',
                  href: 'https://acbynumii.github.io/ps70-f25/final-project.html',
                  external: true,
                },
                {
                  label: 'View Code',
                  href: '#',
                  code: true,
                },
              ]}
              tags={['PS70', 'Robotics', 'Mechanical Design', 'Electrical Systems', 'Software', 'ESP32', '3D Printing', 'Bluetooth']}
            />
            <ProjectCard
              title="Competition Robot (Turf-Wars)"
              date="Fall 2024"
              description="This project was for ES51: Computer-Aided Machine Design, Harvard's gateway mechanical engineering course. In our class competition, Turf Wars, teams designed and built robots to collect ping pong balls and hockey pucks, climb ramps, and navigate under obstacles. My team's design featured a very low center of gravity and claw arm to contain the objects. I led our design process from initial prototyping to CAD in SolidWorks and helped machine key components in the shop. Our final build included 3D printed parts, laser cuts, CNC-milled silicone molds, and screwdriver motors — all while staying within strict size and weight limits. We made it to the podium and also took home the award for best video!"
              images={['/images/turf-wars-1.jpeg', '/images/turf-wars-2.jpeg']}
              imageAlt="Turf-Wars Robot Competition"
              links={[
                {
                  label: 'Watch Video',
                  href: 'https://youtu.be/5nQ980gfG80',
                  external: true,
                },
              ]}
              tags={['ES51', 'CAD', 'SolidWorks', '3D Printing', 'Laser Cutting', 'CNC', 'Top 3 Finish']}
            />
            <ProjectCard
              title="Myoelectric Bionic Hand"
              date="Spring 2025"
              description="For my final project in ES50: Introduction to Electrical Engineering, I built a bionic hand that responds to muscle signals from the forearm with a small team. Using surface EMG sensors, the hand could detect and interpret electrical activity from different muscle groups to control finger movement in real time. We edited an open source bionic hand project by Will Cogley, wired and programmed the signal processing system, and integrated the entire setup using a microcontroller. The project combined everything we learned in the class, from circuitry and signal filtering to embedded programming and physical prototyping, and gave me a hands-on intro to biomedical applications in engineering."
              images={['/images/bionic-hand-1.JPEG', '/images/bionic-hand-2.JPEG']}
              imageAlt="Myoelectric Bionic Hand Project"
              imagePositions={['center 20%', 'center']}
              links={[
                {
                  label: 'Watch Video',
                  href: 'https://www.youtube.com/watch?v=ILK5vl8Apew',
                  external: true,
                },
              ]}
              tags={['ES50', 'EMG', 'Arduino', 'Biomedical Engineering', 'Signal Processing']}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

