/* ============================================================
   suvo.dev — dev-tool cursor
   Crosshair + live coordinate readout + code-glyph trail.
   Interactive elements get inspector-style corner brackets.
   Auto-disabled on touch devices / reduced-motion.
   ============================================================ */
(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.body.classList.add("devcursor-on");

  // ---- build cursor nodes ----
  const cross = document.createElement("div");
  cross.className = "dc-cross";
  cross.innerHTML = '<span class="dc-h"></span><span class="dc-v"></span>';

  const coords = document.createElement("div");
  coords.className = "dc-coords";
  coords.textContent = "x:0 y:0";

  const box = document.createElement("div");
  box.className = "dc-box";
  box.innerHTML =
    '<i class="dc-c dc-tl"></i><i class="dc-c dc-tr"></i>' +
    '<i class="dc-c dc-bl"></i><i class="dc-c dc-br"></i>';

  document.body.append(cross, coords, box);

  let mx = -100, my = -100;        // real mouse
  let bx = 0, by = 0, bw = 0, bh = 0, btx = 0, bty = 0, btw = 0, bth = 0;
  let hoverEl = null;

  // ---- glyph trail ----
  const GLYPHS = ["{", "}", ";", "<\/>", "()", "=>", "0", "1"];
  let lastGlyph = 0;
  function spawnGlyph(x, y) {
    const g = document.createElement("span");
    g.className = "dc-glyph";
    g.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
    g.style.left = x + (Math.random() * 16 - 8) + "px";
    g.style.top = y + (Math.random() * 16 - 8) + "px";
    document.body.appendChild(g);
    g.addEventListener("animationend", () => g.remove());
  }

  addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    const now = performance.now();
    if (now - lastGlyph > 90) { lastGlyph = now; spawnGlyph(mx, my); }
  }, { passive: true });

  // ---- hover targets ----
  const SEL = "a, button, summary, input, textarea, select, .card";
  addEventListener("mouseover", (e) => {
    const t = e.target.closest(SEL);
    if (t !== hoverEl) {
      hoverEl = t;
      if (t) {
        const r = t.getBoundingClientRect();
        btx = r.left - 6; bty = r.top - 6; btw = r.width + 12; bth = r.height + 12;
        if (!box.classList.contains("on")) { bx = btx; by = bty; bw = btw; bh = bth; }
        box.classList.add("on");
        cross.classList.add("hide");
      } else {
        box.classList.remove("on");
        cross.classList.remove("hide");
      }
    }
  }, { passive: true });

  addEventListener("scroll", () => {
    if (hoverEl) {
      const r = hoverEl.getBoundingClientRect();
      btx = r.left - 6; bty = r.top - 6; btw = r.width + 12; bth = r.height + 12;
    }
  }, { passive: true });

  // ---- render loop ----
  (function tick() {
    cross.style.transform = `translate(${mx}px, ${my}px)`;
    coords.style.transform = `translate(${mx + 16}px, ${my + 18}px)`;
    coords.textContent = `x:${mx} y:${my}`;

    bx += (btx - bx) * 0.22; by += (bty - by) * 0.22;
    bw += (btw - bw) * 0.22; bh += (bth - bh) * 0.22;
    box.style.transform = `translate(${bx}px, ${by}px)`;
    box.style.width = bw + "px";
    box.style.height = bh + "px";

    requestAnimationFrame(tick);
  })();
})();
