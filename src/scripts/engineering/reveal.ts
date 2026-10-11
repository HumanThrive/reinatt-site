import { all, reducedMotion } from "./dom";

declare global {
  interface Window {
    RN_READY?: boolean;
  }
}

// The inline script in the layout's <head> hides every .fade element until this flag is set.
// If this script never loads, that inline script shows them again after two seconds.
window.RN_READY = true;

const items = all(".fade");

if (reducedMotion || !("IntersectionObserver" in window)) {
  items.forEach((item) => item.classList.add("is-in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );
  items.forEach((item) => observer.observe(item));
}
