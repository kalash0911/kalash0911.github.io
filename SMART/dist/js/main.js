"use strict";

document.addEventListener('DOMContentLoaded', function () {
  initCounter();
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  autoHeight: true,
  speed: 1100
});
var burger = document.querySelector('.burger');

if (burger) {
  var subMenu = document.querySelector('.sub-menu');
  burger.addEventListener("click", function (e) {
    burger.classList.toggle('burger-active');
    subMenu.classList.toggle('sub-menu-active');
  });
}

;
var popupLink = document.querySelectorAll('.popup-link');
var popupLogin = document.querySelector('.login-popup');
var popupSingup = document.querySelector('.singup-popup');
var overlay = document.querySelector('.overlay');
var body = document.querySelector('body');

if (popupLink) {
  popupLink[0].addEventListener("click", function (x) {
    popupLogin.classList.add("popup-active");
    overlay.classList.add("overlay-visible");
    body.classList.add("body-lock");
    var popupClose = popupLogin.querySelector('.popup-btn-close');
    hidePopup(popupClose, popupLogin);
  });
  popupLink[1].addEventListener("click", function (x) {
    popupSingup.classList.add("popup-active");
    overlay.classList.add("overlay-visible");
    body.classList.add("body-lock");
    var popupClose = popupSingup.querySelector('.popup-btn-close');
    hidePopup(popupClose, popupSingup);
  });
}

;

function hidePopup(btn, popup) {
  btn.addEventListener("click", function () {
    popup.classList.remove("popup-active");
    overlay.classList.remove("overlay-visible");
    body.classList.remove("body-lock");
  });
}

function initCounter() {
  var statWrapEl = document.querySelector('.statistics');
  var initStart = false;
  var maxNumbersElArr = document.querySelectorAll('.statistics-item-wrap > h2');
  window.addEventListener('scroll', function () {
    if (isVisible(statWrapEl) && !initStart) {
      initStart = true;
      maxNumbersElArr.forEach(function (el) {
        var maxNumber = Number(el.textContent);
        var startCount = 1;
        var intervalId = setInterval(function () {
          if (startCount < maxNumber) {
            startCount += startCount;

            if (startCount > maxNumber) {
              startCount = maxNumber;
              clearInterval(intervalId);
            }

            el.textContent = formatNumber(startCount);
          }
        }, 50);
      });
    }
  });
}

function isVisible(elem) {
  var coords = elem.getBoundingClientRect();
  var windowHeight = document.documentElement.clientHeight;
  var topVisible = coords.top > 0 && coords.top < windowHeight;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

;
//# sourceMappingURL=main.js.map
