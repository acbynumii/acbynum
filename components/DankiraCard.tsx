'use client';

import { useState } from 'react';
import VideoModal from './VideoModal';

export default function DankiraCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Dankira
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Harvard's Habesha dance group</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Performing traditional dances in customary clothing from Ethiopian and Eritrean cultures while celebrating the culture through movement and community.
        </p>
        <div className="mt-4">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
          >
            Watch Video →
          </button>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/images/dankira.mp4"
        title="Dankira Performance"
      />
    </>
  );
}

