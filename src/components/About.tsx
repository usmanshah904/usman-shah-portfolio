import type { CSSProperties } from 'react';
import { about, aboutFacts, sections } from '../data/content';
import { useReveal } from './Section';
import styles from './About.module.css';

export function About() {
  const [ref, revealClass] = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`section ground-surface${revealClass}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <h2 id="about-title" className={`section-title ${styles.title} reveal`}>
          {sections.about.title}
        </h2>

        <div className={styles.body}>
          <p className={`${styles.text} reveal`} style={{ '--d': 1 } as CSSProperties}>
            {about}
          </p>

          <dl className={`${styles.facts} stagger`}>
            {aboutFacts.map((f, i) => (
              <div key={f.label} className={styles.fact} style={{ '--i': i + 2 } as CSSProperties}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
