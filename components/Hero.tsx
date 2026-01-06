import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/profile.webp"
              alt="Anthony Bynum"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 25%' }}
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
              Anthony Bynum
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Harvard College Class of 2028 | Mechanical Engineering S.B.
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              acbynum@college.harvard.edu | (843) 338-4445
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Interested in Aerospace, Sustainability, AI, ML, Arabic, Basketball, and Mentorship
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="https://www.linkedin.com/in/anthony-bynum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <Image
                  src="/images/linkedin.webp"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/acbynumii/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <span>Instagram</span>
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
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
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

