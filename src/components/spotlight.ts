// Feeds the pointer position into any `.spot` element as --mx / --my,
// which the CSS uses to draw a soft glow under the cursor.
// One passive listener for the whole page; skipped on touch-only devices.
let started = false;

export function initSpotlight() {
  if (started || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  started = true;

  let frame = 0;
  let last: PointerEvent | null = null;

  const update = () => {
    frame = 0;
    if (!last) return;
    const target = (last.target as Element | null)?.closest<HTMLElement>('.spot');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${last.clientX - rect.left}px`);
    target.style.setProperty('--my', `${last.clientY - rect.top}px`);
  };

  window.addEventListener(
    'pointermove',
    (e) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
}
