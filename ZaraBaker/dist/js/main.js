"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new WOW().init();

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    var targetElement = e.target;

    if (window.innerWidth < 1024) {
      if (targetElement.classList.contains('btn-arrow')) {
        targetElement.closest('.menu-item').classList.toggle('menu-item_active');
        targetElement.closest('.menu').classList.toggle('opacity-links');
      }
    }
  }
};

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

    menuBody.classList.toggle("menu_active");
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
      menuBody.classList.remove("menu_active");
    });
  }
}

;

function initSliders(selector, width, obj) {
  var init = _objectSpread({
    infinite: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }, obj);

  $(function () {
    var win = $(window);
    var slider = $(selector);
    win.on("load resize", function () {
      if (win.width() <= width) {
        slider.not(".slick-initialized").slick(init);
      } else if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
      }
    });
  });
}

;
initSliders(".servis-slider", 767, {
  slidesToShow: 2,
  slidesToScroll: 2,
  adaptiveHeight: true,
  speed: 700,
  dots: true,
  arrows: false,
  touchThreshold: 50,
  responsive: [{
    breakpoint: 660,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
initSliders(".icons-slider", 99999, {
  speed: 700,
  dots: true,
  arrows: false,
  touchThreshold: 50,
  slidesPerRow: 2,
  rows: 3,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1025,
    settings: {
      slidesPerRow: 3,
      rows: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesPerRow: 1,
      rows: 3
    }
  }]
});
initSliders(".testi-slider", 99999, {
  slidesToShow: 1,
  adaptiveHeight: true,
  speed: 700,
  dots: true,
  arrows: false,
  touchThreshold: 50
});
var tabsBtn = document.querySelectorAll('.tabs__nav-btn');
var tabsItem = document.querySelectorAll('.tabs__item');
tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tab_active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('tab_active');
      });
      tabsItem.forEach(function (item) {
        item.classList.remove('tab__item_active');
      });
      currentBtn.classList.add('tab_active');
      currentTab.classList.add('tab__item_active');
    }
  });
});
//# sourceMappingURL=main.js.map
