import type { CSSProperties } from 'react';
import { sections, skills } from '../data/content';
import { Icon, type IconName } from './Icon';
import { Section } from './Section';
import styles from './Skills.module.css';

// Icons by position; the first two groups (Gen AI, Web) are shown larger.
const groupIcons: IconName[] = ['agent', 'layout', 'code', 'search', 'workflow', 'gauge'];

export function Skills() {
  return (
    <Section id="skills" num="04" label={sections.skills.label} title={sections.skills.title} tint="violet">
      <div className={`${styles.grid} stagger`}>
        {skills.map((group, i) => (
          <div
            key={group.group}
            className={`card spot ${i < 2 ? styles.primary : styles.secondary}`}
            style={{ '--i': i } as CSSProperties}
          >
            <h3 className={styles.head}>
              <span className={styles.icon}>
                <Icon name={groupIcons[i % groupIcons.length]} size={i < 2 ? 17 : 15} />
              </span>
              {group.group}
              <span className={styles.count}>{group.items.length}</span>
            </h3>
            <ul className="tag-list">
              {group.items.map((s) => (
                <li key={s} className={`tag ${styles.tag}`}>
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
