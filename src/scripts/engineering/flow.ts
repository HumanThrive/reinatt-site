import { jobSteps } from "../../data/job-steps";
import { all, escapeHtml, one } from "./dom";

// Colours a step's illustration line by line: "#" lines as comments, "$" lines as commands,
// a leading "key:" as a key, and every arrow as an accent.
function highlight(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      const safe = escapeHtml(line);
      if (/^\s*#/.test(line)) return `<span class="d">${safe}</span>`;
      if (/^\s*\$/.test(line)) return `<span class="s">${safe}</span>`;
      return safe.replace(/^([A-Za-z][\w\- ]*?:)(\s)/, '<span class="k">$1</span>$2').replace(/→/g, '<span class="s">→</span>');
    })
    .join("\n");
}

const tabs = all<HTMLButtonElement>(".flow-word");
const counter = one("[data-step-n]");
const text = one("[data-step-text]");
const code = one("[data-step-code]");
const play = one<HTMLButtonElement>("[data-play]");

if (tabs.length && counter && text && code) {
  const playLabel = play?.textContent ?? "";
  let current = 0;
  let timer: number | undefined;

  const show = (index: number, focus = false): void => {
    current = (index + jobSteps.length) % jobSteps.length;
    const step = jobSteps[current];
    if (!step) return;
    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", i === current ? "true" : "false");
      tab.tabIndex = i === current ? 0 : -1;
    });
    counter.textContent = `Step ${current + 1} of ${jobSteps.length}`;
    text.textContent = step.text;
    code.innerHTML = highlight(step.code);
    if (focus) tabs[current]?.focus();
  };

  const stop = (): void => {
    window.clearInterval(timer);
    timer = undefined;
    if (play) play.textContent = playLabel;
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      stop();
      show(i);
    });
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        stop();
        show(current + 1, true);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stop();
        show(current - 1, true);
      }
    });
  });

  // "Play all six" steps through every step once, then stops on the last.
  play?.addEventListener("click", () => {
    if (timer !== undefined) {
      stop();
      return;
    }
    show(0);
    play.textContent = "Stop";
    timer = window.setInterval(() => {
      if (current === jobSteps.length - 1) {
        stop();
        return;
      }
      show(current + 1);
    }, 2600);
  });

  show(0);
}
