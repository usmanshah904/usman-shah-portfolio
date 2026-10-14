import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import { Icon } from './Icon';
import { Logo } from './Logo';
import styles from './Nav.module.css';

// Top bar that sits over the hero and scrolls away with the page (not sticky).
export function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape, or if the window grows to desktop size.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 861px)');
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo />
          {profile.name}
        </a>

        <ul id="nav-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a href="#contact" className={`btn ${styles.cta}`} onClick={() => setOpen(false)}>
            Let&apos;s connect
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
