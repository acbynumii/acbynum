import Hero from '@/components/Hero';
import Image from 'next/image';
import DankiraCard from '@/components/DankiraCard';
import CourseCarousel from '@/components/CourseCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/lowell-house.webp"
                alt="Lowell House"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
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
                Beyond the classroom, I lead the fluids and integration team in the Rocket Propulsion Group, 
                serve on the board for both HSBSE and EESA, and dance for Dankira, Harvard's Habesha dance group.
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
                Secondary Field: Computer Science | Citation: Arabic
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Cambridge, MA | Graduation: May 2028
              </p>
              
              {/* Relevant Coursework Subsection */}
              <div className="mt-6">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Relevant Coursework
                </h4>
                <CourseCarousel
                  courses={[
                    { name: 'Computer-Aided Machine Design', code: 'ES51', semester: 'Fall', year: '2024' },
                    { name: 'Intro to EE', code: 'ES50', semester: 'Spring', year: '2025' },
                    { name: 'Intro to the Mechanics of Solids', code: 'ES120', semester: 'Spring', year: '2026' },
                    { name: 'Intro to Fluid Mechanics and Transport Processes', code: 'ES123', semester: 'Spring', year: '2026' },
                    { name: 'Thermodynamics', code: 'ES181', semester: 'Fall', year: '2025' },
                    { name: 'Digital Fabrication', code: 'PS70', semester: 'Fall', year: '2025' },
                    { name: 'Humanitarian Design Projects', code: 'ES96', semester: 'Fall/Spring', year: '2025/2026' },
                  ]}
                />
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CAD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">3D Printing</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">GD&T</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CNC</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Teaching</span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CAD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">SolidWorks</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CFD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">3D Printing</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Machining</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Leadership</span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Revit</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Design</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Humanitarian Engineering</span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">SolidWorks</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Formula SAE</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Automotive Design</span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Leadership</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Mentorship</span>
              </div>
            </div>
            <DankiraCard />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Technical
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>CAD SolidWorks Design Associate (CSWA)</li>
                <li>CAD</li>
                <li>SolidWorks</li>
                <li>Revit</li>
                <li>Python</li>
                <li>HTML, CSS, PHP</li>
                <li>C++ (familiarity)</li>
                <li>Arduino</li>
                <li>ESP32</li>
                <li>Bluetooth</li>
                <li>Signal Processing</li>
                <li>Software Development</li>
                <li>EMG (Electromyography)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Machine Shop & Fabrication
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>3D Printing</li>
                <li>Laser Cutting</li>
                <li>CNC Machining</li>
                <li>Machining (manual)</li>
                <li>Soldering</li>
                <li>Mill, lathe, drill press</li>
                <li>Bandsaw, power tools</li>
                <li>GD&T</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Engineering Disciplines
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>Mechanical Design</li>
                <li>Electrical Systems</li>
                <li>Robotics</li>
                <li>CFD Analysis</li>
                <li>Automotive Design</li>
                <li>Biomedical Engineering</li>
                <li>Humanitarian Engineering</li>
                <li>Formula SAE</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Languages & Soft Skills
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>English (fluent)</li>
                <li>Arabic (advanced)</li>
                <li>Spanish (intermediate)</li>
                <li>Leadership</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
