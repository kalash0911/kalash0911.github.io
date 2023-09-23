"use strict";

// Swiper:
var swiper = new Swiper('.main_page_swiper', {
  direction: 'vertical',
  sliderPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  }
}); //header

showHeader(true);

function showHeader(isShow) {
  var header = document.querySelector("#header");

  if (isShow) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
} //BURGERMENU


var burger = document.querySelector(".burger-btn");
var menuBody = document.querySelector(".header__menu ");
var linkClose = document.querySelectorAll(".link-close");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains("burger_active")) {
      burger.classList.add("burger_finish");
      burger.classList.remove("burger_active");
    } else {
      burger.classList.add("burger_active");
      burger.classList.remove("burger_finish");
    }

    menuBody.classList.toggle("menu_active");
  });
}

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add("burger_finish");
      menuBody.classList.remove("menu_active");
    });
  }
}
//# sourceMappingURL=main.js.map
