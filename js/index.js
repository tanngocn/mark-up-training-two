document.addEventListener(
  "DOMContentLoaded",
  function () {
    let blockToggle = document.querySelector(".drop-toogle-block");
    let buttonToggle = document.querySelector(".toggle-block");
    let bg = document.querySelector(".background-toggle");
    let navMenu = document.querySelector(".nav-menu");
    let navLogo = document.querySelector(".nav-logo");
    let navLogoSlide = document.querySelector(".nav-logo-slidebar");
    let header = document.querySelector(".header");
    let navListItem = document.querySelectorAll(".nav-list__item");
    let footLinkListTitle = document.querySelectorAll("h3.footer__title.link ");
    blockToggle.addEventListener("click", function () {
      blockToggle.classList.toggle("visible-fixed");
      buttonToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      navLogoSlide.classList.toggle("active");
      bg.classList.toggle("active");
      navLogo.classList.toggle("hidden-fixed");
      header.classList.toggle("active");
    });
    //nav-header
    navListItem.forEach(function (item) {
      
      item.addEventListener("click", function () {
          item.classList.toggle("active");
      });
    });
    footLinkListTitle.forEach(function (item) {
      item.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
    // footer-linklist
  },
  false
);
