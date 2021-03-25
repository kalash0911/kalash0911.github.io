"use strict";

$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    arrows: true,
    adaptiveHeight: true,
    speed: 1000,
    dots: true,
    appendArrows: $('.arrows'),
    appendDots: $('.dots')
  });
});
jQuery(function () {
  greeting();
});

var greeting = function greeting() {
  return console.log("Hi!");
};

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger,.nav-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
//# sourceMappingURL=main.js.map
