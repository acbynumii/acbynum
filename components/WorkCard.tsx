import { WorkExperience } from "@/data/resume";

interface WorkCardProps {
  work: WorkExperience;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-semibold mb-1">{work.position}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{work.company}</p>
          {work.location && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{work.location}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {work.startDate} - {work.endDate}
          </p>
        </div>
      </div>
      <ul className="space-y-2 mb-4">
        {work.description.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {work.technologies && work.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
          {work.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

