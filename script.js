/* ====================================================
   1. Real-Time Wedding Countdown Timer
   Target: January 25, 2027 at 10:00 AM IST
   ==================================================== */
const TARGET_DATE = new Date("January 25, 2027 10:00:00").getTime();

function refreshCountdown() {
  const now = new Date().getTime();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    const timerSection = document.querySelector(".section-timer");
    if (timerSection) timerSection.style.display = "none";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secsEl = document.getElementById("seconds");

  if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
  if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
  if (minsEl) minsEl.innerText = String(m).padStart(2, '0');
  if (secsEl) secsEl.innerText = String(s).padStart(2, '0');
}

setInterval(refreshCountdown, 1000);
refreshCountdown();

/* ====================================================
   2. Interactive Silk Curtain Parting on Scroll
   Gracefully opens on scroll down, closes in reverse
   ==================================================== */
const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");
const scrollPrompt = document.getElementById("scrollPrompt");

function scrubCurtains() {
  const scrollY = window.scrollY;
  // Curtains complete full open over 280px of scroll
  const progress = Math.min(scrollY / 280, 1);

  if (curtainLeft && curtainRight) {
    curtainLeft.style.transform = `translateX(-${progress * 105}%)`;
    curtainRight.style.transform = `translateX(${progress * 105}%)`;
  }

  if (scrollPrompt) {
    scrollPrompt.style.opacity = `${Math.max(1 - progress * 2.5, 0)}`;
    scrollPrompt.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.2})`;
  }
}

window.addEventListener("scroll", scrubCurtains, { passive: true });
scrubCurtains();