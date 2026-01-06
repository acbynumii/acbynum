import Image from "next/image";
import { ResearchProject } from "@/data/research";

interface ResearchCardProps {
  research: ResearchProject;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {research.images && research.images.length > 0 && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={`/images/${research.images[0]}`}
            alt={research.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-100">{research.title}</h3>
        {research.institution && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{research.institution}</p>
        )}
        {research.advisor && (
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
            Advisor: {research.advisor}
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {research.startDate}
          {research.endDate ? ` - ${research.endDate}` : " - Present"}
        </p>
        <p className="text-gray-900 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {research.description}
        </p>
        {research.technologies && research.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {research.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {research.publications && research.publications.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Publications:
            </p>
            {research.publications.map((pub, index) => (
              <div key={index} className="mb-2">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {pub.title}
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {pub.venue}, {pub.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

