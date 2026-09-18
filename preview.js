const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".service-row").forEach((row) => {
  row.addEventListener("click", () => {
    const item = row.closest(".service-item");
    const isOpen = item.classList.toggle("is-open");
    row.setAttribute("aria-expanded", String(isOpen));
  });
});
