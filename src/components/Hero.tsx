import type { CSSProperties } from 'react';
import { hero, profile } from '../data/content';
import { Icon } from './Icon';
import styles from './Hero.module.css';

// Decorative console that mirrors the multi-agent project. Hidden from screen readers.
const logLines = [
  { kind: 'cmd', text: 'run summary_agent --task "latest RAG research"' },
  { kind: 'out', text: 'summary_agent → delegating research over A2A' },
  { kind: 'in', text: 'research_agent ← findings returned' },
  { kind: 'ok', text: 'guardrails: unsupported claims blocked' },
  { kind: 'ok', text: 'summary ready' },
];

const d = (n: number) => ({ '--d': n }) as CSSProperties;

export function Hero() {
  const [lead, rest] = hero.headline.split(' & ');

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
        <span className={`${styles.blob} ${styles.blobC}`} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${styles.label} ${styles.enter}`} style={d(1)}>
            {hero.label}
          </p>

          <h1 id="hero-title" className={`${styles.title} ${styles.enterSlide}`}>
            {rest ? (
              <>
                <span className="gradient-text">{lead}</span>{' '}
                <br />
                &amp; {rest}
              </>
            ) : (
              hero.headline
            )}
          </h1>

          <p className={`${styles.subtext} ${styles.enterSlide}`}>
            {hero.subtext}
          </p>

          <div className={`${styles.actions} ${styles.enter}`} style={d(4)}>
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <Icon name="arrowRight" size={16} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="View resume (PDF, opens in a new tab)"
            >
              <Icon name="file" size={16} />
              View resume
            </a>
            <ul className={styles.social} aria-label="Contact links">
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Icon name="mail" size={18} />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Icon name="linkedin" size={18} />
                </a>
              </li>
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <Icon name="whatsapp" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.visual} ${styles.enter}`} style={d(3)} aria-hidden="true">
          <div className={styles.frame}>
            <div className={styles.console}>
              <div className={styles.chrome}>
                <span />
                <span />
                <span />
                <p>a2a-session.log</p>
                <em className={styles.live}>live</em>
              </div>

              <div className={styles.diagram}>
                <div className={styles.node}>
                  <Icon name="sparkle" size={15} />
                  Summary Agent
                </div>
                <div className={styles.wire}>
                  <span className={styles.packet} />
                  <em>A2A</em>
                </div>
                <div className={styles.node}>
                  <Icon name="search" size={15} />
                  Research Agent
                </div>
              </div>

              <ol className={styles.log}>
                {logLines.map((line, i) => (
                  <li key={i} className={styles[line.kind]} style={{ '--l': i } as CSSProperties}>
                    {line.text}
                  </li>
                ))}
                <li className={styles.cursor} style={{ '--l': logLines.length } as CSSProperties} />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
