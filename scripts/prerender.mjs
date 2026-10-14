// Build step: put the rendered page HTML into dist/index.html, then remove the
// temporary server bundle. Runs after `vite build` and `vite build --ssr`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const htmlPath = resolve(root, 'dist/index.html');
const ssrDir = resolve(root, 'dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const html = readFileSync(htmlPath, 'utf-8');
if (!html.includes('<!--app-->')) throw new Error('dist/index.html has no <!--app--> placeholder');

writeFileSync(htmlPath, html.replace('<!--app-->', render()));
rmSync(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
