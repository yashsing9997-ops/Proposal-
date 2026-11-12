
const pages = [
  "home",
  "story",
  "confession",
  "proposal",
  "finalScreen",
  "talkScreen"
];

const startBtn = document.getElementById("startBtn");
const confessBtn = document.getElementById("confessBtn");
const proposalBtn = document.getElementById("proposalBtn");
const yesBtn = document.getElementById("yesBtn");
const talkBtn = document.getElementById("talkBtn");

const heartsContainer = document.getElementById("hearts-container");
const confettiContainer = document.getElementById("confetti-container");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// PAGE NAVIGATION
function showPage(pageId) {
  pages.forEach(id => {
    document.getElementById(id).classList.remove("active");
  });

  const nextPage = document.getElementById(pageId);

  if (!nextPage) return;

  nextPage.classList.remove("active");

  // Restart the entrance animation
  void nextPage.offsetWidth;

  nextPage.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? "auto" : "smooth"
  });
}

// HOME → STORY
startBtn.addEventListener("click", () => {
  showPage("story");
});

// STORY → CONFESSION
confessBtn.addEventListener("click", () => {
  showPage("confession");
});

// CONFESSION → PROPOSAL
proposalBtn.addEventListener("click", () => {
  showPage("proposal");
});

// PROPOSAL → YES
yesBtn.addEventListener("click", () => {
  showPage("finalScreen");
  createCelebration();
});

// PROPOSAL → TAKE YOUR TIME
talkBtn.addEventListener("click", () => {
  showPage("talkScreen");
});

// BACK BUTTONS
document.querySelectorAll("[data-back]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.back);
  });
});


// FLOATING HEARTS
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    (12 + Math.random() * 22) + "px";

  heart.style.animationDuration =
    (7 + Math.random() * 7) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

// Gentle background hearts
if (!reducedMotion) {
  setInterval(createHeart, 1000);
}


// FINAL CELEBRATION
function createCelebration() {
  if (reducedMotion) return;

  const colors = [
    "#c52e49",
    "#e36b7c",
    "#f5eeee",
    "#8d1e35",
    "#d9a0aa"
  ];

  // Confetti rain
  for (let i = 0; i < 110; i++) {
    setTimeout(() => {
      const piece = document.createElement("div");

      piece.className = "confetti";

      piece.style.left = Math.random() * 100 + "vw";

      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.animationDuration =
        (2.5 + Math.random() * 3) + "s";

      piece.style.width =
        (5 + Math.random() * 7) + "px";

      piece.style.height =
        (8 + Math.random() * 12) + "px";

      confettiContainer.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 6000);

    }, i * 25);
  }

  // Celebration hearts
  for (let i = 0; i < 35; i++) {
    setTimeout(createHeart, i * 100);
  }
}
