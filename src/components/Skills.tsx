import type { CSSProperties } from 'react';
import { sections, skills } from '../data/content';
import { Section } from './Section';
import styles from './Skills.module.css';

// The first two groups (Gen AI, Web) span wider; every tool is a pill that waves in.
export function Skills() {
  let n = 0;
  return (
    <Section id="skills" title={sections.skills.title} ground="surface">
      <div className={styles.grid}>
        {skills.map((group, g) => (
          <div key={group.group} className={g < 2 ? styles.primary : styles.secondary}>
            <h3 className={`${styles.head} reveal`} style={{ '--d': g } as CSSProperties}>
              {group.group}
            </h3>
            <ul className={`${styles.list} stagger`}>
              {group.items.map((s) => (
                <li key={s} className={styles.skill} style={{ '--i': n++ * 0.45 } as CSSProperties}>
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
