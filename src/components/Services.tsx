import type { CSSProperties } from 'react';
import { sections, services } from '../data/content';
import { Section } from './Section';
import styles from './Services.module.css';

// Two columns on the ink ground: Gen AI services, then web services.
export function Services() {
  return (
    <Section id="services" title={sections.services.title} intro={sections.services.intro} ground="ink">
      <div className={styles.groups}>
        {services.map((group, g) => (
          <div key={group.group}>
            <h3 className={`${styles.groupTitle} reveal`} style={{ '--d': g + 1 } as CSSProperties}>
              {group.group}
            </h3>
            <ul className={`${styles.list} stagger`}>
              {group.items.map((s, i) => (
                <li key={s.title} className={styles.item} style={{ '--i': i + g * 3 } as CSSProperties}>
                  <h4 className={styles.title}>{s.title}</h4>
                  <p className={`${styles.text} justify`}>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
