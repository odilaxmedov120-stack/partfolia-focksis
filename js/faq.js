/* ============================================
   faq.js — Accordion toggle for FAQ section
============================================ */

/**
 * Open or close an FAQ item.
 * Called via onclick="toggleFaq(this)" on .faq-question elements.
 *
 * @param {HTMLElement} questionEl - The clicked .faq-question element
 */
function toggleFaq(questionEl) {
  const item   = questionEl.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Close all items first
  document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));

  // Re-open if it was previously closed
  if (!isOpen) item.classList.add('open');
}
