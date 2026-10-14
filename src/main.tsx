import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Global styles first, so component styles can override them.
import './styles/global.css';
import App from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships the page already rendered (scripts/prerender.mjs),
// so React attaches to that HTML; in development the root starts empty.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
