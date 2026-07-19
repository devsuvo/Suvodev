// ===== Mouse & Scroll Effects =====

// --- Custom cursor: dot + smooth trailing ring ---
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (finePointer && dot && ring) {
  document.body.classList.add('custom-cursor-on');

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    spawnParticle(mx, my);
  });

  (function animateRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animateRing);
  })();

  // Grow the ring over links/buttons
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, textarea, select')) {
      ring.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, textarea, select')) {
      ring.classList.remove('cursor-hover');
    }
  });
}

// --- Sparkle particle trail (throttled) ---
let lastParticle = 0;
function spawnParticle(x, y) {
  const now = performance.now();
  if (now - lastParticle < 40) return;
  lastParticle = now;

  const p = document.createElement('span');
  p.className = 'trail-particle';
  const size = 4 + Math.random() * 5;
  p.style.width = p.style.height = size + 'px';
  p.style.left = x + 'px';
  p.style.top = y + 'px';
  p.style.setProperty('--tx', (Math.random() - 0.5) * 60 + 'px');
  p.style.setProperty('--ty', (Math.random() - 0.5) * 60 + 'px');
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 700);
}

// --- Spotlight effect: glow follows the mouse inside cards ---
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.spotlight-card, .service-card').forEach((card) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - rect.left + 'px');
    card.style.setProperty('--my', e.clientY - rect.top + 'px');
  });
});

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
