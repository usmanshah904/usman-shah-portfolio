import { techStrip } from '../data/content';
import styles from './TechStrip.module.css';

// An endlessly scrolling row of technologies between the hero and About.
// The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
export function TechStrip() {
  return (
    <div className={styles.strip}>
      <p className="visually-hidden">Technologies: {techStrip.join(', ')}</p>
      <div className={styles.track} aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className={styles.list}>
            {techStrip.map((t) => (
              <li key={t}>
                <span className={styles.spark}>✦</span>
                {t}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
