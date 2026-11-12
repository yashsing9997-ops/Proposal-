// PAGE NAVIGATION

const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const nextPage = document.getElementById(pageId);

  if (nextPage) {
    nextPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Start celebration when the YES screen opens
  if (pageId === "finalScreen") {
    celebrate();
  }
}


// FLOATING HEARTS

const heartsContainer = document.getElementById("hearts-container");

function createFloatingHeart() {
  const heart = document.createElement("div");

  heart.classList.add("floating-heart");

  heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";

  const duration = 6 + Math.random() * 6;

  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create hearts continuously
setInterval(createFloatingHeart, 850);


// CELEBRATION ANIMATION

const confettiContainer = document.getElementById("confetti-container");

let celebrationRunning = false;

function celebrate() {
  if (celebrationRunning) return;

  celebrationRunning = true;

  // Create colourful confetti
  const colors = [
    "#d94b6b",
    "#f2b8c7",
    "#ffffff",
    "#a52a4e",
    "#ff8fa9",
    "#f5c6d6"
  ];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti-piece");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    confettiContainer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 7500);
  }

  // Add a burst of floating hearts
  for (let i = 0; i < 18; i++) {
    setTimeout(createFloatingHeart, i * 120);
  }

  // Allow the celebration to run again if the page is revisited
  setTimeout(() => {
    celebrationRunning = false;
  }, 8000);
}
