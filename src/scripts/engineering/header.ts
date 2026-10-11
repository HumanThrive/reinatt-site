import { all, one } from "./dom";

// The fixed header takes the tone (ink or paper) of the section underneath it.
const bar = one("[data-bar]");
if (bar) {
  const scenes = all("section[data-tone]");
  const probeY = 36;
  let ticking = false;

  const update = (): void => {
    ticking = false;
    for (const scene of scenes) {
      const rect = scene.getBoundingClientRect();
      if (rect.top <= probeY && rect.bottom > probeY) {
        const tone = scene.dataset.tone;
        if (tone) bar.dataset.tone = tone;
        return;
      }
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  window.addEventListener("resize", update);
  update();
}

// The menu sheet for small screens.
const sheet = one<HTMLDialogElement>("dialog.sheet-nav");
const openButton = one("[data-menu]");
if (sheet && openButton) {
  openButton.addEventListener("click", () => sheet.showModal());
  all("[data-menu-close], [data-menu-link]", sheet).forEach((el) => el.addEventListener("click", () => sheet.close()));
}
