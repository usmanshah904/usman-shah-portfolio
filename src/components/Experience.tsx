import type { CSSProperties } from 'react';
import { experience, sections } from '../data/content';
import { Icon } from './Icon';
import { Section } from './Section';
import styles from './Experience.module.css';

// Timeline: dates on the left, the role on the right, joined by a rail that draws in.
export function Experience() {
  return (
    <Section id="experience" title={sections.experience.title} ground="bg">
      <ol className={`${styles.timeline} stagger`}>
        {experience.map((item, i) => (
          <li key={item.role} className={styles.item} style={{ '--i': i * 2 + 1 } as CSSProperties}>
            <div className={styles.when}>
              <p className={styles.period}>{item.period}</p>
              <p className={styles.location}>
                <Icon name="mapPin" size={14} />
                {item.location}
              </p>
            </div>

            <span className={`${styles.marker} ${item.current ? styles.markerCurrent : ''}`} aria-hidden="true" />

            <div className={styles.card}>
              <h3 className={styles.role}>{item.role}</h3>
              {item.org && <p className={styles.org}>{item.org}</p>}
              <p className={styles.text}>{item.text}</p>
              <ul className="tag-list" aria-label="Focus areas">
                {item.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
