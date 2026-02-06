(function () {
  // Ano no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Scroll suave para qualquer elemento com data-scroll
  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetSel = el.getAttribute("data-scroll");
      if (!targetSel) return;

      const target = document.querySelector(targetSel);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Tracking simples em todos os CTAs
  document.querySelectorAll("[data-cta]").forEach((el) => {
    el.addEventListener("click", () => {
      console.log("cta_click");
    });
  });

  // Accordion FAQ
  const acc = document.querySelector("[data-accordion]");
  if (acc) {
    const items = acc.querySelectorAll(".acc-item");

    function closeAll(exceptBtn) {
      items.forEach((item) => {
        const btn = item.querySelector(".acc-q");
        const panel = item.querySelector(".acc-a");
        const ico = item.querySelector(".acc-ico");
        if (!btn || !panel || !ico) return;
        if (btn === exceptBtn) return;

        btn.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        ico.textContent = "+";
      });
    }

    items.forEach((item) => {
      const btn = item.querySelector(".acc-q");
      const panel = item.querySelector(".acc-a");
      const ico = item.querySelector(".acc-ico");
      if (!btn || !panel || !ico) return;

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";

        if (expanded) {
          btn.setAttribute("aria-expanded", "false");
          panel.hidden = true;
          ico.textContent = "+";
          return;
        }

        closeAll(btn);
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        ico.textContent = "x";
      });
    });
  }

  // Sticky CTA no mobile após um pouco de scroll
  const sticky = document.getElementById("stickyCta");
  function handleSticky() {
    if (!sticky) return;
    const y = window.scrollY || 0;
    const threshold = Math.max(250, window.innerHeight * 0.25);
    if (y > threshold) sticky.classList.add("show");
    else sticky.classList.remove("show");
  }
  window.addEventListener("scroll", handleSticky, { passive: true });
  handleSticky();

  // Microanimação ao entrar na viewport
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  }
})();
