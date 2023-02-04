"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

new WOW().init();
destroyMenusOnResize($(".drilldown"), 1200);
initHeaderBurger();
initHoverSubMenu();
initMainBtnAnimation();
initBlockInViewportAnimation();
initVideoPlayers();
initVideoPopup();
initAccordion(); // Foundation drilldown menu:

function destroyMenusOnResize(jQueryObj, width) {
  var win = window;
  var headerMenu = new Foundation.Drilldown(jQueryObj);

  var toggleInit = function toggleInit() {
    var neededWidth = win.innerWidth >= width;

    if (neededWidth) {
      if (!(jQueryObj === null || jQueryObj === void 0 ? void 0 : jQueryObj.hasClass("destroyed"))) {
        jQueryObj.foundation("_destroy").addClass("destroyed");
      }
    } else if (jQueryObj === null || jQueryObj === void 0 ? void 0 : jQueryObj.hasClass("destroyed")) {
      headerMenu = new Foundation.Drilldown(jQueryObj);
      jQueryObj.removeClass("destroyed");
    }
  };

  ["load", "resize"].forEach(function (evt) {
    return win.addEventListener(evt, toggleInit, false);
  });
} // header logic


function initHeaderBurger() {
  var burger = document.querySelector(".burger");
  var menuBody = document.querySelector(".menu-wrap");
  var overflow = document.querySelector(".overflow");

  if (burger) {
    burger.addEventListener("click", function (e) {
      document.body.classList.toggle("body_lock");
      document.body.classList.toggle("active");
      overflow.classList.toggle("overflow_active");
      document.body.classList.remove("item-active");
      document.body.classList.remove("sub-item-active");
      subItem.classList.remove("sub-item-active");
    });
  }
} // for hover sub menu


function initHoverSubMenu() {
  var header = document.querySelector("#header");
  var itemDrop = document.querySelector(".item-drop");

  var addHoverCb = function addHoverCb() {
    return header.classList.add("hover");
  };

  var removeHoverCb = function removeHoverCb() {
    return header.classList.remove("hover");
  };

  ["load", "resize"].forEach(function (evt) {
    return window.addEventListener(evt, function () {
      if (window.innerWidth > 1200 && itemDrop) {
        itemDrop.addEventListener("mouseover", addHoverCb);
        itemDrop.addEventListener("mouseleave", removeHoverCb);
      } else {
        itemDrop.removeEventListener("mouseover", addHoverCb);
        itemDrop.removeEventListener("mouseleave", removeHoverCb);
      }
    }, false);
  });
} // for active sub menu
// TODO: Delete?


var btnMob = document.querySelector(".btn-mob");

if (btnMob) {
  btnMob.addEventListener("click", function (e) {
    document.body.classList.toggle("item-active");
  });
} // for active sub block
// TODO: Delete?


var subBtnMob = document.querySelectorAll(".sub-btn-mob");
var subItem = document.querySelector(".sub-item");

if (subBtnMob.length) {
  for (var i = 0; i < subBtnMob.length; ++i) {
    subBtnMob[i].addEventListener("click", function (e) {
      document.body.classList.toggle("sub-item-active");
      subItem.classList.toggle("active");
    });
  }
} // btn logic


