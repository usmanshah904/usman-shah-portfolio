import type { Category } from '../data/content';
import styles from './ProjectCover.module.css';

// Generated, decorative cover art for project cards (no stock images).
// Gen AI projects get an agent graph; web projects get a browser mockup.

const graphs: { nodes: [number, number][]; edges: [number, number][] }[] = [
  {
    nodes: [[90, 80], [200, 45], [200, 115], [310, 80]],
    edges: [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2]],
  },
  {
    nodes: [[80, 50], [80, 110], [200, 80], [320, 50], [320, 110]],
    edges: [[0, 2], [1, 2], [2, 3], [2, 4]],
  },
  {
    nodes: [[70, 80], [160, 45], [240, 115], [330, 80]],
    edges: [[0, 1], [1, 2], [2, 3], [0, 2]],
  },
  {
    nodes: [[70, 80], [165, 80], [250, 40], [250, 120], [340, 80]],
    edges: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]],
  },
];

function AgentGraph({ variant }: { variant: number }) {
  const g = graphs[variant % graphs.length];
  return (
    <svg viewBox="0 0 400 160" className={styles.svg} preserveAspectRatio="xMidYMid meet">
      {g.edges.map(([a, b], i) => (
        <line
          key={i}
          x1={g.nodes[a][0]}
          y1={g.nodes[a][1]}
          x2={g.nodes[b][0]}
          y2={g.nodes[b][1]}
          className={styles.edge}
        />
      ))}
      {g.nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="18" className={styles.halo} />
          <circle cx={x} cy={y} r="9" className={i === 0 ? styles.nodeMain : styles.node} />
        </g>
      ))}
    </svg>
  );
}

function BrowserMock({ variant }: { variant: number }) {
  const alt = variant % 2 === 1;
  return (
    <svg viewBox="0 0 400 160" className={styles.svg} preserveAspectRatio="xMidYMid meet">
      <rect x="80" y="22" width="240" height="160" rx="9" className={styles.window} />
      <circle cx="95" cy="35" r="3" className={styles.chromeDot} />
      <circle cx="106" cy="35" r="3" className={styles.chromeDot} />
      <circle cx="117" cy="35" r="3" className={styles.chromeDot} />
      <rect x="135" y="30" width="110" height="9" rx="4.5" className={styles.bar} />
      {alt ? (
        <>
          <rect x="95" y="56" width="100" height="9" rx="4.5" className={styles.strong} />
          <rect x="95" y="72" width="82" height="6" rx="3" className={styles.line} />
          <rect x="95" y="84" width="92" height="6" rx="3" className={styles.line} />
          <rect x="95" y="100" width="46" height="14" rx="7" className={styles.accent} />
          <rect x="212" y="54" width="94" height="64" rx="7" className={styles.block} />
          <rect x="95" y="128" width="64" height="40" rx="6" className={styles.block} />
          <rect x="168" y="128" width="64" height="40" rx="6" className={styles.block} />
          <rect x="242" y="128" width="64" height="40" rx="6" className={styles.block} />
        </>
      ) : (
        <>
          <rect x="145" y="56" width="110" height="9" rx="4.5" className={styles.strong} />
          <rect x="125" y="72" width="150" height="6" rx="3" className={styles.line} />
          <rect x="177" y="88" width="46" height="14" rx="7" className={styles.accent} />
          <rect x="95" y="116" width="66" height="50" rx="6" className={styles.block} />
          <rect x="167" y="116" width="66" height="50" rx="6" className={styles.block} />
          <rect x="239" y="116" width="66" height="50" rx="6" className={styles.block} />
        </>
      )}
    </svg>
  );
}

export function ProjectCover({ category, variant }: { category: Category; variant: number }) {
  return (
    <div className={`${styles.cover} ${category === 'web' ? styles.web : styles.genai}`} aria-hidden="true">
      {category === 'genai' ? <AgentGraph variant={variant} /> : <BrowserMock variant={variant} />}
    </div>
  );
}
