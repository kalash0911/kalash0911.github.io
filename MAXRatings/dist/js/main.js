"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

; // Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

    if (neededWidth) {
      if (!sliderSelector.classList.contains("swiper-initialized")) {
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach(function (evt) {
    return win.addEventListener(evt, toggleInit, false);
  });
}

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 20,
  slidesPerView: 4.5,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  speed: 700,
  centerPadding: 0,
  mousewheel: {
    eventsTarget: ".main-slider"
  },
  autoplay: {
    delay: 1500
  },
  breakpoints: {
    320: {
      slidesPerView: 1.75
    },
    640: {
      slidesPerView: 2.5
    },
    1025: {
      slidesPerView: 3.5
    },
    1100: {
      slidesPerView: 4
    },
    1250: {
      slidesPerView: 4.5
    },
    1400: {
      slidesPerView: 5.2
    }
  }
});
/* scroll logic */

function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

var options = {
  threshold: [0.5]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.element-animation');

var _iterator = _createForOfIteratorHelper(elements),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  } // GSAP ScrollTrigger

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

ScrollTrigger.create({
  trigger: "#platforms",
  start: "top bottom",
  endTrigger: "#contact",
  end: "bottom 50%+=100px",
  onUpdate: function onUpdate(self) {
    gsap.to("#platforms .cont", {
      x: self.progress.toFixed(3) * 300
    });
  }
}); // Open review in popup

handleReviewOpen();

function handleReviewOpen() {
  var swiperSlides = document.querySelectorAll('.swiper-slide');
  var popup = document.querySelector('.popup');
  var popupText = popup.querySelector('.popup-text');
  var popupContentBlock = popup.querySelector('.popup-content');
  var popupImg = popup.querySelector('.img-wrap img');
  var closeBtn = popup.querySelector('.btn-close');
  var backDrop = document.querySelector('.backdrop');
  swiperSlides.forEach(function (slide) {
    slide.addEventListener('click', function () {
      if (slide.classList.contains('swiper-slide-active')) {
        var text = slide.querySelector('p.discription').textContent;
        var imagePath = slide.querySelector('.img-wrap img').getAttribute('src');
        var ratingHTML = slide.querySelector('.reiting');
        openPopup(text, imagePath, ratingHTML.cloneNode(true));
      }
    });
  });
  backDrop.addEventListener('click', closePopup);
  closeBtn.addEventListener('click', closePopup);

  function openPopup(text, imagePath, ratingHTML) {
    popup.classList.add('open');
    backDrop.classList.add('open');
    document.body.classList.add("body_lock");
    popupText.textContent = text;
    popupImg.setAttribute('src', imagePath);
  }

  function closePopup() {
    popup.classList.remove('open');
    backDrop.classList.remove('open');
    document.body.classList.remove("body_lock");
    popupText.textContent = '';
  }
}
//# sourceMappingURL=main.js.map
