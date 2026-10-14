import type { CSSProperties } from 'react';
import { about, aboutFacts, sections } from '../data/content';
import { Eyebrow, useReveal } from './Section';
import styles from './About.module.css';

export function About() {
  const [ref, revealClass] = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`section tint-white${revealClass}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className="reveal">
          <Eyebrow num="01" label={sections.about.label} />
          <h2 id="about-title" className="section-title">
            {sections.about.title}
          </h2>
        </div>

        <div>
          <p className={`${styles.text} reveal`}>{about}</p>

          <dl className={`${styles.facts} stagger`}>
            {aboutFacts.map((f, i) => (
              <div key={f.label} className={`card spot ${styles.fact}`} style={{ '--i': i + 1 } as CSSProperties}>
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
