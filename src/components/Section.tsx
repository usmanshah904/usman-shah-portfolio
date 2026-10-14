import { useEffect, useRef, useState, type ReactNode } from 'react';

export type Tint = 'white' | 'blue' | 'violet';

interface Props {
  id: string;
  /** Small index shown before the label, e.g. "02". */
  num?: string;
  label: string;
  title: string;
  intro?: ReactNode;
  /** Extra content on the right of the heading row (e.g. filter tabs). */
  aside?: ReactNode;
  tint?: Tint;
  children: ReactNode;
}

/**
 * Tracks when an element first scrolls into view. Returns a ref and the class
 * names to add: `is-visible` starts the fade-in; `is-settled` follows once the
 * staggered entrance is done, so hovers no longer wait on delays.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const show = () => {
      setStage(1);
      timer = window.setTimeout(() => setStage(2), 1200);
    };
    if (!('IntersectionObserver' in window)) {
      show();
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const revealClass = ['', ' is-visible', ' is-visible is-settled'][stage];
  return [ref, revealClass] as const;
}

/** Small numbered label above a section title. */
export function Eyebrow({ num, label }: { num?: string; label: string }) {
  return (
    <p className="eyebrow">
      {num && (
        <span className="eyebrow-num" aria-hidden="true">
          {num}
        </span>
      )}
      {label}
    </p>
  );
}

/** A page section with a tinted background, numbered label, heading, and fade-in. */
export function Section({ id, num, label, title, intro, aside, tint = 'white', children }: Props) {
  const [ref, revealClass] = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section tint-${tint}${revealClass}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="section-head reveal">
          <div>
            <Eyebrow num={num} label={label} />
            <h2 id={`${id}-title`} className="section-title">
              {title}
            </h2>
            {intro && <p className="section-intro">{intro}</p>}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
