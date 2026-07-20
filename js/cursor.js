/* ============================================================
   suvo.dev — dev-tool cursor (v2)
   A quiet crosshair + live coordinate readout. Hovering an
   interactive element snaps an inspector box around it with a
   small tag label, like a browser element picker. Clicks get a
   soft ring pulse instead of any cursor shape change.
   Auto-disabled on touch devices / reduced-motion.
   ============================================================ */
(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.body.classList.add("dc-on");

  const cross = document.createElement("div");
  cross.className = "dc-cross";
  cross.innerHTML =
    '<span class="dc-dot"></span>' +
    '<span class="dc-h"></span><span class="dc-h dc-flip"></span>' +
    '<span class="dc-v"></span><span class="dc-v dc-flip"></span>';

  const coords = document.createElement("div");
  coords.className = "dc-coords";

  const box = document.createElement("div");
  box.className = "dc-box";
  box.innerHTML =
    '<i class="dc-c dc-tl"></i><i class="dc-c dc-tr"></i>' +
    '<i class="dc-c dc-bl"></i><i class="dc-c dc-br"></i>' +
    '<span class="dc-tag"></span>';
  const tag = box.querySelector(".dc-tag");

  const click = document.createElement("div");
  click.className = "dc-click";

  document.body.append(cross, coords, box, click);

  let mx = -100, my = -100;
  let bx = 0, by = 0, bw = 0, bh = 0, btx = 0, bty = 0, btw = 0, bth = 0;
  let hoverEl = null;
  let idleTimer = null;

  function labelFor(el) {
    const t = el.tagName.toLowerCase();
    if (t === "a") return "link";
    if (t === "button" || (t === "input" && el.type === "submit")) return "button";
    if (el.classList.contains("card")) return "card";
    return t;
  }

  // ---- code-glyph trail ----
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
    coords.classList.add("show");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => coords.classList.remove("show"), 900);

    const now = performance.now();
    if (now - lastGlyph > 30) {
      lastGlyph = now;
      spawnGlyph(mx, my);
      spawnGlyph(mx, my);
    }
  }, { passive: true });

  addEventListener("mousedown", (e) => {
    click.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    click.classList.remove("fire");
    void click.offsetWidth; // restart animation
    click.classList.add("fire");
  }, { passive: true });

  const SEL = "a, button, summary, input, textarea, select, .card";
  addEventListener("mouseover", (e) => {
    const t = e.target.closest(SEL);
    if (t !== hoverEl) {
      hoverEl = t;
      if (t) {
        const r = t.getBoundingClientRect();
        btx = r.left - 6; bty = r.top - 6; btw = r.width + 12; bth = r.height + 12;
        if (!box.classList.contains("on")) { bx = btx; by = bty; bw = btw; bh = bth; }
        tag.textContent = labelFor(t);
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

  (function tick() {
    cross.style.transform = `translate(${mx}px, ${my}px)`;
    coords.style.transform = `translate(${mx + 16}px, ${my + 18}px)`;
    coords.innerHTML = `<b>x</b> ${mx} <b>y</b> ${my}`;

    bx += (btx - bx) * 0.24; by += (bty - by) * 0.24;
    bw += (btw - bw) * 0.24; bh += (bth - bh) * 0.24;
    box.style.transform = `translate(${bx}px, ${by}px)`;
    box.style.width = bw + "px";
    box.style.height = bh + "px";

    requestAnimationFrame(tick);
  })();
})();
