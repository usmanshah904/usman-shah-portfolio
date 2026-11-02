// Project screenshots 1280px wide also exist at 640px (name-640.webp), so phones
// download the small one. Other images are served as they are.
export function srcSetFor(src: string, width: number): string | undefined {
  if (width !== 1280 || !src.endsWith('.webp')) return undefined;
  return `${src.replace(/\.webp$/, '-640.webp')} 640w, ${src} 1280w`;
}
