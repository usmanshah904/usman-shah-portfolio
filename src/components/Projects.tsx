import type { CSSProperties } from 'react';
import { categoryLabels, githubNote, projects, sections, type Category, type Project } from '../data/content';
import { ButtonLink } from './Button';
import { ProjectMedia } from './ProjectMedia';
import { Section, useReveal } from './Section';
import styles from './Projects.module.css';

export type ProjectFilter = 'all' | Category;

const filters: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'genai', label: categoryLabels.genai },
  { value: 'software', label: categoryLabels.software },
  { value: 'web', label: categoryLabels.web },
];

interface Props {
  filter: ProjectFilter;
  onFilterChange: (f: ProjectFilter) => void;
}

// Case-study rows: the project's real output on one side, the story on the other,
// alternating sides down the page.
export function Projects({ filter, onFilterChange }: Props) {
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const count = (f: ProjectFilter) =>
    f === 'all' ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <Section
      id="projects"
      title={sections.projects.title}
      intro={sections.projects.intro}
      ground="bg"
      aside={
        <div className={`${styles.filters} reveal`} role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={styles.filter}
              aria-pressed={filter === f.value}
              onClick={() => onFilterChange(f.value)}
            >
              {f.label}
              <span className={styles.count} aria-hidden="true">
                {count(f.value)}
              </span>
            </button>
          ))}
        </div>
      }
    >
      {/* key re-runs the entrances when the filter changes */}
      <ol key={filter} className={styles.list} aria-live="polite">
        {visible.map((p, i) => (
          <ProjectRow key={p.title} project={p} flip={i % 2 === 1} />
        ))}
      </ol>
    </Section>
  );
}

function ProjectRow({ project: p, flip }: { project: Project; flip: boolean }) {
  const [ref, revealClass] = useReveal<HTMLLIElement>();
  const d = (n: number) => ({ '--d': n }) as CSSProperties;

  return (
    <li ref={ref} className={`${styles.row} ${flip ? styles.flip : ''}${revealClass}`}>
      <div className={styles.mediaCol}>
        <ProjectMedia title={p.title} media={p.media} url={p.url} />
      </div>

      <article className={styles.body} aria-labelledby={slug(p.title)}>
        <h3 id={slug(p.title)} className={`${styles.title} reveal`}>
          {p.title}
        </h3>

        <dl className={styles.details}>
          <div className="reveal" style={d(2)}>
            <dt>Challenge</dt>
            <dd>{p.challenge}</dd>
          </div>
          <div className="reveal" style={d(3)}>
            <dt>What I built</dt>
            <dd>
              <ul className={styles.built}>
                {p.built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="reveal" style={d(4)}>
            <dt>Stack</dt>
            <dd>
              <ul className="tag-list">
                {p.stack.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="reveal" style={d(5)}>
            <dt>Output</dt>
            <dd>
              {p.output}
              {p.github && ` ${githubNote}`}
            </dd>
          </div>
        </dl>

        <div className={`${styles.actions} reveal`} style={d(6)}>
          {p.github && (
            <ButtonLink
              href={p.github}
              label="View on GitHub"
              external
              aria-label={`View ${p.title} on GitHub (opens in a new tab)`}
            />
          )}
          {p.url && (
            <ButtonLink
              href={p.url}
              label="Visit site"
              icon="arrowUpRight"
              external
              aria-label={`Visit the ${p.title} website (opens in a new tab)`}
            />
          )}
        </div>
      </article>
    </li>
  );
}

const slug = (s: string) => `project-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
