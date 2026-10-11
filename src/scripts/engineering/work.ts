import { all, escapeHtml, one } from "./dom";

const links = all<HTMLAnchorElement>(".track a[data-case]");
const keys = links.map((link) => link.dataset.case ?? "");

// On a pointer that can hover, the work's cover follows the cursor along the list.
const follow = one(".cover-follow");
const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (follow && fineHover && links.length) {
  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let frame: number | null = null;
  let hovering = false;

  const loop = (): void => {
    const previousX = x;
    x += (targetX - x) * 0.16;
    y += (targetY - y) * 0.16;
    const tilt = Math.max(-4, Math.min(4, (x - previousX) * 0.35));
    follow.style.transform = `translate3d(${x + 28}px,${y - 150}px,0) rotate(${tilt.toFixed(2)}deg)`;
    frame = hovering || Math.abs(targetX - x) > 0.5 ? requestAnimationFrame(loop) : null;
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", (event) => {
      const key = link.dataset.case ?? "";
      follow.innerHTML = `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice"><use href="#cv-${escapeHtml(key)}"/></svg>`;
      if (!hovering) {
        x = targetX = event.clientX;
        y = targetY = event.clientY;
      }
      hovering = true;
      follow.classList.add("on");
      if (frame === null) frame = requestAnimationFrame(loop);
    });
    link.addEventListener("mousemove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    });
    link.addEventListener("mouseleave", () => {
      hovering = false;
      follow.classList.remove("on");
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!hovering) return;
      hovering = false;
      follow.classList.remove("on");
    },
    { passive: true },
  );
}

// A click on a work opens its case sheet in a dialog, with previous and next buttons that wrap around.
const dialog = one<HTMLDialogElement>("dialog.case");
const inner = dialog ? one(".case-inner", dialog) : null;
if (dialog && inner && keys.length) {
  let current: string | null = null;
  let returnFocus: HTMLElement | null = null;

  const template = (key: string): HTMLTemplateElement | null => one<HTMLTemplateElement>(`#tpl-${key}`);
  const titleOf = (key: string): string => template(key)?.content.querySelector("h2")?.textContent ?? key;
  const neighbour = (key: string, step: number): string => {
    const index = keys.indexOf(key);
    return keys[(index + step + keys.length) % keys.length] ?? key;
  };

  const open = (key: string): void => {
    const tpl = template(key);
    if (!tpl) return;
    current = key;
    inner.replaceChildren(tpl.content.cloneNode(true));
    inner.scrollTop = 0;

    const previous = neighbour(key, -1);
    const next = neighbour(key, 1);
    const previousButton = one<HTMLButtonElement>("[data-prev]", inner);
    const nextButton = one<HTMLButtonElement>("[data-next]", inner);
    if (previousButton) {
      previousButton.innerHTML = `← Previous<b>${escapeHtml(titleOf(previous))}</b>`;
      previousButton.onclick = () => open(previous);
    }
    if (nextButton) {
      nextButton.innerHTML = `Next →<b>${escapeHtml(titleOf(next))}</b>`;
      nextButton.onclick = () => open(next);
    }
    const body = one(".case-body", inner);
    if (body) body.scrollTop = 0;

    if (!dialog.open) {
      returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
    }
    history.replaceState(null, "", `#case-${key}`);
    one("[data-close]", dialog)?.focus({ preventScroll: true });
  };

  all<HTMLAnchorElement>("a[data-case]").forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      open(link.dataset.case ?? "");
    }),
  );

  // A click on the backdrop lands on the dialog element itself, and closes the sheet like the Close button.
  dialog.addEventListener("click", (event) => {
    const target = event.target;
    if (target === dialog || (target instanceof Element && target.closest("[data-close]"))) dialog.close();
  });
  dialog.addEventListener("close", () => {
    current = null;
    history.replaceState(null, "", location.pathname + location.search);
    returnFocus?.focus({ preventScroll: true });
  });
  dialog.addEventListener("keydown", (event) => {
    if (current === null) return;
    if (event.key === "ArrowRight") open(neighbour(current, 1));
    if (event.key === "ArrowLeft") open(neighbour(current, -1));
  });

  // A link to /#case-<key> opens that case sheet on arrival.
  const deepLink = location.hash.match(/^#case-([\w-]+)/);
  if (deepLink?.[1]) open(deepLink[1]);
}
