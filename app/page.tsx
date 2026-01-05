import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/lowell-house.webp"
                alt="Lowell House"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I am a rising sophomore studying Mechanical Engineering at Harvard University. 
                I currently live in Hilton Head Island, South Carolina. I've developed a passion 
                for engineering through hands-on work in design, fabrication, and prototyping.
              </p>
              <p>
                One example of that is a myoelectric bionic hand I built as part of my final project 
                for ES50. In Spring 2025, I also served as a Course Assistant for ES51, Harvard's 
                gateway Mechanical Engineering course.
              </p>
              <p>
                Beyond the classroom, I'm involved in the Rocket Propulsion Group and the Harvard 
                College Automotive Society, serve on the board for both HSBSE and EESA, and dance 
                for Dankira, Harvard's Habesha dance group.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Harvard University
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Science: Mechanical Engineering, GPA: 3.7
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Cambridge, MA | Graduation: May 2028
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Relevant Coursework:</strong> Computer-Aided Machine Design, Intro to EE, 
                Intro to the Mechanics of Solids, Intro to Fluid Mechanics and Transport Processes, 
                Thermodynamics, Digital Fabrication, and Humanitarian Design Projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Hilton Head Island High School
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                International Baccalaureate Diploma
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Weighted GPA: 5.276; Unweighted GPA: 4.0
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Hilton Head Island, SC | Graduation: June 2024
              </p>
            </div>
          </div>
        </section>

        {/* Current Activities Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Current Activities & Roles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Teaching Assistant for ES51: Computer-Aided Machine Design
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Feb 2025 – present</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Introduced 40+ students to topics such as CAD, 3D printing, GD&T, technical 
                drawings, and machining (CNC and manual). Facilitated hands-on learning in weekly 
                labs, provided office hours, and graded homework, design notebooks, and projects.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Harvard Rocket Propulsion Group
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fluids and Integration Team Lead | Sep 2024 – present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Constructed a high-power, liquid-bipropellant rocket, using CAD, machining tools, 
                and 3D printing. Co-designed a liquid rocket injector in SolidWorks, incorporating 
                CFD analysis results to enhance combustion efficiency.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Engineers Without Borders
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Kenya Project | Sep 2025 – present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Used Revit to design and model water kiosks for EWB's Kenya project, improving 
                clean water access in remote villages.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Harvard Undergraduate Automotive Society
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Brake Pedal Team | Sep 2024 – Sep 2025
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Designed the brake pedal system for a Formula SAE car in SolidWorks, balancing 
                space limits with comfort and safety.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Harvard Society of Black Scientists and Engineers
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mentorship Chair | May 2025 – present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Facilitating mentorship and engagement among students by coordinating bonding 
                and peer advising programs.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Dankira
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Harvard's Habesha dance group</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Technical
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>CAD SolidWorks Design Associate (CSWA)</li>
                <li>Revit</li>
                <li>Python</li>
                <li>HTML, CSS, PHP</li>
                <li>C++ (familiarity)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Machine Shop
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>3D printer</li>
                <li>Laser cutter</li>
                <li>Soldering</li>
                <li>Mill, lathe, drill press</li>
                <li>Bandsaw, power tools</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Languages
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>English (fluent)</li>
                <li>Arabic (advanced)</li>
                <li>Spanish (intermediate)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