function initMainBtnAnimation() {
  var btns = document.querySelectorAll(".btn");

  if (btns !== null) {
    var _iterator = _createForOfIteratorHelper(btns),
        _step;

    try {
      var _loop = function _loop() {
        var btn = _step.value;

        btn.onmousemove = function (e) {
          var x = e.pageX - btn.offsetLeft;
          var y = e.pageY - btn.getBoundingClientRect().top - window.scrollY;
          btn.style.setProperty("--x", x + "px");
          btn.style.setProperty("--y", y + "px");
        };
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
} // Animation


function initBlockInViewportAnimation() {
  function onEntry(entry) {
    entry.forEach(function (change) {
      if (change.isIntersecting) {
        change.target.classList.add("show");
      }
    });
  }

  var options = {
    threshold: [0.5]
  };
  var observer = new IntersectionObserver(onEntry, options);
  var elements = document.querySelectorAll(".anim");

  var _iterator2 = _createForOfIteratorHelper(elements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var elm = _step2.value;
      observer.observe(elm);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Video controls


function initVideoPlayers() {
  var videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps === null || videoWraps === void 0 ? void 0 : videoWraps.forEach(function (videoWrap) {
    var video = videoWrap.querySelector(".video");
    var playButton = videoWrap.querySelector(".play-button");
    var muteButton = videoWrap.querySelector(".mute-button");
    var fullscreenButton = videoWrap.querySelector(".fullscreen-button");
    var volume = videoWrap.querySelector(".volume");
    var currentTimeElement = videoWrap.querySelector(".current");
    var durationTimeElement = videoWrap.querySelector(".duration");
    var progress = videoWrap.querySelector(".video-progress");
    var progressBar = videoWrap.querySelector(".video-progress-filled"); //Play and Pause button

    playButton.addEventListener("click", function (e) {
      if (video.paused) {
        video.play();
        e.target.textContent = "| |";
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        e.target.textContent = "►";
        videoWrap.classList.toggle("active");
      }
    }); //Mute button

    muteButton.addEventListener("click", function (e) {
      if (video.muted) {
        video.muted = false;
        muteButton.classList.toggle("mute");
      } else {
        video.muted = true;
        muteButton.classList.toggle("mute");
      }
    }); //Fullscreen button

    fullscreenButton.addEventListener("click", function (e) {
      if (video.requestFullScreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    }); //volume

    volume.addEventListener("mousemove", function (e) {
      video.volume = e.target.value;
    }); //current time and duration

    var currentTime = function currentTime() {
      var currentMinutes = Math.floor(video.currentTime / 60);
      var currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
      var durationMinutes = Math.floor(video.duration / 60);
      var durationSeconds = Math.floor(video.duration - durationMinutes * 60);
      currentTimeElement.innerHTML = "".concat(currentMinutes, ":").concat(currentSeconds < 10 ? "0" + currentSeconds : currentSeconds);
      durationTimeElement.innerHTML = "".concat(durationMinutes, ":").concat(durationSeconds);
    };

    video.addEventListener("timeupdate", currentTime); //Progress bar

    video.addEventListener("timeupdate", function () {
      var percentage = video.currentTime / video.duration * 100;
      progressBar.style.width = "".concat(percentage, "%");
    }); //change progress bar on click

    progress.addEventListener("click", function (e) {
      var progressTime = e.offsetX / progress.offsetWidth * video.duration;
      video.currentTime = progressTime;
    });
    video.addEventListener("ended", stopMedia);

    function stopMedia() {
      video.pause();
      video.currentTime = 0;
      videoWrap.classList.remove("active");
    }
  });
} // for video pop-up


function initVideoPopup() {
  var openVideo = document.querySelector(".open-video");
  var closeVideo = document.querySelector(".close-video");
  var videoBlock = document.querySelector(".video-block");

  if (videoBlock !== null) {
    openVideo.addEventListener("click", function (e) {
      videoBlock.classList.add("video-block_active");
      document.body.classList.add("body_overflow");
      document.body.addEventListener("click", closeVideoEvent);
    });
    closeVideo.addEventListener("click", function (e) {
      videoBlock.classList.remove("video-block_active");
      document.body.classList.remove("body_overflow");
      document.body.removeEventListener("click", closeVideoEvent);
    });
  }
} // Swiper:


function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

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
}

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 30,
  effect: "fade",
  autoHeight: true,
  speed: 700,
  mousewheel: {
    invert: false,
    releaseOnEdges: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
destroySlidersOnResize(".sec-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  freeMode: true,
  speed: 700,
  scrollbar: {
    el: ".sec-swiper-scrollbar",
    draggable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.01,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.05,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1.1,
      spaceBetween: 30
    },
    860: {
      slidesPerView: 1.2
    },
    960: {
      slidesPerView: 1.3
    },
    1024: {
      slidesPerView: 1.5
    },
    1300: {
      slidesPerView: 1.7
    }
  }
});
destroySlidersOnResize(".video-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  freeMode: true,
  speed: 700,
  scrollbar: {
    el: ".video-swiper-scrollbar",
    draggable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.01,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.05,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1.1,
      spaceBetween: 30
    },
    860: {
      slidesPerView: 1.2
    },
    960: {
      slidesPerView: 1.5
    },
    1024: {
      slidesPerView: 1.9
    },
    1300: {
      slidesPerView: 2.05
    }
  }
});
destroySlidersOnResize(".reviews-slider", 99999, {
  spaceBetween: 30,
  effect: "fade",
  autoHeight: true,
  speed: 700,
  mousewheel: {
    invert: false,
    releaseOnEdges: true
  },
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true
  }
}); // For Accardion

function initAccordion() {
  var accardionToggle = function accardionToggle(slideMenu) {
    return function (e) {
      slideMenu.forEach(function (links) {
        var hidePanel = links.nextElementSibling;

        if (links === e.currentTarget) {
          e.currentTarget.classList.toggle("active");
          hidePanel.classList.toggle("active-block");
        } else {
          links.classList.remove("active");
          hidePanel.classList.remove("active-block");
        }
      });
    };
  };

  var slideMenu = document.querySelectorAll(".accardion-link");
  slideMenu.forEach(function (links) {
    links.addEventListener("click", accardionToggle(slideMenu));
  });
}
//# sourceMappingURL=main.js.map
