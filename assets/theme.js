document.addEventListener("click", function (e) {
  if (e.target.matches(".quantity-btn--plus")) {
    increaseQuantity(e.target);
  }
  if (e.target.matches(".quantity-btn--minus")) {
    decreaseQuantity(e.target);
  }
});
