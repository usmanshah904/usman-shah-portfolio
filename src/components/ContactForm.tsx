import { useId, useRef, useState, type FormEvent } from 'react';
import { contactForm, profile } from '../data/content';
import { Icon } from './Icon';
import styles from './ContactForm.module.css';

// Adapted from the 21st.dev "Contact Form" block: visible labels, native
// autocomplete, a pending state, and status/alert regions that screen readers
// announce. Added: on-blur validation with inline errors, focus on the first
// invalid field after a failed submit, and a mailto fallback when no form
// service key is configured.

type Field = 'name' | 'email' | 'message';
type Values = Record<Field | 'topic', string>;
type Status = 'idle' | 'pending' | 'success' | 'mailto' | 'error';

const empty: Values = { name: '', email: '', topic: '', message: '' };

function validate(v: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10) errors.message = 'Please write a short message (at least 10 characters).';
  return errors;
}

export function ContactForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(empty);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const errors = validate(values);
  const showError = (f: Field) => (touched[f] ? errors[f] : undefined);
  const pending = status === 'pending';

  const update = (field: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (status !== 'idle' && status !== 'pending') setStatus('idle');
  };
  const blur = (field: Field) => () => setTouched((t) => ({ ...t, [field]: true }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;

    const form = e.currentTarget;
    const firstInvalid = (['name', 'email', 'message'] as Field[]).find((f) => errors[f]);
    if (firstInvalid) {
      setStatus('idle');
      setTouched({ name: true, email: true, message: true });
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Spam trap: real people never fill the hidden field.
    const botcheck = (form.elements.namedItem('botcheck') as HTMLInputElement | null)?.checked;
    if (botcheck) return;

    const subject = `Portfolio inquiry${values.topic ? `: ${values.topic}` : ''} from ${values.name.trim()}`;

    // No form service configured yet: open the visitor's email app instead.
    if (!contactForm.web3formsAccessKey) {
      const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('pending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactForm.web3formsAccessKey,
          subject,
          from_name: 'Portfolio website',
          name: values.name.trim(),
          email: values.email.trim(),
          topic: values.topic || 'Not specified',
          message: values.message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error('Send failed');
      setValues(empty);
      setTouched({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const fieldProps = (f: Field) => ({
    id: `${id}-${f}`,
    name: f,
    value: values[f],
    onChange: update(f),
    onBlur: blur(f),
    'aria-invalid': showError(f) ? true : undefined,
    'aria-describedby': showError(f) ? `${id}-${f}-error` : undefined,
  });

  const errorText = (f: Field) =>
    showError(f) ? (
      <p id={`${id}-${f}-error`} className={styles.error}>
        <Icon name="alert" size={14} />
        {showError(f)}
      </p>
    ) : null;

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate data-status={status}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-name`}>Name</label>
          <input {...fieldProps('name')} type="text" autoComplete="name" required />
          {errorText('name')}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-email`}>Email</label>
          <input {...fieldProps('email')} type="email" autoComplete="email" inputMode="email" required />
          {errorText('email')}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-topic`}>
          What is this about? <span className={styles.optional}>(optional)</span>
        </label>
        <select id={`${id}-topic`} name="topic" value={values.topic} onChange={update('topic')}>
          <option value="">Choose a topic</option>
          {contactForm.topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea {...fieldProps('message')} rows={4} required />
        {errorText('message')}
      </div>

      {/* Honeypot field, hidden from people and screen readers */}
      <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} aria-hidden="true" />

      <div className={styles.footer}>
        <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={pending} aria-busy={pending}>
          {pending ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Icon name="send" size={17} />
            </>
          )}
        </button>

        <p role="status" className={`${styles.status} ${styles.ok}`}>
          {status === 'success' && (
            <>
              <Icon name="check" size={16} />
              {contactForm.success}
            </>
          )}
          {status === 'mailto' && (
            <>
              <Icon name="mail" size={16} />
              {contactForm.mailtoNotice}
            </>
          )}
        </p>
        <p role="alert" className={`${styles.status} ${styles.bad}`}>
          {status === 'error' && (
            <>
              <Icon name="alert" size={16} />
              <span>
                {contactForm.error} <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
}
