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

// Software projects: a small task-list app (search bar, checked and open tasks).
function TaskMock() {
  const rows = [
    { y: 82, done: true, w: 120 },
    { y: 106, done: true, w: 96 },
    { y: 130, done: false, w: 136 },
    { y: 154, done: false, w: 84 },
  ];
  return (
    <svg viewBox="0 0 400 160" className={styles.svg} preserveAspectRatio="xMidYMid meet">
      <rect x="80" y="22" width="240" height="160" rx="9" className={styles.window} />
      <circle cx="95" cy="35" r="3" className={styles.chromeDot} />
      <circle cx="106" cy="35" r="3" className={styles.chromeDot} />
      <circle cx="117" cy="35" r="3" className={styles.chromeDot} />
      <rect x="135" y="30" width="110" height="9" rx="4.5" className={styles.bar} />
      <rect x="95" y="54" width="150" height="14" rx="7" className={styles.block} />
      <rect x="253" y="54" width="52" height="14" rx="7" className={styles.accent} />
      {rows.map((r) => (
        <g key={r.y}>
          <circle cx="103" cy={r.y} r="6" className={r.done ? styles.accent : styles.chromeDot} />
          <rect x="117" y={r.y - 3} width={r.w} height="6" rx="3" className={r.done ? styles.line : styles.strong} />
        </g>
      ))}
    </svg>
  );
}

// Multi-agent project: its real architecture. On card hover the links glow and
// packets travel the A2A request and response paths (see .a2a* styles).
function A2ADiagram() {
  return (
    <svg viewBox="0 0 400 160" className={`${styles.svg} ${styles.a2a}`} preserveAspectRatio="xMidYMid meet">
      {/* links: user <-> summary, summary <-> research over A2A, discovery */}
      <path d="M58 72 H82" className={styles.a2aLink} />
      <path d="M82 92 H58" className={styles.a2aLink} />
      <path d="M190 62 H254" className={`${styles.a2aLink} ${styles.a2aMain}`} />
      <path d="M254 94 H190" className={`${styles.a2aLink} ${styles.a2aMain}`} />
      <path d="M136 122 V146 H314 V136" className={styles.a2aDiscover} />

      {/* user */}
      <circle cx="40" cy="82" r="17" className={styles.a2aUser} />
      <circle cx="40" cy="77" r="5" className={styles.a2aUserGlyph} />
      <path d="M31 92c2-6 5-8 9-8s7 2 9 8" className={styles.a2aUserGlyph} />

      {/* summary agent */}
      <rect x="82" y="40" width="108" height="82" rx="11" className={`${styles.a2aBox} ${styles.a2aSummary}`} />
      <text x="136" y="70" textAnchor="middle" className={styles.a2aTitle}>Summary</text>
      <text x="136" y="86" textAnchor="middle" className={styles.a2aTitle}>Agent</text>
      <text x="136" y="106" textAnchor="middle" className={styles.a2aSub}>ADK · Gemini</text>

      {/* A2A label */}
      <rect x="198" y="68" width="48" height="20" rx="10" className={styles.a2aPill} />
      <text x="222" y="82" textAnchor="middle" className={styles.a2aPillText}>A2A</text>

      {/* research agent + agent card */}
      <rect x="254" y="32" width="122" height="76" rx="11" className={`${styles.a2aBox} ${styles.a2aResearch}`} />
      <text x="315" y="62" textAnchor="middle" className={styles.a2aTitle}>Research</text>
      <text x="315" y="78" textAnchor="middle" className={styles.a2aTitle}>Agent</text>
      <text x="315" y="96" textAnchor="middle" className={styles.a2aSub}>ADK · Gemini</text>
      <rect x="254" y="116" width="122" height="22" rx="7" className={styles.a2aCard} />
      <text x="315" y="131" textAnchor="middle" className={styles.a2aSub}>Agent Card</text>

      {/* packets (visible and moving on hover only) */}
      <circle r="5" className={`${styles.a2aPacket} ${styles.a2aOut}`} />
      <circle r="5" className={`${styles.a2aPacket} ${styles.a2aBack}`} />
    </svg>
  );
}

