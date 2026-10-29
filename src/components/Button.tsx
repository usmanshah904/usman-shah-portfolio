import type { AnchorHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  icon?: IconName;
  external?: boolean;
}

// The site's one button: an outline pill with an arrow badge. On hover, sage
// sweeps across it and the arrow grows (styles in global.css, `.btn`).
export function ButtonLink({ href, label, icon = 'arrowRight', external, className = '', ...rest }: Props) {
  return (
    <a
      href={href}
      className={`btn ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {label}
      <span className="btn-badge" aria-hidden="true">
        <Icon name={icon} size={17} />
      </span>
    </a>
  );
}
