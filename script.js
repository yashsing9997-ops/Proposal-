
const startBtn = document.getElementById("startBtn");
const confessBtn = document.getElementById("confessBtn");
const yesBtn = document.getElementById("yesBtn");
const talkBtn = document.getElementById("talkBtn");

const story = document.getElementById("story");
const confession = document.getElementById("confession");
const finalScreen = document.getElementById("finalScreen");
const talkScreen = document.getElementById("talkScreen");

// Smooth section navigation
function showSection(section) {
  [story, confession, finalScreen, talkScreen].forEach(item => {
    item.classList.add("hidden");
  });

  section.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Opening
startBtn.addEventListener("click", () => {
  showSection(story);
});

// Confession
confessBtn.addEventListener("click", () => {
  showSection(confession);
});

// Yes response
yesBtn.addEventListener("click", () => {
  showSection(finalScreen);
  createCelebration();
});

// Take your time response
talkBtn.addEventListener("click", () => {
  showSection(talkScreen);
});

// Floating hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 22) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

// Keep the background animation gentle
setInterval(createHeart, 850);

// Celebration hearts
function createCelebration() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }
}

