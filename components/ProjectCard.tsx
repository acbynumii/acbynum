'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CodeModal from './CodeModal';

interface ProjectCardProps {
  title: string;
  date?: string;
  description: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
  imagePositions?: string[]; // object-position for each image
  video?: string; // video file path
  code?: string; // code content to display in modal
  links?: Array<{
    label: string;
    href: string;
    external?: boolean;
    code?: boolean; // if true, opens code modal instead of navigating
  }>;
  tags?: string[];
}

export default function ProjectCard({
  title,
  date,
  description,
  image,
  images,
  imageAlt,
  imagePositions,
  video,
  code,
  links,
  tags,
}: ProjectCardProps) {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  // Use images array if provided, otherwise fall back to single image
  const displayImages = images || (image ? [image] : []);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      {(video || displayImages.length > 0) && (
        <div className="flex flex-col overflow-hidden bg-gray-50 p-2 dark:bg-gray-950">
          {video && (
            <div className="relative w-full overflow-hidden rounded">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <video
                  src={video}
                  controls
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
          {displayImages.length > 0 && (
            <>
              {displayImages.map((img, index) => {
                const objectPosition = imagePositions?.[index] || 'center';
                return (
                  <div key={index} className={`relative w-full overflow-hidden rounded ${video || index > 0 ? 'mt-0.5' : ''}`}>
                    <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={img}
                        alt={imageAlt ? `${imageAlt} - Image ${index + 1}` : `${title} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectPosition }}
                      />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-black dark:text-gray-100">
            {title}
          </h3>
          {date && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </span>
          )}
        </div>
        <p className="mb-4 text-gray-900 dark:text-gray-400">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {links.map((link, index) => {
              if (link.code && code) {
                return (
                  <button
                    key={index}
                    onClick={() => setIsCodeModalOpen(true)}
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
                  >
                    {link.label} →
                  </button>
                );
              }
              return (
                <Link
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
                >
                  {link.label} →
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {code && (
        <CodeModal
          isOpen={isCodeModalOpen}
          onClose={() => setIsCodeModalOpen(false)}
          code={code}
          title={`${title} - Code`}
        />
      )}
    </article>
  );
}

