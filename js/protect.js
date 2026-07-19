/* ============================================================
   suvo.dev — content protection
   Deters casual copying: blocks right-click, text selection,
   copy/cut, image drag, and common DevTools shortcuts.
   ============================================================ */
(function () {
  const allowInputs = (e) =>
    e.target.closest && e.target.closest("input, textarea, select");

  // right-click menu
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // copy / cut
  ["copy", "cut"].forEach((ev) =>
    document.addEventListener(ev, (e) => {
      if (!allowInputs(e)) e.preventDefault();
    })
  );

  // text selection (inputs still work)
  document.addEventListener("selectstart", (e) => {
    if (!allowInputs(e)) e.preventDefault();
  });

  // image dragging
  document.addEventListener("dragstart", (e) => e.preventDefault());

  // devtools / view-source / save shortcuts
  document.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(k)) ||
      (e.ctrlKey && ["u", "s", "p"].includes(k))
    ) {
      e.preventDefault();
    }
  });

  // console notice for the curious
  console.log(
    "%c👋 Hi there!",
    "font-size:18px;font-weight:bold;color:#818cf8;"
  );
  console.log(
    "%cLike what you see? Let's work together → sddev960@gmail.com",
    "font-size:12px;color:#9aa0ae;"
  );
})();
