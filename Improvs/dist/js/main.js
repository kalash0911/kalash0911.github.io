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

showHeader(false);

function showHeader(isShow) {
  var header = document.querySelector("#header");

  if (isShow) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
}
//# sourceMappingURL=main.js.map
