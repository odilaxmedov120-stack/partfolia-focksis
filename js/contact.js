/* ============================================
   contact.js — Contact form submit feedback
============================================ */

/**
 * Simulate form submission with visual feedback.
 * Called via onclick="handleSubmit()" on the submit button.
 * Replace with real fetch/ajax logic when connecting a backend.
 */
function handleSubmit() {
  const btn = document.querySelector('.btn-submit');

  // Validate (basic)
  const name    = document.querySelector('input[placeholder="John Doe"]').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    btn.innerHTML   = '<i class="fas fa-exclamation-circle"></i> Please fill all fields';
    btn.style.background = '#c0392b';
    setTimeout(() => {
      btn.innerHTML        = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
    }, 2500);
    return;
  }

  // Success state
  btn.innerHTML        = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = '#2ecc71';

  // Reset after 3s
  setTimeout(() => {
    btn.innerHTML        = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = '';
  }, 3000);
}
