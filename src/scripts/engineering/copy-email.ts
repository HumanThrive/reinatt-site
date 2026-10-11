import { all, one } from "./dom";

let toastTimer: number | undefined;

function toast(message: string): void {
  const el = one(".toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove("show"), 2200);
}

all<HTMLButtonElement>("[data-copy]").forEach((button) => {
  const email = button.dataset.copy ?? "";
  const label = button.textContent ?? "";
  button.addEventListener("click", () => {
    // Browsers expose the clipboard only on https and localhost, so the toast shows the address everywhere else.
    if (!navigator.clipboard) {
      toast(email);
      return;
    }
    navigator.clipboard.writeText(email).then(
      () => {
        toast("Copied " + email);
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = label;
        }, 1800);
      },
      // When the browser refuses clipboard access, the toast shows the address so it can be copied by hand.
      () => toast(email),
    );
  });
});
