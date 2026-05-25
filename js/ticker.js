/* ============================================
   ticker.js — Duplicate ticker items for
   seamless infinite scroll loop
============================================ */

const tickerTrack = document.getElementById('tickerTrack');

// Clone all children so the loop looks endless
if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}
