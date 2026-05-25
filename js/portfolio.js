/* ============================================
   portfolio.js — Category filter for portfolio
============================================ */

/**
 * Filter portfolio cards by category.
 * Called via onclick="filterPortfolio('web', this)" in HTML.
 *
 * @param {string} cat   - Category slug: 'all' | 'web' | 'app' | 'dashboard' | 'brand'
 * @param {HTMLElement} btn - The clicked tab button
 */
function filterPortfolio(cat, btn) {
  // Update active tab button
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('.portfolio-card').forEach((card) => {
    const match = cat === 'all' || card.dataset.cat === cat;
    card.style.display   = match ? 'block' : 'none';
    card.style.animation = match ? 'fadeIn 0.4s ease' : '';
  });
}
