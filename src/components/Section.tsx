import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export type Ground = 'bg' | 'surface' | 'sage' | 'ink';

interface Props {
  id: string;
  title: string;
  intro?: ReactNode;
  /** Extra content on the right of the heading row (e.g. filter tabs). */
  aside?: ReactNode;
  ground?: Ground;
  children: ReactNode;
}

/**
 * Tracks when an element first scrolls into view. Returns a ref and the class
 * names to add: `is-visible` starts the entrance; `is-settled` follows once the
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
      timer = window.setTimeout(() => setStage(2), 1600);
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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
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

/** A page section on one of the site's grounds, with a large heading and an entrance. */
export function Section({ id, title, intro, aside, ground = 'bg', children }: Props) {
  const [ref, revealClass] = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section ground-${ground}${revealClass}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <h2 id={`${id}-title`} className="section-title reveal">
              {title}
            </h2>
            {intro && (
              <p className="section-intro reveal" style={{ '--d': 1 } as CSSProperties}>
                {intro}
              </p>
            )}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
