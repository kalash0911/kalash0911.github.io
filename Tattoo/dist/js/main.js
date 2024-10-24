"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new WOW().init();
var tabletScreenSize = 768; // for header

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");
var linkClose = document.querySelectorAll(".link-close");
var overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    overflow.classList.toggle("overflow_active");
  });
}

;

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    overflow.classList.toggle("overflow_active");
  });
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      overflow.classList.remove("overflow_active");
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
    var neededWidth = moreThan ? win.innerWidth <= width : win.innerWidth >= width;

    if (neededWidth) {
      if (!(sliderSelector === null || sliderSelector === void 0 ? void 0 : sliderSelector.classList.contains("swiper-initialized"))) {
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach(function (evt) {
    return win.addEventListener(evt, toggleInit, false);
  });
  return swiper;
}

var howSlider = destroySlidersOnResize(".slider-how", 768, {
  speed: 0,
  thumbs: {
    swiper: {
      el: '.slider-how-nav',
      slidesPerView: 4
    }
  },
  on: {
    activeIndexChange: function activeIndexChange(swiper) {
      sliderHowVideos[swiper.activeIndex].play();
      sliderHowVideos[swiper.previousIndex].currentTime = 0;
      sliderHowVideos[swiper.previousIndex].pause();
    }
  }
});
destroySlidersOnResize(".slider-how-nav", 768, {});
destroySlidersOnResize(".slider-our", 1, {
  spaceBetween: 20,
  freeMode: true,
  slidesPerView: 'auto',
  breakpoints: {
    300: {
      spaceBetween: 10
    },
    280: {
      spaceBetween: 20
    }
  }
});
destroySlidersOnResize(".slider-reviews", 1, {
  spaceBetween: 20,
  slidesPerView: 5,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 5
    }
  }
});
/* castom anim */

function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}

var options = {
  threshold: [0.5]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.anim');

var _iterator = _createForOfIteratorHelper(elements),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  } // For counter animate

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

if (document.querySelectorAll(".count-progress").length) {
  var _observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.target.getAttribute("data-animated") === "false") {
        var element = entry.target;
        var count = parseFloat(element.innerText);
        var isInteger = count % 1 === 0; // Проверяем, является ли число целым

        var currentCount = 0;
        var speed = parseInt(element.getAttribute("data-speed")) || 10;
        var step = parseFloat(element.getAttribute("data-step")) || 0.1;
        var decimalPlaces = isInteger ? 0 : 1; // Устанавливаем количество знаков после запятой в зависимости от того, целое число или нет

        var interval = setInterval(function () {
          if (currentCount < count) {
            currentCount += step;

            if (currentCount > count) {
              currentCount = count;
            }

            element.innerText = currentCount.toFixed(decimalPlaces);
          } else {
            clearInterval(interval);
            element.setAttribute("data-animated", "true");
          }
        }, speed);
      }
    });
  });

  document.querySelectorAll(".count-progress").forEach(function (element) {
    _observer.observe(element);
  });
}

var sliderHowVideos = document.querySelectorAll(".slider-how video");
["load", "resize"].forEach(function (event) {
  window.addEventListener(event, videoSliderSync);
});

function videoSliderSync() {
  if (window.innerWidth > tabletScreenSize) {
    sliderHowVideos.forEach(function (video) {
      video.pause();
      video.addEventListener("ended", function () {
        var _sliderHowVideos$next;

        var nextSlideIndex = howSlider.activeIndex + 1;
        howSlider.slideNext();
        (_sliderHowVideos$next = sliderHowVideos[nextSlideIndex]) === null || _sliderHowVideos$next === void 0 ? void 0 : _sliderHowVideos$next.play();
      });
    });
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var firstVideo = howSlider.hostEl.querySelector("video");
          firstVideo.play();
        }
      });
    }, {
      threshold: [0.5]
    });
    videoObserver.observe(howSlider.hostEl);
    return;
  }

  var mobileVideoObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        // entry.target.currentTime = 0;
        entry.target.pause();
      }
    });
  }, {
    threshold: [0.5]
  });
  sliderHowVideos.forEach(function (video) {
    video.pause();
    mobileVideoObserver.observe(video);
  });
}
//# sourceMappingURL=main.js.map
