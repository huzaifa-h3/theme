function updateCartState(cart) {
  console.log("Updating cart state:", cart);
  const emptyCart = document.querySelector(".empty-cart");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const subtotalEl = document.querySelector(".subtotal");

  // Update subtotal
  if (subtotalEl) {
    subtotalEl.textContent = formatMoney(cart.items_subtotal_price);
  }

  // Toggle cart visibility
  if (cart.item_count === 0) {
    cartWrapper.style.display = "none";
    emptyCart.style.display = "block";
  } else {
    cartWrapper.style.display = "block";
    emptyCart.style.display = "none";
  }
}
export default updateCartState;