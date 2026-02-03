// Scroll suave + tracking simples
document.querySelectorAll("[data-scroll]").forEach(el => {
  el.addEventListener("click", () => {
    console.log("cta_click");
    document.querySelector(el.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const open = answer.style.display === "block";

    document.querySelectorAll(".faq-answer")
      .forEach(a => a.style.display = "none");

    answer.style.display = open ? "none" : "block";
  });
});
