document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu_btn");
  const menuCloseBtn = document.querySelector("#close_menu");
  const menuSidebar = document.querySelector(".menu_sidebar");
  const overlay = document.querySelector(".menu_overlay");

  let menuOpen = () => {
    menuSidebar.style.transform = "translateX(0%)";
    overlay.classList.add("active");
  };

  let menuClose = () => {
    menuSidebar.style.transform = "translateX(-100%)";
    overlay.classList.remove("active");
  };

  menuBtn.addEventListener("click", menuOpen);
  menuCloseBtn.addEventListener("click", menuClose);
  overlay.addEventListener("click", menuClose);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menuClose();
  });
});
