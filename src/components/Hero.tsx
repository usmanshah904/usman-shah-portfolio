import { useEffect, useState, type CSSProperties } from 'react';
import { hero, profile } from '../data/content';
import { ButtonLink } from './Button';
import { Icon } from './Icon';
import { srcSetFor } from './imageSet';
import styles from './Hero.module.css';

// Real outputs from the published projects, shown in turn beside the headline.
const showcase = [
  {
    label: 'Traces',
    project: 'Multi-Agent System with Google ADK and A2A',
    src: '/projects/a2a-traces.webp',
    width: 1280,
    height: 703,
    alt: 'ADK web interface showing the summary agent calling the research agent over A2A',
  },
  {
    label: 'Report',
    project: 'AI Agent with Reflection and Guardrails',
    src: '/projects/guardrails-blocked.webp',
    width: 1280,
    height: 1559,
    alt: 'HTML report of a blocked run, with the unsupported claim highlighted',
  },
  {
    label: 'Dashboard',
    project: 'Spec-Driven Smart Task Manager',
    src: '/projects/task-dashboard.webp',
    width: 1280,
    height: 1000,
    alt: 'Task manager dashboard with stat cards, progress ring and charts',
  },
];

const SLIDE_MS = 5000;
const d = (n: number) => ({ '--d': n }) as CSSProperties;

export function Hero() {
  const [lead, rest] = hero.headline.split(' & ');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Advance on a timer, except when paused or when the visitor prefers less motion.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setActive((a) => (a + 1) % showcase.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const current = showcase[active];

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <h1 id="hero-title" className={styles.title}>
            <span className={styles.line}>
              <span style={d(0)}>{rest ? lead : hero.headline}</span>
            </span>
            {rest && (
              <span className={styles.line}>
                <span style={d(1)}>&amp; {rest}</span>
              </span>
            )}
          </h1>

        <div className={styles.copy}>
          <p className={`${styles.subtext} ${styles.slide} justify`} style={d(2)}>
            {hero.subtext}
          </p>

          <div className={`${styles.actions} ${styles.enter}`} style={d(4)}>
            <ButtonLink
              href={profile.github}
              label="GitHub Profile"
              external
              aria-label="GitHub Profile (opens in a new tab)"
            />
            <ButtonLink
              href={profile.resume}
              label="View resume"
              icon="file"
              external
              aria-label="View resume (PDF, opens in a new tab)"
            />
          </div>

          <ul className={`${styles.social} ${styles.enter}`} style={d(5)} aria-label="Contact links">
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

        <figure
          className={`${styles.showcase} ${styles.enter}`}
          style={d(3)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={styles.screen}>
            {showcase.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                srcSet={srcSetFor(s.src, s.width)}
                sizes="(max-width: 960px) 100vw, 560px"
                width={s.width}
                height={s.height}
                alt={i === active ? s.alt : ''}
                aria-hidden={i === active ? undefined : true}
                className={`${styles.shot} ${i === active ? styles.shotActive : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            ))}
          </div>
          <figcaption className={styles.caption}>
            <a href="#projects" className={styles.project}>
              <span className="link-line">{current.project}</span>
              <Icon name="arrowRight" size={16} />
            </a>
            <div className={styles.tabs} role="group" aria-label="Project outputs">
              {showcase.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  className={styles.tab}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  {i === active && !paused && (
                    <span key={active} className={styles.progress} aria-hidden="true" />
                  )}
                  <span className={styles.tabLabel}>{s.label}</span>
                </button>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
