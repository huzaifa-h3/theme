document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.querySelector(".cart-header_btn");
  const cartDrawer = document.querySelector(".cart_drawer");
  const cartClose = document.querySelector(".cart-drawer-close");

  let openDrawer = () => {
    cartDrawer.style.transform = "translateX(0%)";
  };
  let closeDrawer = () => {
    cartDrawer.style.transform = "translateX(100%)";
  };
  cartButton.addEventListener("click", () => {
    openDrawer();
    document.addEventListener("click", (e) => {
      if (!cartButton.contains(e.target) && !cartDrawer.contains(e.target)) {
        closeDrawer();
      }
    });
  });
  cartClose.addEventListener("click", () => {
    closeDrawer();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });
});
