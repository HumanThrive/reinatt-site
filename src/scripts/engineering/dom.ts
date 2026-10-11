export function one<T extends Element = HTMLElement>(selector: string, scope: ParentNode = document): T | null {
  return scope.querySelector<T>(selector);
}

export function all<T extends Element = HTMLElement>(selector: string, scope: ParentNode = document): T[] {
  return Array.from(scope.querySelectorAll<T>(selector));
}

const ENTITIES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (ch) => ENTITIES[ch] ?? ch);
}

export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
