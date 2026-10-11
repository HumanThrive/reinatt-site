import { all } from "./dom";

all("[data-print]").forEach((button) => button.addEventListener("click", () => window.print()));

// A link to /cv/?print=1 opens the print dialog straight away, so a "Download as PDF" link can live on another page.
if (/[?&]print=1/.test(window.location.search)) {
  window.setTimeout(() => window.print(), 600);
}
