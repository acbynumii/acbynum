'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/images/fop-summit.jpg', alt: 'Summit view on the FOP hiking trip in northern Vermont' },
  { src: '/images/fop-ridge.jpg', alt: 'FOP group on a rocky ridge in northern Vermont' },
  { src: '/images/fop-bus.jpg', alt: 'FOP group on the bus to the hiking trip' },
];

export default function FopCard() {
  const [photosOpen, setPhotosOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-2 text-lg font-semibold text-black dark:text-gray-100">
        First-Year Outdoor Program
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">FOP Leader</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Co-led a 5-day hiking trip for 12 incoming freshmen in northern Vermont.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">FOP</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Hiking</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Leadership</span>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setPhotosOpen((open) => !open)}
          className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
          aria-expanded={photosOpen}
        >
          {photosOpen ? 'Hide Photos' : 'Look at Photos'}
        </button>
      </div>
      {photosOpen && (
        <div className="mt-4 grid gap-3">
          {photos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
