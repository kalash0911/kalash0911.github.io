"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

new WOW().init(); // Video controls

initVideoPlayers();

function initVideoPlayers() {
  var videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps === null || videoWraps === void 0 ? void 0 : videoWraps.forEach(function (videoWrap) {
    var video = videoWrap.querySelector(".video");
    var playButton = videoWrap.querySelector(".play-button"); //Play and Pause button

    playButton.addEventListener("click", function (e) {
      if (video.paused) {
        video.play();
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        videoWrap.classList.toggle("active");
      }
    });
  });
}
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

if (document.querySelectorAll('.count-progress').length) {
  // создаем экземпляр Intersection Observer
  var _observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // если элемент стал видимым и его анимация еще не проигрывалась, запускаем анимацию
      if (entry.isIntersecting && entry.target.getAttribute('data-animated') === 'false') {
        var element = entry.target;
        var count = parseInt(element.innerText);
        var currentCount = 0;
        var speed = parseInt(element.getAttribute('data-speed')) || 10; // считываем значение атрибута "data-speed" или устанавливаем значение по умолчанию

        var step = parseInt(element.getAttribute('data-step')) || 1; // считываем значение атрибута "data-step" или устанавливаем значение по умолчанию

        var interval = setInterval(function () {
          if (currentCount < count) {
            currentCount += step;

            if (currentCount > count) {
              currentCount = count;
            }

            element.innerText = currentCount;
          } else {
            clearInterval(interval);
            element.setAttribute('data-animated', 'true'); // устанавливаем атрибут "data-animated" в значение "true"
          }
        }, speed);
      }
    });
  }); // добавляем каждый элемент с классом "count-progress" в Observer


  document.querySelectorAll('.count-progress').forEach(function (element) {
    _observer.observe(element);
  });
} // For Paralax


window.addEventListener('scroll', function () {
  var section = document.getElementById('paralax-sc');
  var paralax = document.querySelector('.paralax');
  var windowHeight = window.innerHeight;
  var sectionBottom = section.getBoundingClientRect().bottom;

  if (sectionBottom <= windowHeight && sectionBottom >= 0) {
    var translateY = Math.max(0, (sectionBottom - windowHeight) / -windowHeight * 50);
    paralax.style.transform = "translateY(".concat(translateY, "%)");
  }
});
//# sourceMappingURL=main.js.map
