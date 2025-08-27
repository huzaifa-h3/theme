document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".cart-header_btn");
  const cartDrawer = document.querySelector(".cart_drawer");
  const cartClose = document.querySelector(".cart-drawer-close");
  const overlay = document.querySelector(".overlay");

  let openDrawer = () => {
    cartDrawer.classList.add("open");
    overlay.classList.add("active");
  };

  let closeDrawer = () => {
    cartDrawer.classList.remove("open");
    overlay.classList.remove("active");
  };

  cartButton.addEventListener("click", () => {
    openDrawer();
  });

  cartClose.addEventListener("click", () => {
    closeDrawer();
  });

  overlay.addEventListener("click", () => {
    closeDrawer(); // clicking overlay closes cart
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });
});
