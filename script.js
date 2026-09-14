/* script.js */
const TARGET_DATE = new Date("January 25, 2027 10:00:00").getTime();

function refreshCountdown() {
  const now = new Date().getTime();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    const timerSection = document.querySelector(".timer-section");
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
   Background Audio Controller
   ==================================================== */
const bgAudio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

if (musicBtn && bgAudio) {
  musicBtn.addEventListener("click", () => {
    if (bgAudio.paused) {
      bgAudio.play().then(() => {
        musicIcon.textContent = "❙❙";
        musicBtn.classList.add("playing");
      }).catch(err => {
        console.log("Playback interaction required:", err);
      });
    } else {
      bgAudio.pause();
      musicIcon.textContent = "♫";
      musicBtn.classList.remove("playing");
    }
  });

  const autoPlayOnce = () => {
    if (bgAudio.paused) {
      bgAudio.play().then(() => {
        musicIcon.textContent = "❙❙";
        musicBtn.classList.add("playing");
      }).catch(() => {});
    }
    window.removeEventListener("pointerdown", autoPlayOnce);
  };
  window.addEventListener("pointerdown", autoPlayOnce, { once: true });
}