// Reflection & guardrails project: its pipeline. On card hover it plays two
// runs: a clean one that is released, then one with a false claim that is blocked.
const GR_VIA_REFLECTION = 'M98 72 C 112 72 112 46 126 46 H220 C 234 46 234 72 248 72 H296 ';
const GR_VIA_GUARDRAIL = 'M98 88 C 112 88 112 114 126 114 H220 C 234 114 234 88 248 88 H296 ';
const GR_TO_RELEASED = 'C 306 72 306 46 316 46 H330';
const GR_TO_BLOCKED = 'C 306 88 306 114 316 114 H330';
const grPath = (d: string) => ({ offsetPath: `path('${d}')` });

function GuardrailsDiagram() {
  return (
    <svg viewBox="0 0 400 160" className={`${styles.svg} ${styles.gr}`} preserveAspectRatio="xMidYMid meet">
      {/* links */}
      <path d="M98 72 C 112 72 112 46 126 46" className={styles.a2aLink} />
      <path d="M98 88 C 112 88 112 114 126 114" className={styles.a2aLink} />
      <path d="M220 46 C 234 46 234 72 248 72" className={styles.a2aLink} />
      <path d="M220 114 C 234 114 234 88 248 88" className={styles.a2aLink} />
      <path d="M296 72 C 306 72 306 46 316 46" className={`${styles.a2aLink} ${styles.grOkLink}`} />
      <path d="M296 88 C 306 88 306 114 316 114" className={`${styles.a2aLink} ${styles.grBadLink}`} />

      {/* analysis */}
      <rect x="14" y="52" width="84" height="56" rx="10" className={`${styles.a2aBox} ${styles.a2aSummary}`} />
      <text x="56" y="77" textAnchor="middle" className={styles.a2aTitle}>Analysis</text>
      <text x="56" y="94" textAnchor="middle" className={styles.a2aSub}>Claude</text>
      <g className={styles.grClaim}>
        <rect x="16" y="118" width="80" height="20" rx="10" className={styles.grClaimPill} />
        <text x="56" y="132" textAnchor="middle" className={styles.grClaimText}>+ false claim</text>
      </g>

      {/* checks */}
      <rect x="126" y="24" width="94" height="44" rx="10" className={`${styles.a2aBox} ${styles.grCheck}`} />
      <text x="173" y="43" textAnchor="middle" className={styles.a2aTitle}>Reflection</text>
      <text x="173" y="59" textAnchor="middle" className={styles.a2aSub}>correct?</text>
      <rect x="126" y="92" width="94" height="44" rx="10" className={`${styles.a2aBox} ${styles.grCheck}`} />
      <text x="173" y="111" textAnchor="middle" className={styles.a2aTitle}>Guardrail</text>
      <text x="173" y="127" textAnchor="middle" className={styles.a2aSub}>safe to release?</text>

      {/* gate */}
      <rect x="248" y="58" width="48" height="44" rx="10" className={`${styles.a2aBox} ${styles.grGate}`} />
      <text x="272" y="77" textAnchor="middle" className={styles.a2aSub}>both</text>
      <text x="272" y="92" textAnchor="middle" className={styles.a2aSub}>PASS?</text>

      {/* outcomes */}
      <rect x="316" y="26" width="72" height="40" rx="10" className={`${styles.grOut} ${styles.grReleased}`} />
      <text x="352" y="51" textAnchor="middle" className={`${styles.a2aTitle} ${styles.grOkText}`}>Released</text>
      <rect x="316" y="94" width="72" height="40" rx="10" className={`${styles.grOut} ${styles.grBlocked}`} />
      <text x="352" y="119" textAnchor="middle" className={`${styles.a2aTitle} ${styles.grBadText}`}>Blocked</text>

      {/* packets (hover only): run 1 ends at Released, run 2 at Blocked */}
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.grOk}`} style={grPath(GR_VIA_REFLECTION + GR_TO_RELEASED)} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.grOk}`} style={grPath(GR_VIA_GUARDRAIL + GR_TO_RELEASED)} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.grBad}`} style={grPath(GR_VIA_REFLECTION + GR_TO_BLOCKED)} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.grBad}`} style={grPath(GR_VIA_GUARDRAIL + GR_TO_BLOCKED)} />
    </svg>
  );
}

