import { all } from "./dom";

all("[data-print]").forEach((button) => button.addEventListener("click", () => window.print()));

// A link to /cv/?print=1 opens the print dialog straight away, so a "Download as PDF" link can live on another page.
if (/[?&]print=1/.test(window.location.search)) {
  window.setTimeout(() => window.print(), 600);
}

// The printed header's date, in the form "24th Oct, 2026". The stylesheet's @page rule draws the rest of the running header and footer.
const stamp = document.createElement("style");
document.head.appendChild(stamp);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function ordinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

function writeDate(): void {
  const d = new Date();
  stamp.textContent =
    `@page { @top-right { content: "${ordinal(d.getDate())} ${months[d.getMonth()]}, ${d.getFullYear()}"; ` +
    `font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 8pt; color: #555; } }`;
}

writeDate();
window.addEventListener("beforeprint", writeDate);
