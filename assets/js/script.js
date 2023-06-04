function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../assets/img/close_white_36dp.svg";
  }
}
function toggleMenu() {
  let navMenu = document.querySelector(".nav-menu");
  if (navMenu.classList.contains("hidden-menu")) {
    navMenu.classList.remove("hidden-menu");
    document.querySelector(".icon-nav").src =
      " ../assets/img/menu_white_36dp.svg";
  } else {
    navMenu.classList.add("hidden-menu");
    document.querySelector(".icon-nav").src =
      "../assets/img/close_white_36dp.svg";
  }
}
