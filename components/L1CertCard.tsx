'use client';

import { useState } from 'react';
import VideoModal from './VideoModal';

export default function L1CertCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-gray-100">
            Level 1 Certification
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">H-219 motor</p>
          <p className="mb-4 text-gray-900 dark:text-gray-400">
            Level 1 high-power rocketry certification flight on an H-219 motor.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
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
          <button
            onClick={() => setIsVideoOpen(true)}
            className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
          >
            Watch Video →
          </button>
        </div>
      </article>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/images/L1_Cert_Launch.mp4"
        title="Level 1 Certification — H-219"
      />
    </>
  );
}
