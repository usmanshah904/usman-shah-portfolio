import { useId } from 'react';

// Brand mark: code brackets around an AI spark (web development + Gen AI).
// Same drawing as public/favicon.svg.
export function Logo({ size = 34 }: { size?: number }) {
  const id = useId();
  const bg = `${id}-bg`;
  const shine = `${id}-shine`;

  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1f4e79" />
          <stop offset="0.55" stopColor="#5b5bd6" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
        <radialGradient id={shine} cx="0.3" cy="0.2" r="0.8">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="36" height="36" rx="10" fill={`url(#${bg})`} />
      <rect width="36" height="36" rx="10" fill={`url(#${shine})`} />
      {/* code brackets */}
      <path
        d="M13 11 7 18l6 7M23 11l6 7-6 7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AI spark */}
      <path d="M18 12.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#b8ecf7" />
    </svg>
  );
}
