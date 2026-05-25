/* ============================================
   navbar.js — Sticky nav & mobile menu toggle
============================================ */

const navbar     = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');

// Darken nav background on scroll
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(10, 10, 10, 0.97)'
    : 'rgba(10, 10, 10, 0.85)';

  // Show / hide scroll-to-top button
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 500);
});

// Toggle mobile menu open/close
function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

// Close mobile menu when any link is clicked
document.querySelectorAll('.mobile-menu a').forEach((a) => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});
