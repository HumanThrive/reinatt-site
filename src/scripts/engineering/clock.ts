import { all } from "./dom";

// Shows the current time in Bangkok in place of the static "UTC+7" fallback.
const clocks = all("[data-clock]");
if (clocks.length) {
  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Bangkok",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const tick = (): void => {
    const now = format.format(new Date());
    clocks.forEach((clock) => {
      clock.textContent = now;
    });
  };
  tick();
  window.setInterval(tick, 20000);
}
