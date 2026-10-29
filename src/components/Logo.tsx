// Brand mark: code brackets around an AI spark (web development + Gen AI),
// in ink with a sage spark. Same drawing as public/favicon.svg.
export function Logo({ size = 34, light = false }: { size?: number; light?: boolean }) {
  const [box, mark] = light ? ['#eef0ea', '#1c2321'] : ['#1c2321', '#eef0ea'];
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <rect width="36" height="36" rx="11" fill={box} />
      {/* code brackets */}
      <path
        d="M13 11 7 18l6 7M23 11l6 7-6 7"
        fill="none"
        stroke={mark}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* AI spark */}
      <path d="M18 12.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill={light ? '#3f6b55' : '#9fc3ae'} />
    </svg>
  );
}
