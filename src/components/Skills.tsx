import type { CSSProperties } from 'react';
import { sections, skills } from '../data/content';
import { Section } from './Section';
import styles from './Skills.module.css';

// Each group sits in its own panel: Gen AI and Web side by side on top,
// the four smaller groups in equal panels below. Tools wave in as pills.
export function Skills() {
  let n = 0;
  return (
    <Section id="skills" title={sections.skills.title} ground="surface">
      <div className={`${styles.grid} stagger`}>
        {skills.map((group, g) => (
          <div
            key={group.group}
            className={`${styles.panel} ${g < 2 ? styles.primary : ''}`}
            style={{ '--i': g } as CSSProperties}
          >
            <div className={styles.head}>
              <h3>{group.group}</h3>
              <span className={styles.count}>
                {group.items.length} {group.items.length === 1 ? 'tool' : 'tools'}
              </span>
            </div>
            <ul className={`${styles.list} stagger`}>
              {group.items.map((s) => (
                <li key={s} className={styles.skill} style={{ '--i': n++ * 0.4 + 2 } as CSSProperties}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
