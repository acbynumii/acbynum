'use client';

import { useEffect } from 'react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  title?: string;
}

export default function CodeModal({ isOpen, onClose, code, title = 'Code' }: CodeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-black dark:text-gray-100">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            aria-label="Close"
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
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Code Content */}
        <div className="overflow-auto bg-gray-950" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          <pre className="p-6 text-sm leading-relaxed text-gray-100 font-mono">
            <code className="text-gray-100">{code}</code>
          </pre>
        </div>

        {/* Footer with copy button */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-800 dark:bg-gray-800">
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              // You could add a toast notification here
            }}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}

