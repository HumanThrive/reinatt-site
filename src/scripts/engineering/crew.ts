import { all, escapeHtml, one } from "./dom";

// Each node of the crew figure carries its caption in data-role, written "Name: what it does".
// Hovering, focusing or tapping a node shows that caption, with the name in bold.
function roleHtml(role: string): string {
  const colon = role.indexOf(":");
  return colon > 0 ? `<b>${escapeHtml(role.slice(0, colon))}</b>${escapeHtml(role.slice(colon))}` : escapeHtml(role);
}

all(".crew-fig").forEach((figure) => {
  const caption = one("[data-crew-cap]", figure);
  const fallback = caption?.dataset.default ?? "";
  const nodes = all<SVGGElement>(".node", figure);

  nodes.forEach((node) => {
    const show = (): void => {
      nodes.forEach((other) => other.classList.remove("on"));
      node.classList.add("on");
      if (caption) caption.innerHTML = roleHtml(node.dataset.role ?? "");
    };
    const hide = (): void => {
      node.classList.remove("on");
      if (caption) caption.innerHTML = escapeHtml(fallback);
    };
    node.addEventListener("mouseenter", show);
    node.addEventListener("focus", show);
    node.addEventListener("click", show);
    node.addEventListener("mouseleave", hide);
    node.addEventListener("blur", hide);
  });
});
