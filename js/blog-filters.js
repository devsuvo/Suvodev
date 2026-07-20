// Blog category filter + live search — no page reload, no build step.
(function () {
  const filters = document.getElementById("blogFilters");
  const search = document.getElementById("blogSearch");
  const grid = document.getElementById("blogGrid");
  const empty = document.getElementById("blogEmpty");
  const count = document.getElementById("blogCount");
  if (!filters || !grid) return;

  const cards = Array.from(grid.querySelectorAll(".post-card"));
  let activeCat = "all";

  function apply() {
    const q = search.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const cat = card.dataset.cat;
      const text = card.textContent.toLowerCase();
      const matchesCat = activeCat === "all" || cat === activeCat;
      const matchesQuery = !q || text.includes(q);
      const show = matchesCat && matchesQuery;
      card.classList.toggle("hide", !show);
      if (show) visible++;
    });

    empty.classList.toggle("show", visible === 0);
    count.textContent = visible + (visible === 1 ? " article" : " articles");
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-pill");
    if (!btn) return;
    filters.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    apply();
  });

  search.addEventListener("input", apply);

  apply();
})();
