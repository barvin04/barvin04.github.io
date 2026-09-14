// 1. Live Countdown
const TARGET_DATE = new Date("January 25, 2027 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    const countdownEl = document.querySelector(".section-countdown");
    if (countdownEl) countdownEl.style.display = "none";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(d).padStart(2, '0');
  document.getElementById("hours").innerText = String(h).padStart(2, '0');
  document.getElementById("minutes").innerText = String(m).padStart(2, '0');
  document.getElementById("seconds").innerText = String(s).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Audio Control
const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.textContent = "❙❙";
  } else {
    audio.pause();
    musicBtn.textContent = "♫";
  }
});

// 3. Ribbon & Bow Scrub Animation (Scrolls Open & Closes in Reverse)
const bandLeft = document.querySelector(".band-left");
const bandRight = document.querySelector(".band-right");
const centerpiece = document.querySelector(".ribbon-centerpiece");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // Completes the untying effect over 220px of scrolling
  const progress = Math.min(scrollY / 220, 1);

  if (bandLeft && bandRight && centerpiece) {
    bandLeft.style.transform = `translateX(-${progress * 110}%)`;
    bandRight.style.transform = `translateX(${progress * 110}%)`;
    centerpiece.style.transform = `scale(${1 + progress * 0.15})`;
    centerpiece.style.opacity = `${1 - progress * 1.3}`;
  }
});