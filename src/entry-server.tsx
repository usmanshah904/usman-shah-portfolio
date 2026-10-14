import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Used only at build time (scripts/prerender.mjs): renders the page to HTML so
// visitors see the content before any JavaScript runs.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
