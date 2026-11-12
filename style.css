/* GENERAL RESET */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #10090d;
  --surface: #1d1017;
  --surface-light: #28131e;
  --burgundy: #701d38;
  --red: #d94b6b;
  --pink: #f2b8c7;
  --white: #fff5f7;
  --muted: #c5aeb8;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  font-family: "DM Sans", sans-serif;
  overflow-x: hidden;
}

/* BACKGROUND */

.background-glow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse at 15% 20%, rgba(112, 29, 56, 0.22), transparent 45%),
    radial-gradient(ellipse at 85% 80%, rgba(217, 75, 107, 0.12), transparent 45%);
}

#hearts-container,
#confetti-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.container {
  min-height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

/* PAGE NAVIGATION */

.page {
  display: none;
  width: 100%;
  min-height: 88vh;
  padding: 65px 20px;
  align-items: center;
  justify-content: center;
  animation: pageEnter 0.7s ease both;
}

.page.active {
  display: flex;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content {
  width: 100%;
  max-width: 680px;
  margin: auto;
  text-align: center;
}

/* TEXT */

.eyebrow {
  display: inline-block;
  color: var(--pink);
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 25px;
}

h1,
h2 {
  font-family: "Playfair Display", serif;
  font-weight: 600;
}

h1 {
  font-size: clamp(48px, 9vw, 76px);
  line-height: 1.15;
  margin-bottom: 20px;
}

h2 {
  font-size: clamp(34px, 7vw, 49px);
  line-height: 1.25;
  margin-bottom: 30px;
}

h2 em {
  color: var(--pink);
  font-weight: 500;
}

.accent {
  color: var(--red);
}

.subtitle {
  color: var(--muted);
  max-width: 490px;
  margin: 0 auto 35px;
  font-size: 15px;
  line-height: 1.9;
}

.small-note {
  color: #987c89;
  font-size: 11px;
  letter-spacing: 1px;
  margin-top: 28px;
}

/* HEARTS */

.heart-icon {
  font-size: 48px;
  color: var(--red);
  margin-bottom: 25px;
  animation: heartbeat 1.7s infinite;
}

.big-heart {
  font-size: 75px;
  color: var(--red);
  margin: 10px 0 25px;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.12);
  }

  60% {
    transform: scale(1);
  }
}

/* BUTTONS */

button {
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.3s ease;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 29px;
  border-radius: 40px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  background: linear-gradient(135deg, #8f2548, #c33e60);
  box-shadow: 0 8px 28px rgba(195, 62, 96, 0.22);
}

.primary-btn span {
  font-size: 18px;
}

.primary-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(195, 62, 96, 0.4);
}

.secondary-btn {
  padding: 14px 26px;
  border-radius: 40px;
  background: transparent;
  border: 1px solid rgba(242, 184, 199, 0.35);
  color: var(--pink);
  font-size: 13px;
}

.secondary-btn:hover {
  background: rgba(112, 29, 56, 0.25);
  transform: translateY(-3px);
}

.back-btn {
  display: block;
  margin: 25px auto 0;
  background: transparent;
  color: #a88b99;
  font-size: 12px;
}

.back-btn:hover {
  color: var(--pink);
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* TIMELINE */

.timeline {
  position: relative;
  max-width: 520px;
  margin: 35px auto;
  text-align: left;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 15px;
  bottom: 15px;
  width: 1px;
  background: linear-gradient(var(--red), rgba(217, 75, 107, 0.1));
}

.timeline-item {
  position: relative;
  padding-left: 38px;
  margin-bottom: 25px;
}

.timeline-dot {
  position: absolute;
  left: 3px;
  top: 8px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 15px rgba(217, 75, 107, 0.7);
}

.timeline-card {
  background: rgba(40, 19, 30, 0.8);
  border: 1px solid rgba(242, 184, 199, 0.1);
  border-radius: 15px;
  padding: 22px;
}

.date {
  color: var(--red);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.timeline-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 23px;
  margin: 9px 0;
}

.timeline-card p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.closing-line {
  color: var(--pink);
  font-family: "Playfair Display", serif;
  font-style: italic;
  margin: 30px auto;
  font-size: 18px;
}

/* LETTER */

.letter-card {
  background: linear-gradient(145deg, rgba(40, 19, 30, 0.95), rgba(29, 16, 23, 0.95));
  border: 1px solid rgba(242, 184, 199, 0.14);
  border-radius: 18px;
  padding: 30px;
  text-align: left;
  margin: 25px auto 30px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
}

.letter-card p {
  color: #ddcbd2;
  font-size: 14px;
  line-height: 2;
  margin-bottom: 17px;
}

.letter-card .signature {
  color: var(--pink);
  font-family: "Playfair Display", serif;
  font-size: 20px;
  text-align: right;
  margin-top: 25px;
  margin-bottom: 0;
}

/* PROPOSAL */

.question {
  font-size: clamp(40px, 8vw, 62px);
  margin-bottom: 22px;
}

.yes-btn {
  min-width: 220px;
}

/* CELEBRATION */

.celebration-heart {
  color: var(--red);
  font-size: 85px;
  animation: heartbeat 1.4s infinite;
  margin-bottom: 20px;
}

.celebration-title {
  font-size: clamp(26px, 6vw, 36px);
  color: var(--pink);
  margin: 10px 0 20px;
}

.final-note {
  color: var(--pink);
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.7;
  margin: 25px auto;
}

.signature {
  color: var(--pink);
  font-family: "Playfair Display", serif;
  font-size: 21px;
  line-height: 1.7;
  margin: 25px auto;
}

.replay-btn {
  margin-top: 15px;
}

/* FLOATING HEARTS */

.floating-heart {
  position: absolute;
  bottom: -40px;
  color: rgba(217, 75, 107, 0.55);
  animation: floatUp linear forwards;
  user-select: none;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  15% {
    opacity: 0.8;
  }

  85% {
    opacity: 0.5;
  }

  100% {
    transform: translateY(-110vh) rotate(35deg);
    opacity: 0;
  }
}

/* CONFETTI */

.confetti-piece {
  position: absolute;
  top: -15px;
  width: 9px;
  height: 14px;
  border-radius: 2px;
  animation: confettiFall linear forwards;
}

@keyframes confettiFall {
  to {
    transform: translateY(110vh) rotate(720deg);
    opacity: 0;
  }
}

/* FOOTER */

footer {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px 10px 25px;
  color: #927987;
  font-size: 11px;
  letter-spacing: 1px;
}

.footer-heart {
  color: var(--red);
  margin: 0 4px;
}

/* MOBILE */

@media (max-width: 600px) {
  .page {
    min-height: 85vh;
    padding: 55px 20px;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 3px;
  }

  .subtitle {
    font-size: 14px;
  }

  .letter-card {
    padding: 22px;
  }

  .letter-card p {
    font-size: 13px;
  }

  .timeline-card {
    padding: 18px;
  }

  .timeline-card h3 {
    font-size: 21px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
