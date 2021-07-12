"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new WOW().init();
sectionInViewport();
initSliders(".services__gallery", 480);
initSliders(".post-slider", 768, {
  slidesToShow: 2,
  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 1
    }
  }]
});
initSliders(".reviews-slider", 768);
changeNavLinks();
initScrollToTop();
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  var menuArrows = document.querySelectorAll(".menu__arrow");

  if (menuArrows.length > 0) {
    var _loop = function _loop(index) {
      var menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    };

    for (var index = 0; index < menuArrows.length; index++) {
      _loop(index);
    }
  }
} else {
  document.body.classList.add("_pc");
}

var menuBurger = document.querySelector(".menu__burger");

if (menuBurger) {
  var menuBody = document.querySelector(".menu__body");
  menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    menuBurger.classList.toggle("menu__burger_active");
    menuBody.classList.toggle("menu__body_active");
  });
}

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
      if (win.width() < width) {
        slider.not(".slick-initialized").slick(init);
      } else if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
      }
    });
  });
}

function changeNavLinks() {
  renderSpansForMenu();
  var darkSection = document.querySelector(".dark-section");
  var words = document.querySelectorAll(".left-menu__content-item");
  window.addEventListener("scroll", function () {
    var sectionRect = darkSection.getBoundingClientRect();
    var heightSectionFromTop = sectionRect.top + sectionRect.height;
    words.forEach(function (el) {
      var elRectTop = el.getBoundingClientRect().top;

      if (elRectTop >= sectionRect.top && elRectTop < heightSectionFromTop) {
        el.classList.add("overSection");
      } else {
        el.classList.remove("overSection");
      }
    });
  });
}

function renderSpansForMenu() {
  var navLinks = _toConsumableArray(document.querySelectorAll(".left-menu__link"));

  var arrowUpEl = document.querySelector(".left-menu__arrow");
  arrowUpEl.classList.add("left-menu__content-item");

  var _iterator = _createForOfIteratorHelper(navLinks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var word = _step.value;
      var text = word.textContent;
      word.textContent = "";

      for (var i = 0; i < text.length; i++) {
        var spanEl = document.createElement("span");
        spanEl.classList.add("left-menu__content-item");
        spanEl.textContent = text[i];
        word.appendChild(spanEl);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function sectionInViewport() {
  var section = document.querySelector(".scroll-section");
  if (!section) return;
  window.addEventListener("scroll", function () {
    var sectionRect = section.getBoundingClientRect();
    var isBlockIsOutFromViewPort = sectionRect.height + sectionRect.top - 150;
    var isBlockInViewPort = window.innerHeight - sectionRect.top - 100;

    if (isBlockIsOutFromViewPort > 0 && isBlockInViewPort > 0) {
      document.body.classList.add("change-bg");
    } else {
      document.body.classList.remove("change-bg");
    }
  });
}

function initScrollToTop() {
  var btn = document.querySelector(".left-menu__arrow");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
  });
}

function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
//# sourceMappingURL=main.js.map
