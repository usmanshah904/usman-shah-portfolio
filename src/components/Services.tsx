import type { CSSProperties } from 'react';
import { sections, services } from '../data/content';
import { Icon } from './Icon';
import { Section } from './Section';
import styles from './Services.module.css';

// Bento layout: each group fills a full row, whatever its card count.
export function Services() {
  let n = 0;

  return (
    <Section
      id="services"
      num="02"
      label={sections.services.label}
      title={sections.services.title}
      intro={sections.services.intro}
      tint="blue"
    >
      <div className={styles.groups}>
        {services.map((group, g) => (
          <div key={group.group}>
            <div className={`${styles.groupHead} reveal`}>
              <span className={styles.groupIcon}>
                <Icon name={g === 0 ? 'agent' : 'code'} size={15} />
              </span>
              <h3>{group.group}</h3>
              <span className={styles.groupCount}>{group.items.length} services</span>
            </div>
            <ul
              className={`${styles.grid} stagger`}
              style={{ '--cols': group.items.length } as CSSProperties}
            >
              {group.items.map((s, i) => {
                n += 1;
                return (
                  <li
                    key={s.title}
                    className={`card card-hover spot ${styles.card}`}
                    style={{ '--i': i } as CSSProperties}
                  >
                    <div className={styles.top}>
                      <span className={styles.icon}>
                        <Icon name={s.icon} size={18} />
                      </span>
                      <span className={styles.num} aria-hidden="true">
                        {String(n).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className={styles.title}>{s.title}</h4>
                    <p className={styles.text}>{s.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
