import type { CSSProperties } from 'react';
import { experience, sections } from '../data/content';
import { Icon } from './Icon';
import { Section } from './Section';
import styles from './Experience.module.css';

// Vertical timeline, adapted from the 21st.dev "Experience Timeline" block
// (icon on the rail, organisation row, role, dates, description, badges).
export function Experience() {
  return (
    <Section id="experience" num="05" label={sections.experience.label} title={sections.experience.title} tint="white">
      <ol className={`${styles.timeline} stagger`}>
        {experience.map((item, i) => (
          <li key={item.role} className={styles.item} style={{ '--i': i } as CSSProperties}>
            <span className={`${styles.marker} ${item.current ? styles.markerCurrent : ''}`} aria-hidden="true">
              <Icon name={item.icon} size={16} />
            </span>

            <div className={`card card-hover spot ${styles.card}`}>
              <div className={styles.head}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  {item.org && (
                    <p className={styles.org}>
                      <Icon name="building" size={13} />
                      {item.org}
                    </p>
                  )}
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaRow}>
                    {item.current && <span className={styles.current}>Current</span>}
                    <span className={styles.period}>
                      <Icon name="calendar" size={13} />
                      {item.period}
                    </span>
                  </div>
                  <span className={styles.location}>
                    <Icon name="mapPin" size={13} />
                    {item.location}
                  </span>
                </div>
              </div>

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
