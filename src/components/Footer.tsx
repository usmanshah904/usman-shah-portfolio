import { footer, navLinks, profile, services } from '../data/content';
import { Icon } from './Icon';
import { Logo } from './Logo';
import styles from './Footer.module.css';

const connect = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'WhatsApp', href: profile.whatsapp, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'View resume', href: profile.resume, external: true },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} aria-hidden="true" />

      <div className={`container ${styles.main}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <Logo size={32} />
            {profile.name}
          </a>
          <p className={styles.tagline}>{footer.tagline}</p>
          <ul className={styles.social} aria-label="Social links">
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Icon name="mail" size={16} />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={16} />
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" size={16} />
              </a>
            </li>
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size={16} />
              </a>
            </li>
          </ul>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <h2 className={styles.colTitle}>Navigate</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Services</h2>
          <ul>
            {services.flatMap((g) => g.items).map((s) => (
              <li key={s.title}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Connect</h2>
          <ul>
            {connect.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>{footer.copyright}</p>
          <a href="#top" className={styles.toTop}>
            Back to top
            <span className={styles.toTopIcon}>
              <Icon name="arrowUpRight" size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
