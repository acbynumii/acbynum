import Hero from '@/components/Hero';
import Image from 'next/image';
import DankiraCard from '@/components/DankiraCard';
import FopCard from '@/components/FopCard';
import CourseCarousel from '@/components/CourseCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-gray-100">
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
            <div className="space-y-4 text-gray-900 dark:text-gray-400">
              <p>
                I am in the class of 2028 studying Mechanical Engineering at Harvard University, from Hilton Head Island, 
                South Carolina. I&apos;ve developed a passion for engineering through hands-on work in design, 
                fabrication, and prototyping.
              </p>
              <p>
                One example of that is a myoelectric bionic hand I built as the final project for my Intro to 
                EE course. I have also served as a Course Assistant for ES51 since freshman year, Harvard&apos;s 
                gateway Mechanical Engineering course.
              </p>
              <p>
                This past summer, I was a Mechanical Engineering Intern at General Dynamics Mission Systems, 
                simultaneously completing the Takeoff Institute 2026 Summer Fellowship. On campus, I lead the 
                Fluids and Integration team in the Rocket Propulsion Group, serve as an NSBE Senator and as 
                ambassador for Curious Cardinals, source early-stage startups as an analyst for Harvard Venture Capital Group, 
                and scout for Collide Capital.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-gray-100">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-gray-100">
                Harvard University
              </h3>
              <p className="text-gray-900 dark:text-gray-400">
                Bachelor of Science: Mechanical Engineering, GPA: 3.6
              </p>
              <p className="text-gray-900 dark:text-gray-400">
                Secondary Field: Computer Science | Citation: Arabic
              </p>
              <p className="text-gray-900 dark:text-gray-400">
                Cambridge, MA | Graduation: May 2028
              </p>
              
              {/* Relevant Coursework Subsection */}
              <div className="mt-6">
                <h4 className="mb-4 text-lg font-semibold text-black dark:text-gray-100">
                  Relevant Coursework
                </h4>
                <CourseCarousel
                  courses={[
                    { name: 'Computer-Aided Machine Design', code: 'ES51', semester: 'Fall', year: '2024' },
                    { name: 'Intro to EE', code: 'ES50', semester: 'Spring', year: '2025' },
                    { name: 'Intro to the Mechanics of Solids', code: 'ES120', semester: 'Spring', year: '2026' },
                    { name: 'Intro to Fluid Mechanics and Transport Processes', code: 'ES123', semester: 'Spring', year: '2026' },
                    { name: 'Thermodynamics', code: 'ES181', semester: 'Fall', year: '2025' },
                    { name: 'Mechanical Systems', code: 'ES125', semester: 'Fall', year: '2026' },
                    { name: 'Digital Fabrication', code: 'PS70', semester: 'Fall', year: '2025' },
                    { name: 'Humanitarian Design Projects', code: 'ES96', semester: 'Fall/Spring', year: '2025/2026' },
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-gray-100">
                Hilton Head Island High School
              </h3>
              <p className="text-gray-900 dark:text-gray-400">
                International Baccalaureate Diploma
              </p>
              <p className="text-gray-900 dark:text-gray-400">
                Weighted GPA: 5.276; Unweighted GPA: 4.0
              </p>
              <p className="text-gray-900 dark:text-gray-400">
                Hilton Head Island, SC | Graduation: June 2024
              </p>
            </div>
          </div>
        </section>

        {/* Current Activities Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-gray-100">
            Current Activities & Roles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                General Dynamics Mission Systems
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Former Engineering Intern | Greensboro, NC | May 2026 – Summer 2026
              </p>
              <p className="mt-2 text-gray-900 dark:text-gray-400">
                Designed mechanical assemblies in SolidWorks and architected a Python-Blender automation pipeline via Claude MCP for mission scenario visualization. Executed trade studies and integration for an undersea demonstration, compiling COTS vehicle options and a bill of materials.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">SolidWorks</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Python</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Blender</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Trade Studies</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Harvard Rocket Propulsion Group
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fluids and Integration Team Lead | Sep 2024 – present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Fabricated components for a high-power liquid-bipropellant rocket, including lathe-turning a propellant piston and waterjet-cutting bulkheads, brackets, and thrust chamber flange plates. Conducted a test fire of the bipropellant engine, including propellant loading, tank pressurization, and ignition loading. Co-designed a liquid rocket injector in SolidWorks, incorporating CFD analysis to improve combustion efficiency. We are getting ready to compete in the next 10k COTS solid rocket competition under IREC.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CAD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">SolidWorks</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CFD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Waterjet</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">IREC</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Leadership</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Teaching Assistant for ES51: Computer-Aided Machine Design
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-400">Feb 2025 – present</p>
              <p className="mt-2 text-gray-900 dark:text-gray-400">
                Introduced 100+ students to topics such as CAD, 3D printing, GD&T, technical 
                drawings, and CNC machining. Facilitated hands-on learning in weekly 
                labs, hosted office hours, and graded homework, design notebooks, and projects.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CAD</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">3D Printing</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">GD&T</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">CNC</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Teaching</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Mech Tech
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Harvard SEAS | Sep 2026 – present
              </p>
              <p className="mt-2 text-gray-900 dark:text-gray-400">
                Perform maintenance and repairs on 3D printers and install digital readout systems on manual lathes, while supporting shop operations and occasionally assisting with design and fabrication.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">3D Printing</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Lathe</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Machine Shop</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Harvard Society of Black Scientists and Engineers
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                NSBE Senator
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Previously Mentorship Chair, coordinating bonding and peer advising. As NSBE Senator, I handle logistics for the annual career fair, getting students there and registered, and professionally preparing them for the fair.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">NSBE</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Career Fair</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Mentorship</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Harvard Venture Capital Group
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Analyst | Sep 2026 – present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Sourcing early-stage startups for a number of partner firms.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Venture Capital</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Sourcing</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Collide Capital
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Venture Scout | Fall 2026
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Source and diligence pre-seed to Series A B2B software startups in fintech, supply chain, and the future of work, and build venture fundamentals in bi-weekly sessions with the investment team.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Venture Scout</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Sourcing</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Due Diligence</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Curious Cardinals
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Mentor and Harvard Ambassador | Apr 2025 – present
              </p>
              <p className="mt-2 text-gray-900 dark:text-gray-400">
                Mentored a student through the design and launch of a 3D-printed model rocket, from Onshape 
                CAD and OpenRocket simulation through a successful recovery. I also support students in math 
                tutoring, college application coaching, and executive functioning, and refer new mentors as 
                Harvard&apos;s ambassador.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Mentorship</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Onshape</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">OpenRocket</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">3D Printing</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                Engineers Without Borders
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Kenya Project | Sep 2025 – May 2026
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Used Revit to design and model water kiosks for EWB&apos;s Kenya project, improving 
                clean water access in remote villages.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Revit</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Design</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Humanitarian Engineering</span>
              </div>
            </div>
            <FopCard />
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
                The Takeoff Institute
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Takeoff Fellow | May 2026 – Aug 2026
              </p>
              <p className="mt-2 text-gray-900 dark:text-gray-400">
                Selected for the 2026 Summer Fellowship, an eight-week cohort of 50 fellows chosen from 
                more than 600 applicants. The program centers on real projects and advising; I was mentored 
                by Dr. Monica Moody Moore.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Fellowship</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Mentorship</span>
              </div>
            </div>
            <DankiraCard />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-gray-100">
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-gray-100">
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
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-gray-100">
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
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-gray-100">
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
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-gray-100">
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
