document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu_btn");
  const menuCloseBtn = document.querySelector("#close_menu");
  const menuSidebar = document.querySelector(".menu_sidebar");

  let menuClose = () => {
    menuSidebar.style.transform = "translateX(-100%)";
  };
  let menuOpen = () => {
    menuSidebar.style.transform = "translateX(0%)";
  };
  menuBtn.addEventListener("click", () => {
    menuOpen();

    //close on outside click
    document.addEventListener("click", (e) => {
      if (!menuBtn.contains(e.target) && !menuSidebar.contains(e.target)) {
        return menuClose();
      }
    });

    //close on escape key press
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        return menuClose();
      }
    });
  });
  menuCloseBtn.addEventListener("click", () => {
    menuClose();
  });
});
