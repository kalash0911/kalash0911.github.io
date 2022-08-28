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
  /* active link page */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
    navItem = document.querySelector("[data-id-nav=".concat(pageId, "]"));

if (pageId == navItem.getAttribute("data-id-nav")) {
  navItem.classList.add("active-link");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7O0FBR0EsSUFBSSxNQUFKLEVBQVk7QUFDVixFQUFBLGtCQUFrQjtBQUNsQixFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNEOztBQUFBOztBQUVELElBQUksU0FBUyxDQUFDLE1BQWQsRUFBc0I7QUFDcEIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUF6QixFQUFnQyxFQUFFLENBQWxDLEVBQW9DO0FBQ2xDLElBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFNBQXZDO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCLENBQUgsRUFBK0M7QUFDM0MsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7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QUF4QjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBYkQ7QUFlQSxJQUFJLEdBQUosR0FBVSxJQUFWO0FBRUE7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFBLE1BQU0sRUFBSTtBQUN0QixRQUFJLE1BQU0sQ0FBQyxjQUFYLEVBQTJCO0FBQ3pCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLGNBQTVCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBQ0QsSUFBSSxPQUFPLEdBQUc7QUFBRSxFQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQ7QUFBYixDQUFkO0FBQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBSixDQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixDQUFmOzsyQ0FDZ0IsUTs7OztBQUFoQixzREFBMEI7QUFBQSxRQUFqQixHQUFpQjtBQUN4QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLEdBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFFQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsWUFBekMsQ0FBc0QsY0FBdEQsQ0FBYjtBQUFBLElBQ0ksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULHdCQUF1QyxNQUF2QyxPQURkOztBQUdBLElBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGFBQXJCLENBQWIsRUFBa0Q7QUFDOUMsRUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixhQUF0QjtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogaGVhZGVyICovXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcclxuXHJcblxyXG5pZiAoYnVyZ2VyKSB7XHJcbiAgYnVyZ2VyT3V0c2lkZUNsaWNrKCk7XHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTWVudSk7XHJcbn07XHJcblxyXG5pZiAobGlua0Nsb3NlLmxlbmd0aCkge1xyXG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcclxuICAgIGxpbmtDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KGUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIGlmKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlcl9hY3RpdmUnKSkge1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9maW5pc2gnKTtcclxuICAgIH1cclxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keV9sb2NrXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9maW5pc2gnKTtcclxuICBtZW51Qm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1cmdlck91dHNpZGVDbGljaygpIHtcclxuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSlcclxufVxyXG5cclxuLyogcG9wVXAgKi9cclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbmNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XHJcbmNvbnN0IGJ0bk9wZW5Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXBvcHVwJyk7XHJcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcclxuXHJcblxyXG5pZiAoYnRuT3BlblBvcFVwKSB7XHJcbiAgYnRuT3BlblBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wVXApO1xyXG59O1xyXG5cclxuaWYgKGJ0bkNsb3NlUG9wVXApIHtcclxuICBidG5DbG9zZVBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XHJcbn1cclxuXHJcbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xyXG5cclxuY29uc3QgdGFic0J0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX25hdi1idG4nKTtcclxuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcclxuXHJcbnRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBjdXJyZW50QnRuID0gaXRlbTtcclxuICAgICAgICBsZXQgdGFiSWQgPSBjdXJyZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKTtcclxuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xyXG5cclxuICAgICAgICBpZiggISBjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYnRuX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWJzSXRlbS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFN3aXBlcjpcclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lTbGlkZXJzT25SZXNpemUoc2VsZWN0b3IsIHdpZHRoLCBvYmosIG1vcmVUaGFuKSB7XHJcbiAgY29uc3QgaW5pdCA9IHtcclxuICAgIC4uLm9iaixcclxuICB9O1xyXG5cclxuICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgY29uc3Qgc2xpZGVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZWVkZWRXaWR0aCA9IG1vcmVUaGFuID8gd2luLmlubmVyV2lkdGggPj0gd2lkdGggOiB3aW4uaW5uZXJXaWR0aCA8PSB3aWR0aFxyXG4gICAgaWYgKG5lZWRlZFdpZHRoKSB7XHJcbiAgICAgIGlmICghc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgICAgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgIHN3aXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgW1wibG9hZFwiLCBcInJlc2l6ZVwiXS5mb3JFYWNoKChldnQpID0+XHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldnQsIHRvZ2dsZUluaXQsIGZhbHNlKVxyXG4gICk7XHJcbn1cclxuXHJcbmRlc3Ryb3lTbGlkZXJzT25SZXNpemUoXCIucmV2aWV3cy1zbGlkZXJcIiwgOTk5OTksIHtcclxuICBzcGFjZUJldHdlZW46IDIwLFxyXG4gIHNwZWVkOiA4MDAsXHJcbiAgYXV0b0hlaWdodDogdHJ1ZSxcclxuXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qIHJldmlld3Mgb3BlbmVyICovXHJcblxyXG5jb25zdCByZXZpZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHQtd3JhcFwiKTtcclxuXHJcbnJldmlld3NCbG9jay5mb3JFYWNoKGZ1bmN0aW9uKHJldmlldyl7XHJcbiAgY29uc3QgYnRuT3BlbiA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LW9wZW4nKTtcclxuICBjb25zdCBidG5DbG9zZSA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LWNsb3NlJyk7XHJcblxyXG4gIGlmKGJ0bk9wZW4pe1xyXG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX3Jldmlld1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfcmV2aWV3XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vKiBjYXN0b20gYW5pbSAqL1xyXG5cclxuZnVuY3Rpb24gb25FbnRyeShlbnRyeSkge1xyXG4gIGVudHJ5LmZvckVhY2goY2hhbmdlID0+IHtcclxuICAgIGlmIChjaGFuZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgY2hhbmdlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXNob3cnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5sZXQgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiBbMC41XSB9O1xyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25FbnRyeSwgb3B0aW9ucyk7XHJcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGVtZW50LWFuaW1hdGlvbicpO1xyXG5mb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICBvYnNlcnZlci5vYnNlcnZlKGVsbSk7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBsaW5rIHBhZ2UgKi9cclxuXHJcbmxldCBwYWdlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQtcGFnZV1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wYWdlXCIpLFxyXG4gICAgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkLW5hdj0ke3BhZ2VJZH1dYCk7XHJcblxyXG5pZihwYWdlSWQgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLW5hdlwiKSkge1xyXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpbmtcIik7XHJcbn0iXX0=
