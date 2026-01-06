import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Research() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-gray-100">
            Research
          </h1>
          <p className="text-lg text-gray-900 dark:text-gray-400">
            Research projects and publications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="MIT Department of Aeronautics and Astronautics"
            date="Sep 2025 – present"
            description="Conducting wind-tunnel experiments and aerodynamic analyses to optimize passive dust-mitigation in off-grid solar systems. Implementing API calls, completing the user registration system, and advancing the frontend for the Achesi Solar Monitoring Network (ASMONET) to support expanded solar and weather data collection and analysis in Ghana."
            tags={['Aerodynamics', 'Wind Tunnel', 'Solar Systems', 'API Development', 'Frontend']}
          />
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-gray-100">
              International Baccalaureate Extended Essay
            </h3>
            <p className="mb-4 text-sm text-gray-900 dark:text-gray-400">
              Sep 2023 – Apr 2024
            </p>
            <p className="mb-4 text-gray-900 dark:text-gray-400">
              Conducted independent aerodynamics research, analyzing the impact of airfoil angle of 
              attack on lift and drag forces, modeling the airfoil after a Piper PA-28 aircraft. 
              I used NASA's FoilSim to collect data across a range of angles from -20° to 20°, 
              tracking how lift and drag changed as the angle increased.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              As expected, both forces increased together until about 15.5°, the critical angle of 
              attack, where lift peaked and then started to drop while drag kept rising, a sign of 
              aerodynamic stall. The results lined up with Bernoulli's Principle, Newton's Third Law, 
              and flow attachment theory.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              While the simulator made it easier to control conditions like altitude and air density, 
              it also had limits with rounding and precision. If I were to take this further, I'd look 
              into using computational fluid dynamics to get more accurate and detailed results or test 
              different airfoil designs altogether.
            </p>
            <Link
              href="/extended-essay.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Read Extended Essay PDF
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

