document.addEventListener("click", function (e) {
  if (e.target.matches(".quantity-btn--plus")) {
    increaseQuantity(e.target);
  }
  if (e.target.matches(".quantity-btn--minus")) {
    decreaseQuantity(e.target);
  }
});
const details = document.querySelectorAll(
  "#CollectionFiltersForm details, #CollectionSortForm details"
);

details.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      details.forEach((others) => {
        if (others !== detail) {
          others.removeAttribute("open");
        }
      });
    }
  });
});

// Outside click -> close all
document.addEventListener("click", (e) => {
  details.forEach((detail) => {
    if (!detail.contains(e.target)) {
      detail.removeAttribute("open");
    }
  });
});

// Escape key -> close all
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    details.forEach((detail) => detail.removeAttribute("open"));
  }
});