// Persistent-memory project: its loop. On card hover it plays two runs: run 1
// learns a preference into the store, run 2 reads it back and learns a skill.
const delay = (s: number) => ({ animationDelay: `${s}s` });

function MemoryDiagram() {
  return (
    <svg viewBox="0 0 400 160" className={`${styles.svg} ${styles.mem}`} preserveAspectRatio="xMidYMid meet">
      {/* links */}
      <path d="M94 44 H112" className={styles.a2aLink} />
      <path d="M192 44 H210" className={styles.a2aLink} />
      <path d="M290 44 H308" className={styles.a2aLink} />
      <path d="M348 66 V123 H304" className={styles.a2aLink} />
      <path d="M96 123 H54 V66" className={styles.a2aDiscover} />

      {/* loop */}
      <rect x="14" y="22" width="80" height="44" rx="10" className={`${styles.a2aBox} ${styles.memRetrieve}`} style={delay(0.5)} />
      <text x="54" y="41" textAnchor="middle" className={styles.a2aTitle}>Retrieve</text>
      <text x="54" y="57" textAnchor="middle" className={styles.a2aSub}>relevant only</text>
      <rect x="112" y="22" width="80" height="44" rx="10" className={`${styles.a2aBox} ${styles.memStep}`} style={delay(1.5)} />
      <text x="152" y="41" textAnchor="middle" className={styles.a2aTitle}>Respond</text>
      <text x="152" y="57" textAnchor="middle" className={styles.a2aSub}>Claude</text>
      <rect x="210" y="22" width="80" height="44" rx="10" className={`${styles.a2aBox} ${styles.memStep}`} style={delay(2.4)} />
      <text x="250" y="41" textAnchor="middle" className={styles.a2aTitle}>Learn</text>
      <text x="250" y="57" textAnchor="middle" className={styles.a2aSub}>one memory</text>
      <rect x="308" y="22" width="80" height="44" rx="10" className={`${styles.a2aBox} ${styles.memSave}`} style={delay(3.2)} />
      <text x="348" y="41" textAnchor="middle" className={styles.a2aTitle}>Save</text>
      <text x="348" y="57" textAnchor="middle" className={styles.a2aSub}>merge similar</text>

      {/* store */}
      <rect x="96" y="98" width="208" height="50" rx="10" className={`${styles.a2aBox} ${styles.memStore}`} style={delay(3.9)} />
      <text x="200" y="116" textAnchor="middle" className={styles.a2aTitle}>Memory · JSON</text>
      <g className={styles.memPref}>
        <rect x="118" y="124" width="84" height="17" rx="8.5" className={styles.memPrefPill} />
        <text x="160" y="136" textAnchor="middle" className={styles.memPillText}>preference</text>
      </g>
      <g className={styles.memSkill}>
        <rect x="208" y="124" width="74" height="17" rx="8.5" className={styles.memSkillPill} />
        <text x="245" y="136" textAnchor="middle" className={styles.memPillText}>skill</text>
      </g>
      <text x="44" y="100" textAnchor="end" className={styles.a2aSub}>next</text>
      <text x="44" y="113" textAnchor="end" className={styles.a2aSub}>run</text>

      {/* packets (hover only) */}
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.memHop}`} style={{ offsetPath: "path('M94 44 H112')", ...delay(1.0) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.memHop}`} style={{ offsetPath: "path('M192 44 H210')", ...delay(1.9) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.memHop}`} style={{ offsetPath: "path('M290 44 H308')", ...delay(2.8) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.memHop}`} style={{ offsetPath: "path('M348 66 V123 H304')", ...delay(3.3) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.memRead}`} style={{ offsetPath: "path('M96 123 H54 V66')", ...delay(4.0) }} />
    </svg>
  );
}

// Spec-driven task manager: spec -> app -> tests, then the replanning loop.
// On card hover: the spec is built, the app parts light up, the tests pass,
// and a change goes back through the spec.
function SpecDiagram() {
  return (
    <svg viewBox="0 0 400 160" className={`${styles.svg} ${styles.tk}`} preserveAspectRatio="xMidYMid meet">
      {/* links */}
      <path d="M112 76 H142" className={styles.a2aLink} />
      <path d="M266 76 H296" className={styles.a2aLink} />
      <path d="M342 128 V146 H262 M144 146 H64 V130" className={styles.a2aDiscover} />

      {/* specs */}
      <rect x="14" y="24" width="98" height="104" rx="10" className={`${styles.a2aBox} ${styles.tkSpec}`} style={delay(0)} />
      <text x="63" y="48" textAnchor="middle" className={styles.a2aTitle}>Specs</text>
      <text x="63" y="70" textAnchor="middle" className={styles.a2aSub}>user stories</text>
      <text x="63" y="86" textAnchor="middle" className={styles.a2aSub}>requirements</text>
      <text x="63" y="102" textAnchor="middle" className={styles.a2aSub}>AC-1–16</text>

      {/* app */}
      <rect x="142" y="24" width="124" height="104" rx="10" className={`${styles.a2aBox} ${styles.tkApp}`} />
      <text x="204" y="44" textAnchor="middle" className={styles.a2aTitle}>React app</text>
      <rect x="154" y="54" width="100" height="20" rx="6" className={`${styles.tkRow} ${styles.tkPurple}`} style={delay(0.9)} />
      <text x="204" y="68" textAnchor="middle" className={styles.a2aSub}>Dashboard</text>
      <rect x="154" y="79" width="100" height="20" rx="6" className={`${styles.tkRow} ${styles.tkCyan}`} style={delay(1.5)} />
      <text x="204" y="93" textAnchor="middle" className={styles.a2aSub}>useTasks</text>
      <rect x="154" y="104" width="100" height="18" rx="6" className={`${styles.tkRow} ${styles.tkCyan}`} style={delay(2.1)} />
      <text x="204" y="117" textAnchor="middle" className={styles.a2aSub}>storage</text>

      {/* tests */}
      <rect x="296" y="24" width="92" height="104" rx="10" className={`${styles.a2aBox} ${styles.tkTests}`} style={delay(3.2)} />
      <text x="342" y="48" textAnchor="middle" className={styles.a2aTitle}>Tests</text>
      {[0, 1, 2].map((i) => (
        <g key={i} className={styles.tkTick} style={delay(3.5 + i * 0.35)}>
          <circle cx={318 + i * 24} cy="74" r="8.5" className={styles.tkTickDot} />
          <path d={`M${314 + i * 24} 74 l3 3 l5 -6`} className={styles.tkTickMark} />
        </g>
      ))}
      <text x="342" y="108" textAnchor="middle" className={`${styles.a2aTitle} ${styles.tkPass}`}>43 pass</text>
      <text x="203" y="150" textAnchor="middle" className={styles.a2aSub}>change → spec first</text>

      {/* packets (hover only) */}
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.tkHop}`} style={{ offsetPath: "path('M112 76 H142')", ...delay(0.3) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.tkHop}`} style={{ offsetPath: "path('M266 76 H296')", ...delay(2.7) }} />
      <circle r="4.5" className={`${styles.a2aPacket} ${styles.tkBack}`} style={{ offsetPath: "path('M342 128 V146 H64 V130')", ...delay(4.5) }} />
    </svg>
  );
}

export type Diagram = 'a2a' | 'guardrails' | 'memory' | 'spec';

export function ProjectCover({
  category,
  variant,
  diagram,
}: {
  category: Category;
  variant: number;
  diagram?: Diagram;
}) {
  if (diagram) {
    return (
      <div className={`${styles.cover} ${styles.genai}`} aria-hidden="true">
        {diagram === 'a2a' ? (
          <A2ADiagram />
        ) : diagram === 'guardrails' ? (
          <GuardrailsDiagram />
        ) : diagram === 'memory' ? (
          <MemoryDiagram />
        ) : (
          <SpecDiagram />
        )}
      </div>
    );
  }
  return (
    <div className={`${styles.cover} ${category === 'genai' ? styles.genai : styles.web}`} aria-hidden="true">
      {category === 'genai' ? (
        <AgentGraph variant={variant} />
      ) : category === 'software' ? (
        <TaskMock />
      ) : (
        <BrowserMock variant={variant} />
      )}
    </div>
  );
}
