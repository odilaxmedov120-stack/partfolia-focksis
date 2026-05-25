/* ============================================
   cursor.js — Custom animated cursor logic
============================================ */

const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

// Move dot cursor instantly
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

// Animate ring cursor with smooth lerp
function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Scale cursor on hover over interactive elements
const hoverTargets = 'a, button, .portfolio-card, .service-card, .tool-card, .faq-question, .tab-btn, .blog-card';

document.querySelectorAll(hoverTargets).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(2)';
    follower.style.opacity  = '0.8';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.opacity = '0.5';
  });
});
