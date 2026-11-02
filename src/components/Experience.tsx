import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { experience, sections } from '../data/content';
import { Icon } from './Icon';
import { Section } from './Section';
import styles from './Experience.module.css';

// Timeline: dates on the left, the role on the right. The rail fills as you
// scroll, and each role lights up when the rail reaches it.
export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      list.style.setProperty('--progress', '1');
      setReached(items.length);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      list.style.setProperty('--progress', progress.toFixed(3));
      // A role counts as reached once the fill passes its marker.
      const count = items.filter((li) => li.offsetTop + 40 <= progress * rect.height).length;
      setReached(count);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Measure after the first paint, so hydration is not held up by a layout read.
    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section id="experience" title={sections.experience.title} ground="bg">
      <ol ref={listRef} className={`${styles.timeline} stagger`}>
        {experience.map((item, i) => (
          <li
            key={item.role}
            className={`${styles.item} ${i < reached ? styles.reached : ''}`}
            style={{ '--i': i * 2 + 1 } as CSSProperties}
          >
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
              <p className={`${styles.text} justify`}>{item.text}</p>
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
