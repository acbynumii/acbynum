export default function L1CertCard() {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="overflow-hidden bg-gray-50 p-2 dark:bg-gray-950">
        <div className="relative w-full overflow-hidden rounded bg-black" style={{ aspectRatio: '9/16' }}>
          <video
            src="/images/L1_Cert_Launch.mp4"
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            aria-label="Level 1 certification launch on an H-219 motor"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-black dark:text-gray-100">
            Level 1 Certification
          </h3>
          <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400">May 2026</span>
        </div>
        <p className="mb-4 text-gray-900 dark:text-gray-400">
          National Association of Rocketry Level 1 certification, flown in May 2026 on an H-219 motor.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            NAR
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Level 1
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            H-219
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            High-Power Rocketry
          </span>
        </div>
      </div>
    </article>
  );
}
