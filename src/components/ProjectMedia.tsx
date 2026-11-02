import { useState } from 'react';
import type { ProjectMedia as Media } from '../data/content';
import { srcSetFor } from './imageSet';
import styles from './ProjectMedia.module.css';

interface Props {
  title: string;
  media: Media[];
  /** Live website: shows its address in a browser bar above the screenshot. */
  url?: string;
}

// The real outputs of a project (dashboard, report, traces, live site) and its
// architecture diagram. With more than one, tabs switch between them.
export function ProjectMedia({ title, media, url }: Props) {
  const [active, setActive] = useState(0);
  const domain = url ? new URL(url).hostname.replace(/^www\./, '') : '';

  return (
    <div className={styles.media}>
      <div className={styles.frame}>
        {domain && (
          <div className={styles.chrome} aria-hidden="true">
            <span />
            <span />
            <span />
            <p>{domain}</p>
          </div>
        )}
        <div className={styles.view}>
          {media.map((m, i) => (
            <img
              key={m.src}
              src={m.src}
              srcSet={srcSetFor(m.src, m.width)}
              sizes="(max-width: 900px) 100vw, 640px"
              width={m.width}
              height={m.height}
              alt={i === active ? m.alt : ''}
              aria-hidden={i === active ? undefined : true}
              loading="lazy"
              decoding="async"
              className={`${styles.img} ${styles[m.kind ?? 'shot']} ${i === active ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>

      {media.length > 1 && (
        <div className={styles.tabs} role="group" aria-label={`${title}: views`}>
          {media.map((m, i) => (
            <button
              key={m.label}
              type="button"
              className={styles.tab}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
      {media.length === 1 && <p className={styles.single}>{media[0].label}</p>}
    </div>
  );
}
