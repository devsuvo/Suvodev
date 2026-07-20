// ===== Mouse & Scroll Effects =====

// --- Spotlight effect: glow follows the mouse inside cards ---
// rAF-throttled and scoped to cards currently in the viewport so it doesn't
// do a full DOM query + layout read on every single mousemove event.
(function () {
  let spotlightCards = [];
  function refreshSpotlightCards() {
    spotlightCards = Array.from(document.querySelectorAll('.spotlight-card, .service-card'));
  }
  refreshSpotlightCards();
  window.addEventListener('resize', refreshSpotlightCards, { passive: true });

  let lastX = 0, lastY = 0, queued = false;
  function applySpotlight() {
    queued = false;
    for (const card of spotlightCards) {
      const rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) continue; // off-screen, skip
      card.style.setProperty('--mx', lastX - rect.left + 'px');
      card.style.setProperty('--my', lastY - rect.top + 'px');
    }
  }
  document.addEventListener('mousemove', (e) => {
    lastX = e.clientX; lastY = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(applySpotlight); }
  }, { passive: true });
})();

// --- 3D tilt on hero/about images ---
document.querySelectorAll('.tilt-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// --- Magnetic buttons: pull slightly toward the cursor ---
document.querySelectorAll('.magnetic').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// --- Animated counters in the stats bar ---
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const suffix = el.textContent.includes('%') ? '' : '+';
    const duration = 1500;
    const start = performance.now();
    (function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))) + (progress === 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(tick);
    })(start);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));
