"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
new WOW().init();
initSwiperImg();
function initSwiperImg() {
  var slider = new Swiper(".swiper_indise", {
    speed: 1400,
    grabCursor: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 3.5,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3.5
      },
      1444: {
        slidesPerView: 4
      },
      1920: {
        slidesPerView: 5
      }
    }
  });
}

// JSON ANIMATION + SWIPER
var menuSteps = ["Write a detailed description of the design you would like to create", "Select your desired square footage", "Choose one interior design style from our catalog", "As needed, you can upload a reference image directly from your iPhone gallery", "Just 60 seconds of patience…", "4 results are ready. Edit them or upscale for higher resolution", "Here's your interior design, delivered in under 90 seconds"];
var loadCounter = 0;
var totalDuration = 0;
var timerIntervalId;
var animPhoneSlider = destroySlidersOnResize(".stepSlider", 9999999, {
  spaceBetween: 20,
  speed: 0,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  //   stopOnLastSlide: true,
  // },

  autoplay: false,
  pagination: {
    el: ".slider-nav",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<li class="' + className + '">' + "<h2>" + menuSteps[index] + "</h2>" + "</li>";
    }
  },
  on: {
    afterInit: function afterInit() {
      var paginationBtns = document.querySelectorAll(".swiper-pagination-bullet");
      paginationBtns.forEach(function (btn, ind) {
        btn.addEventListener("click", function () {
          startProgressTimer(ind, true);
        });
      });
    },
    activeIndexChange: function activeIndexChange(swiper) {
      jsonPhoneAnimations[swiper.activeIndex].play();
      jsonPhoneAnimations[swiper.previousIndex].stop();
    }
  }
});
var jsonPhoneAnimations = new Array(menuSteps.length).fill("step").map(function (step, ind, arr) {
  var anim = bodymovin.loadAnimation({
    container: document.getElementById("".concat(step, "_").concat(ind + 1)),
    path: "files/step_".concat(ind + 1, "/data.json"),
    render: "svg",
    loop: false,
    autoplay: false
  });
  anim.addEventListener("DOMLoaded", function () {
    loadCounter += 1;
    if (loadCounter === arr.length) {
      totalDuration = jsonPhoneAnimations.reduce(function (prev, cur) {
        cur.onComplete = function () {
          animPhoneSlider.slideNext();
        };
        return prev += cur.getDuration();
      }, 0);
    }
  });
  return anim;
});
function checktimer(progress, total, intervalId) {
  if (progress >= total) clearInterval(intervalId);
}
function startProgressTimer() {
  var currentSlideIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (reset) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
  var totalSlides = 7;
  var fps = 16;
  var durationMS = totalDuration * 1000;
  var msPerSlide = durationMS / totalSlides;
  var intervalTimer = msPerSlide / fps;
  var progressCircle = document.querySelector(".raz");
  var clockArrow = document.querySelector(".clock-arrow");
  var progress = msPerSlide * (currentSlideIndex + 1) - msPerSlide;
  if (!timerIntervalId) {
    timerIntervalId = setInterval(function () {
      var totalTime = progress / durationMS || 0;
      progress += intervalTimer;
      var percent = totalTime * 100;
      var clockArrowDeg = totalTime * 360;
      progressCircle.style.setProperty("--pie-p", "".concat(percent, "%"));
      clockArrow.style.transform = "translate(-50%, -50%) rotate(".concat(clockArrowDeg, "deg)");
      checktimer(progress, durationMS, timerIntervalId);
    }, intervalTimer);
  }
}

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);
  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);
  swiper.on("slideChange", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = false;
    }, 500);
  });
  swiper.on("reachEnd", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });
  swiper.on("reachBeginning", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });
  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;
    if (neededWidth) {
      if (!(sliderSelector !== null && sliderSelector !== void 0 && sliderSelector.classList.contains("swiper-initialized"))) {
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
var indiseIntersectionObs = document.querySelector(".indise_slider_section");
function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      jsonPhoneAnimations[0].play();
      startProgressTimer();
    }
  });
}
function createObserver(target, callback) {
  var options = {
    root: null,
    threshold: 0.5
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}
createObserver(indiseIntersectionObs, callback);
//# sourceMappingURL=indise_script.js.map
