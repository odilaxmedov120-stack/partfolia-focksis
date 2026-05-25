/* ============================================
   animations.js — Scroll reveal & skill bars
============================================ */

// ── Scroll Reveal (IntersectionObserver) ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');

        // Animate skill fill bars inside this element
        entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
      }, 80);

      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => revealObserver.observe(el));

// ── Stagger delay for grid items ──
const staggerSelectors = [
  '.services-grid .service-card',
  '.portfolio-grid .portfolio-card',
  '.tools-grid .tool-card',
  '.testimonials-grid .testimonial-card',
  '.blog-grid .blog-card',
];

staggerSelectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
  });
});
