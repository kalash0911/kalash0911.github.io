(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* header */
var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu");
var linkClose = document.querySelectorAll(".link-close");

if (burger) {
  burgerOutsideClick();
  burger.addEventListener("click", openMenu);
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", closeMenu);
  }
}

;

function openMenu(e) {
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
}

function closeMenu(e) {
  document.body.classList.remove("body_lock");
  document.body.classList.remove("active");
  burger.classList.remove("burger_active");
  burger.classList.add('burger_finish');
  menuBody.classList.remove("menu_active");
}

function burgerOutsideClick() {
  var backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', closeMenu);
}
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
/* navmenu service pages */


var tabsBtn = document.querySelectorAll('.tab_nav-btn');
var tabsItem = document.querySelectorAll('.tab_list');
tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('btn_active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('btn_active');
      });
      tabsItem.forEach(function (item) {
        item.classList.remove('list_active');
      });
      currentBtn.classList.add('btn_active');
      currentTab.classList.add('list_active');
    }
  });
}); // Swiper:

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

destroySlidersOnResize(".reviews-slider", 99999, {
  spaceBetween: 20,
  speed: 800,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
/* reviews opener */

var reviewsBlock = document.querySelectorAll(".text-wrap");
reviewsBlock.forEach(function (review) {
  var btnOpen = review.querySelector('.rev-open');
  var btnClose = review.querySelector('.rev-close');

  if (btnOpen) {
    btnOpen.addEventListener('click', function () {
      review.classList.add("active_review");
    });
    btnClose.addEventListener('click', function () {
      review.classList.remove("active_review");
    });
  }
});
new WOW().init();
/* castom anim */

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
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7O0FBR0EsSUFBSSxNQUFKLEVBQVk7QUFDVixFQUFBLGtCQUFrQjtBQUNsQixFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNEOztBQUFBOztBQUVELElBQUksU0FBUyxDQUFDLE1BQWQsRUFBc0I7QUFDcEIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUF6QixFQUFnQyxFQUFFLENBQWxDLEVBQW9DO0FBQ2xDLElBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFNBQXZDO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCLENBQUgsRUFBK0M7QUFDM0MsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDRCxHQUhILE1BR1M7QUFDTCxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNEOztBQUNILEVBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsYUFBMUI7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I7QUFDcEIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjtBQUNBLEVBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsRUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixhQUExQjtBQUNEOztBQUVELFNBQVMsa0JBQVQsR0FBOEI7QUFDNUIsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DO0FBQ0Q7QUFFRDs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBckI7QUFDQSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF0Qjs7QUFHQSxJQUFJLFlBQUosRUFBa0I7QUFDaEIsRUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDs7QUFBQTs7QUFFRCxJQUFJLGFBQUosRUFBbUI7QUFDakIsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBeEM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFsQztBQUNEOztBQUFBOztBQUVELFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUFzQjtBQUNwQixFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsRUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixRQUFwQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFdBQTVCO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLENBQXBCLEVBQXVCO0FBQ3JCLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQSxFQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDRDtBQUVEOzs7QUFFQSxJQUFNLE9BQU8sR0FBSSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBakI7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBakI7QUFFQSxPQUFPLENBQUMsT0FBUixDQUFnQixVQUFTLElBQVQsRUFBZTtBQUMzQixFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDLFFBQUksVUFBVSxHQUFHLElBQWpCO0FBQ0EsUUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsVUFBeEIsQ0FBWjtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWpCOztBQUVBLFFBQUksQ0FBRSxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4QixZQUE5QixDQUFOLEVBQW1EO0FBQy9DLE1BQUEsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBUyxJQUFULEVBQWU7QUFDM0IsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsWUFBdEI7QUFDSCxPQUZEO0FBSUEsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBZTtBQUM1QixRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNILE9BRkQ7QUFJQSxNQUFBLFVBQVUsQ0FBQyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFlBQXpCO0FBQ0EsTUFBQSxVQUFVLENBQUMsU0FBWCxDQUFxQixHQUFyQixDQUF5QixhQUF6QjtBQUNIO0FBQ0osR0FqQkQ7QUFrQkgsQ0FuQkQsRSxDQXFCQTs7QUFFQSxTQUFTLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDLEtBQTFDLEVBQWlELEdBQWpELEVBQXNELFFBQXRELEVBQWdFO0FBQzlELE1BQU0sSUFBSSxxQkFDTCxHQURLLENBQVY7O0FBSUEsTUFBTSxHQUFHLEdBQUcsTUFBWjtBQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0EsTUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFiOztBQUVBLE1BQU0sVUFBVSxHQUFHLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLFFBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBSixJQUFrQixLQUFyQixHQUE2QixHQUFHLENBQUMsVUFBSixJQUFrQixLQUEzRTs7QUFDQSxRQUFJLFdBQUosRUFBaUI7QUFDZixVQUFJLENBQUMsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsUUFBekIsQ0FBa0Msb0JBQWxDLENBQUwsRUFBOEQ7QUFDNUQsUUFBQSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFUO0FBQ0Q7QUFDRixLQUpELE1BSU8sSUFBSSxjQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixDQUFrQyxvQkFBbEMsQ0FBSixFQUE2RDtBQUNsRSxNQUFBLE1BQU0sQ0FBQyxPQUFQO0FBQ0Q7QUFDRixHQVREOztBQVdBLEdBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBMkIsVUFBQyxHQUFEO0FBQUEsV0FDekIsR0FBRyxDQUFDLGdCQUFKLENBQXFCLEdBQXJCLEVBQTBCLFVBQTFCLEVBQXNDLEtBQXRDLENBRHlCO0FBQUEsR0FBM0I7QUFHRDs7QUFFRCxzQkFBc0IsQ0FBQyxpQkFBRCxFQUFvQixLQUFwQixFQUEyQjtBQUMvQyxFQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQyxFQUFBLEtBQUssRUFBRSxHQUZ3QztBQUcvQyxFQUFBLFVBQVUsRUFBRSxJQUhtQztBQUsvQyxFQUFBLFVBQVUsRUFBRTtBQUNWLElBQUEsTUFBTSxFQUFFLHFCQURFO0FBRVYsSUFBQSxNQUFNLEVBQUU7QUFGRTtBQUxtQyxDQUEzQixDQUF0QjtBQVdBOztBQUVBLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQixDQUFyQjtBQUVBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFVBQVMsTUFBVCxFQUFnQjtBQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBUCxDQUFxQixXQUFyQixDQUFoQjtBQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFQLENBQXFCLFlBQXJCLENBQWpCOztBQUVBLE1BQUcsT0FBSCxFQUFXO0FBQ1QsSUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMxQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0QsS0FGRDtBQUlBLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDM0MsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBYkQ7QUFlQSxJQUFJLEdBQUosR0FBVSxJQUFWO0FBRUE7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFBLE1BQU0sRUFBSTtBQUN0QixRQUFJLE1BQU0sQ0FBQyxjQUFYLEVBQTJCO0FBQ3pCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLGNBQTVCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBQ0QsSUFBSSxPQUFPLEdBQUc7QUFBRSxFQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQ7QUFBYixDQUFkO0FBQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBSixDQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixDQUFmOzsyQ0FDZ0IsUTs7OztBQUFoQixzREFBMEI7QUFBQSxRQUFqQixHQUFpQjtBQUN4QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLEdBQWpCO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBoZWFkZXIgKi9cblxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XG5jb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcblxuXG5pZiAoYnVyZ2VyKSB7XG4gIGJ1cmdlck91dHNpZGVDbGljaygpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcbn07XG5cbmlmIChsaW5rQ2xvc2UubGVuZ3RoKSB7XG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcbiAgICBsaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcbiAgfVxufTtcblxuZnVuY3Rpb24gb3Blbk1lbnUoZSkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgaWYoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyX2FjdGl2ZScpKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfZmluaXNoJyk7XG4gICAgfVxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XG4gIG1lbnVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X2FjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gYnVyZ2VyT3V0c2lkZUNsaWNrKCkge1xuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXG59XG5cbi8qIHBvcFVwICovXG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xuY29uc3QgYnRuT3BlblBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcG9wdXAnKTtcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcblxuXG5pZiAoYnRuT3BlblBvcFVwKSB7XG4gIGJ0bk9wZW5Qb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBvcFVwKTtcbn07XG5cbmlmIChidG5DbG9zZVBvcFVwKSB7XG4gIGJ0bkNsb3NlUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXApO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcbn07XG5cbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XG59XG5cbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xuXG5jb25zdCB0YWJzQnRuICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfbmF2LWJ0bicpO1xuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcblxudGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xuXG4gICAgICAgIGlmKCAhIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG5fYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdidG5fYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gU3dpcGVyOlxuXG5mdW5jdGlvbiBkZXN0cm95U2xpZGVyc09uUmVzaXplKHNlbGVjdG9yLCB3aWR0aCwgb2JqLCBtb3JlVGhhbikge1xuICBjb25zdCBpbml0ID0ge1xuICAgIC4uLm9iaixcbiAgfTtcblxuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIGNvbnN0IHNsaWRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcblxuICBjb25zdCB0b2dnbGVJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5lZWRlZFdpZHRoID0gbW9yZVRoYW4gPyB3aW4uaW5uZXJXaWR0aCA+PSB3aWR0aCA6IHdpbi5pbm5lcldpZHRoIDw9IHdpZHRoXG4gICAgaWYgKG5lZWRlZFdpZHRoKSB7XG4gICAgICBpZiAoIXNsaWRlclNlbGVjdG9yLmNsYXNzTGlzdC5jb250YWlucyhcInN3aXBlci1pbml0aWFsaXplZFwiKSkge1xuICAgICAgICBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlclNlbGVjdG9yLmNsYXNzTGlzdC5jb250YWlucyhcInN3aXBlci1pbml0aWFsaXplZFwiKSkge1xuICAgICAgc3dpcGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgW1wibG9hZFwiLCBcInJlc2l6ZVwiXS5mb3JFYWNoKChldnQpID0+XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCB0b2dnbGVJbml0LCBmYWxzZSlcbiAgKTtcbn1cblxuZGVzdHJveVNsaWRlcnNPblJlc2l6ZShcIi5yZXZpZXdzLXNsaWRlclwiLCA5OTk5OSwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBzcGVlZDogODAwLFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbn0pO1xuXG4vKiByZXZpZXdzIG9wZW5lciAqL1xuXG5jb25zdCByZXZpZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHQtd3JhcFwiKTtcblxucmV2aWV3c0Jsb2NrLmZvckVhY2goZnVuY3Rpb24ocmV2aWV3KXtcbiAgY29uc3QgYnRuT3BlbiA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LW9wZW4nKTtcbiAgY29uc3QgYnRuQ2xvc2UgPSByZXZpZXcucXVlcnlTZWxlY3RvcignLnJldi1jbG9zZScpO1xuXG4gIGlmKGJ0bk9wZW4pe1xuICAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfcmV2aWV3XCIpO1xuICAgIH0pO1xuXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfcmV2aWV3XCIpO1xuICAgIH0pO1xuICB9XG59KTtcblxubmV3IFdPVygpLmluaXQoKTtcblxuLyogY2FzdG9tIGFuaW0gKi9cblxuZnVuY3Rpb24gb25FbnRyeShlbnRyeSkge1xuICBlbnRyeS5mb3JFYWNoKGNoYW5nZSA9PiB7XG4gICAgaWYgKGNoYW5nZS5pc0ludGVyc2VjdGluZykge1xuICAgICAgY2hhbmdlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXNob3cnKTtcbiAgICB9XG4gIH0pO1xufVxubGV0IG9wdGlvbnMgPSB7IHRocmVzaG9sZDogWzAuNV0gfTtcbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkVudHJ5LCBvcHRpb25zKTtcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGVtZW50LWFuaW1hdGlvbicpO1xuZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcbn0iXX0=
