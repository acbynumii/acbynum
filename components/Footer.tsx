import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Anthony Bynum. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/anthony-bynum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/acbynumii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Instagram
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

