import type { CSSProperties } from 'react';
import { categoryLabels, projects, sections, type Category } from '../data/content';
import { Icon, type IconName } from './Icon';
import { ProjectCover } from './ProjectCover';
import { Section } from './Section';
import styles from './Projects.module.css';

export type ProjectFilter = 'all' | Category;

const filters: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'genai', label: categoryLabels.genai },
  { value: 'software', label: categoryLabels.software },
  { value: 'web', label: categoryLabels.web },
];

const categoryIcons: Record<Category, IconName> = {
  genai: 'agent',
  software: 'layout',
  web: 'code',
};

interface Props {
  filter: ProjectFilter;
  onFilterChange: (f: ProjectFilter) => void;
}

export function Projects({ filter, onFilterChange }: Props) {
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const count = (f: ProjectFilter) =>
    f === 'all' ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <Section
      id="projects"
      num="03"
      label={sections.projects.label}
      title={sections.projects.title}
      intro={sections.projects.intro}
      tint="white"
      aside={
        <div className={styles.filters} role="group" aria-label="Filter projects">
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
      {/* key re-runs the entrance animation when the filter changes */}
      <ul key={filter} className={styles.grid} aria-live="polite">
        {visible.map((p, i) => (
          <li
            key={p.title}
            className={`card card-hover spot ${styles.card}`}
            style={{ '--i': i } as CSSProperties}
          >
            <ProjectCover category={p.category} variant={projects.indexOf(p)} diagram={p.diagram} />
            <div className={styles.body}>
              <span className={styles.category}>
                <Icon name={categoryIcons[p.category]} size={12} />
                {categoryLabels[p.category]}
              </span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <ul className={`tag-list ${styles.tags}`} aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.url || p.github) && (
                <div className={styles.links}>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`Visit ${p.title} website (opens in a new tab)`}
                    >
                      Visit site
                      <Icon name="arrowUpRight" size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View ${p.title} source code on GitHub (opens in a new tab)`}
                    >
                      <Icon name="github" size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
