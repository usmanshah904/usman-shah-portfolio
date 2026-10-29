import type { CSSProperties } from 'react';
import { contact, profile } from '../data/content';
import { ContactForm } from './ContactForm';
import { Icon, type IconName } from './Icon';
import { useReveal } from './Section';
import styles from './Contact.module.css';

const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'whatsapp', label: 'WhatsApp', value: profile.phoneDisplay, href: profile.whatsapp, external: true },
  { icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinDisplay, href: profile.linkedin, external: true },
];

export function Contact() {
  const [ref, revealClass] = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className={`section ground-sage${revealClass}`} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="contact-title" className="section-title reveal">
            {contact.heading}
          </h2>
          <p className="section-intro reveal" style={{ '--d': 1 } as CSSProperties}>
            {contact.text}
          </p>

          <ul className={`${styles.channels} stagger`}>
            {channels.map((c, i) => (
              <li key={c.label} style={{ '--i': i + 2 } as CSSProperties}>
                <a
                  href={c.href}
                  className={styles.channel}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.channelIcon}>
                    <Icon name={c.icon} size={19} />
                  </span>
                  <span className={styles.channelBody}>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelValue}>{c.value}</span>
                  </span>
                  <span className={styles.channelArrow}>
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.formCard} reveal`} style={{ '--d': 2 } as CSSProperties}>
          <h3 className={styles.formTitle}>Send a message</h3>
          <p className={styles.formIntro}>Tell me a little about your project or role.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
