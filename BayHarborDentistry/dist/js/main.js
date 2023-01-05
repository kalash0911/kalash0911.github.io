"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

new WOW().init(); // btn logic

var btns = document.querySelectorAll('.btn');

var _iterator = _createForOfIteratorHelper(btns),
    _step;

try {
  var _loop = function _loop() {
    var btn = _step.value;

    btn.onmousemove = function (e) {
      var x = e.pageX - btn.offsetLeft;
      var y = e.pageY - btn.offsetTop;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    };
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // Animation

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

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

var _iterator2 = _createForOfIteratorHelper(elements),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var elm = _step2.value;
    observer.observe(elm);
  } // Video controls

} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var videoWrap = document.querySelector('.video-wrap');
var videoPlayer = document.querySelector('.video-player');
var video = document.querySelector('.video');
var playButton = document.querySelector('.play-button');
var muteButton = document.querySelector('.mute-button');
var fullscreenButton = document.querySelector('.fullscreen-button');
var volume = document.querySelector('.volume');
var currentTimeElement = document.querySelector('.current');
var durationTimeElement = document.querySelector('.duration');
var progress = document.querySelector('.video-progress');
var progressBar = document.querySelector('.video-progress-filled'); //Play and Pause button

playButton.addEventListener('click', function (e) {
  if (video.paused) {
    video.play();
    e.target.textContent = '| |';
    videoWrap.classList.toggle('active');
  } else {
    video.pause();
    e.target.textContent = '►';
    videoWrap.classList.toggle('active');
  }
}); //Mute button

muteButton.addEventListener('click', function (e) {
  if (video.muted) {
    video.muted = false;
    muteButton.classList.toggle('mute');
  } else {
    video.muted = true;
    muteButton.classList.toggle('mute');
  }
}); //Fullscreen button

fullscreenButton.addEventListener('click', function (e) {
  if (video.requestFullScreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  }
}); //volume

volume.addEventListener('mousemove', function (e) {
  video.volume = e.target.value;
}); //current time and duration

var currentTime = function currentTime() {
  var currentMinutes = Math.floor(video.currentTime / 60);
  var currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  var durationMinutes = Math.floor(video.duration / 60);
  var durationSeconds = Math.floor(video.duration - durationMinutes * 60);
  currentTimeElement.innerHTML = "".concat(currentMinutes, ":").concat(currentSeconds < 10 ? '0' + currentSeconds : currentSeconds);
  durationTimeElement.innerHTML = "".concat(durationMinutes, ":").concat(durationSeconds);
};

video.addEventListener('timeupdate', currentTime); //Progress bar

video.addEventListener('timeupdate', function () {
  var percentage = video.currentTime / video.duration * 100;
  progressBar.style.width = "".concat(percentage, "%");
}); //change progress bar on click

progress.addEventListener('click', function (e) {
  var progressTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = progressTime;
});
video.addEventListener('ended', stopMedia);

function stopMedia() {
  video.pause();
  video.currentTime = 0;
  videoWrap.classList.remove('active');
} // Castum cursor

/* const bd = document.body,
      cur = document.getElementById("cursor");
      bd.addEventListener("mousemove", function(n) {
      (cur.style.left = n.clientX + "px"), (cur.style.top = n.clientY + "px");
}); */
// Swiper:


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
    el: ".swiper-scrollbar",
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
//# sourceMappingURL=main.js.map
