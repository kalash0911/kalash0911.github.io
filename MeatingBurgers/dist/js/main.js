"use strict";

/* header logick */
var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");
var linkClose = document.querySelectorAll(".link-close");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
    }
  });
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
    });
  }
}

;
/* popUp */

var overlay = document.querySelector(".overlay");
var popUp = document.querySelector(".pop-up");
var btnOpenPopUp = document.querySelector('.open-popup');
var btnClosePopUp = document.querySelector('.close-popup');

if (btnOpenPopUp) {
  btnOpenPopUp.addEventListener("click", openPopUp);
}

;

if (btnClosePopUp) {
  btnClosePopUp.addEventListener("click", closePopUp);
  overlay.addEventListener("click", closePopUp);
}

;

function openPopUp(e) {
  overlay.classList.add("active");
  popUp.classList.add("active");
  document.body.classList.add("body_lock");
}

function closePopUp(e) {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
  document.body.classList.remove("body_lock");
}
//# sourceMappingURL=main.js.map
