(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLANET_ENDPOINT_CONTACT = exports.PLANET_ENDPOINT = exports.PLANET_HOST = void 0;
var PLANET_HOST = window.DEVELOPMENT_MODE ? window.location.origin : "https://planetaemailsender.azurewebsites.net";
exports.PLANET_HOST = PLANET_HOST;
var PLANET_ENDPOINT = "".concat(PLANET_HOST, "/result");
exports.PLANET_ENDPOINT = PLANET_ENDPOINT;
var PLANET_ENDPOINT_CONTACT = "".concat(PLANET_HOST, "/contact");
exports.PLANET_ENDPOINT_CONTACT = PLANET_ENDPOINT_CONTACT;

},{}],2:[function(require,module,exports){
"use strict";

var _link = require("./constants/link.js");

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
  if (!sliderSelector) return;
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
/* contact form */


initContactForm();

function initContactForm() {
  var formWrap = document.querySelector(".form-wrap");
  if (!formWrap) return;
  var form = formWrap.querySelector("#contactForm");
  var successMsgBlock = formWrap.querySelector('.success-msg');
  var formContent = formWrap.querySelector('.form-content');
  var EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var firstNameInput = form.querySelector("#firstName");
  var lastNameInput = form.querySelector("#lastName");
  var emailInput = form.querySelector("#email");
  var messageInput = form.querySelector("#message");
  var firstNameErrorEl = form.querySelector("#firstNameError");
  var lastNameErrorEl = form.querySelector("#lastNameError");
  var emailErrorEl = form.querySelector("#emailError");
  var fetchErrorEl = formWrap.querySelector('.fetch-error');
  var spinner = document.querySelector('.spinnerWrap');
  var isFormValid = false;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm("firstNameInput", firstNameInput.value);
    validateForm("lastNameInput", lastNameInput.value);
    validateForm("emailInput", emailInput.value);
    if (!isFormValid) return;
    fetchErrorEl.classList.remove('active');
    var request = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
    spinner.classList.remove('d-none');
    fetch(_link.PLANET_ENDPOINT_CONTACT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(request)
    }).then(function (res) {
      if (res.ok) {
        successMsgBlock.classList.add('active');
        formContent.classList.add('d-none');
        spinner.classList.add('d-none');
        formWrap.classList.add('form-send');
      } else {
        fetchErrorEl.classList.add('active');
      }
    }).catch(function (error) {
      console.log("error: ", error);
      fetchErrorEl.classList.add('active');
    }).finally(function () {
      spinner.classList.add('d-none');
    });
  });
  firstNameInput.addEventListener("input", function (event) {
    validateForm("firstNameInput", event.target.value);
  });
  lastNameInput.addEventListener("input", function (event) {
    validateForm("lastNameInput", event.target.value);
  });
  emailInput.addEventListener("input", function (event) {
    validateForm("emailInput", event.target.value);
  });

  function validateForm(field, value) {
    switch (field) {
      case "firstNameInput":
        if (value < 1) {
          firstNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        firstNameErrorEl.classList.remove("active");
        break;

      case "lastNameInput":
        if (value < 1) {
          lastNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        lastNameErrorEl.classList.remove("active");
        break;

      case "emailInput":
        if (!EMAIL_REGEX.test(value)) {
          emailErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        emailErrorEl.classList.remove("active");
        break;
    }
  }
}
/* services menu logic */


initServiceMenu();

function initServiceMenu() {
  var menuItem = document.querySelectorAll(".menu-item");
  document.addEventListener("click", function (event) {
    var targetElement = event.target;

    if (targetElement.classList.contains('arrows')) {
      targetElement.closest('.menu-item').classList.toggle('menu-item_active');
    } else {
      menuItem.forEach(function (el) {
        el.classList.remove('menu-item_active');
      });
    }

    ;
  });
}
/* Sticky */


initStickyMenu();

function initStickyMenu() {
  var menuEl = document.querySelector('.menu-sec');
  if (!menuEl) return;
  var originMenuTop = menuEl.offsetParent.offsetTop;
  document.addEventListener('scroll', function () {
    if (window.scrollY > originMenuTop) {
      menuEl.classList.add('fixed');
    } else {
      menuEl.classList.remove('fixed');
    }

    ;
  });
}

},{"./constants/link.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29uc3RhbnRzL2xpbmsuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxHQUN2QixNQUFNLENBQUMsUUFBUCxDQUFnQixNQURPLEdBRXZCLDhDQUZHOztBQUlBLElBQU0sZUFBZSxhQUFNLFdBQU4sWUFBckI7O0FBQ0EsSUFBTSx1QkFBdUIsYUFBTSxXQUFOLGFBQTdCOzs7Ozs7QUNMUDs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixhQUExQixDQUFsQjs7QUFHQSxJQUFJLE1BQUosRUFBWTtBQUNWLEVBQUEsa0JBQWtCO0FBQ2xCLEVBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0FBQ0Q7O0FBQUE7O0FBRUQsSUFBSSxTQUFTLENBQUMsTUFBZCxFQUFzQjtBQUNwQixPQUFJLElBQUksQ0FBQyxHQUFFLENBQVgsRUFBYSxDQUFDLEdBQUMsU0FBUyxDQUFDLE1BQXpCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBb0M7QUFDbEMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDtBQUNGOztBQUFBOztBQUVELFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQjtBQUNuQixFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixXQUEvQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxT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LEVBQWdEO0FBQzlDLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsU0FBcEMsQ0FBOEMsTUFBOUMsQ0FBcUQsa0JBQXJEO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFDLEVBQUQsRUFBUTtBQUN2QixRQUFBLEVBQUUsQ0FBQyxTQUFILENBQWEsTUFBYixDQUFvQixrQkFBcEI7QUFDRCxPQUZEO0FBR0Q7O0FBQUE7QUFDRixHQVZEO0FBV0Q7QUFFRDs7O0FBQ0EsY0FBYzs7QUFFZCxTQUFTLGNBQVQsR0FBMEI7QUFDeEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUVBLE1BQUcsQ0FBQyxNQUFKLEVBQVk7QUFFWixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBUCxDQUFvQixTQUExQztBQUVBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDeEMsUUFBRyxNQUFNLENBQUMsT0FBUCxHQUFpQixhQUFwQixFQUFtQztBQUNqQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixPQUF4QjtBQUNEOztBQUFBO0FBQ0YsR0FORDtBQU9EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IFBMQU5FVF9IT1NUID0gd2luZG93LkRFVkVMT1BNRU5UX01PREVcbiAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gIDogXCJodHRwczovL3BsYW5ldGFlbWFpbHNlbmRlci5henVyZXdlYnNpdGVzLm5ldFwiO1xuXG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UID0gYCR7UExBTkVUX0hPU1R9L3Jlc3VsdGA7XG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UX0NPTlRBQ1QgPSBgJHtQTEFORVRfSE9TVH0vY29udGFjdGA7XG4iLCJpbXBvcnQgeyBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCB9IGZyb20gJy4vY29uc3RhbnRzL2xpbmsuanMnO1xuXG4vKiBoZWFkZXIgKi9cblxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XG5jb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcblxuXG5pZiAoYnVyZ2VyKSB7XG4gIGJ1cmdlck91dHNpZGVDbGljaygpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcbn07XG5cbmlmIChsaW5rQ2xvc2UubGVuZ3RoKSB7XG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcbiAgICBsaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcbiAgfVxufTtcblxuZnVuY3Rpb24gb3Blbk1lbnUoZSkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgaWYoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyX2FjdGl2ZScpKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfZmluaXNoJyk7XG4gICAgfVxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XG4gIG1lbnVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X2FjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gYnVyZ2VyT3V0c2lkZUNsaWNrKCkge1xuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXG59XG5cbi8qIHBvcFVwICovXG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xuY29uc3QgYnRuT3BlblBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcG9wdXAnKTtcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcblxuXG5pZiAoYnRuT3BlblBvcFVwKSB7XG4gIGJ0bk9wZW5Qb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBvcFVwKTtcbn07XG5cbmlmIChidG5DbG9zZVBvcFVwKSB7XG4gIGJ0bkNsb3NlUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXApO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcbn07XG5cbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XG59XG5cbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xuXG5jb25zdCB0YWJzQnRuICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfbmF2LWJ0bicpO1xuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcblxudGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xuXG4gICAgICAgIGlmKCAhIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG5fYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdidG5fYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gU3dpcGVyOlxuXG5mdW5jdGlvbiBkZXN0cm95U2xpZGVyc09uUmVzaXplKHNlbGVjdG9yLCB3aWR0aCwgb2JqLCBtb3JlVGhhbikge1xuICBjb25zdCBpbml0ID0ge1xuICAgIC4uLm9iaixcbiAgfTtcblxuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIGNvbnN0IHNsaWRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgaWYoIXNsaWRlclNlbGVjdG9yKSByZXR1cm47XG5cbiAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xuXG4gIGNvbnN0IHRvZ2dsZUluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmVlZGVkV2lkdGggPSBtb3JlVGhhbiA/IHdpbi5pbm5lcldpZHRoID49IHdpZHRoIDogd2luLmlubmVyV2lkdGggPD0gd2lkdGhcbiAgICBpZiAobmVlZGVkV2lkdGgpIHtcbiAgICAgIGlmICghc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgIHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICBzd2lwZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBbXCJsb2FkXCIsIFwicmVzaXplXCJdLmZvckVhY2goKGV2dCkgPT5cbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldnQsIHRvZ2dsZUluaXQsIGZhbHNlKVxuICApO1xufVxuXG5kZXN0cm95U2xpZGVyc09uUmVzaXplKFwiLnJldmlld3Mtc2xpZGVyXCIsIDk5OTk5LCB7XG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHNwZWVkOiA4MDAsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxufSk7XG5cbi8qIHJldmlld3Mgb3BlbmVyICovXG5cbmNvbnN0IHJldmlld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dC13cmFwXCIpO1xuXG5yZXZpZXdzQmxvY2suZm9yRWFjaChmdW5jdGlvbihyZXZpZXcpe1xuICBjb25zdCBidG5PcGVuID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtb3BlbicpO1xuICBjb25zdCBidG5DbG9zZSA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LWNsb3NlJyk7XG5cbiAgaWYoYnRuT3Blbil7XG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICByZXZpZXcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9yZXZpZXdcIik7XG4gICAgfSk7XG5cbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9yZXZpZXdcIik7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5uZXcgV09XKCkuaW5pdCgpO1xuXG4vKiBjYXN0b20gYW5pbSAqL1xuXG5mdW5jdGlvbiBvbkVudHJ5KGVudHJ5KSB7XG4gIGVudHJ5LmZvckVhY2goY2hhbmdlID0+IHtcbiAgICBpZiAoY2hhbmdlLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBjaGFuZ2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtc2hvdycpO1xuICAgIH1cbiAgfSk7XG59XG5sZXQgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiBbMC41XSB9O1xubGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9uRW50cnksIG9wdGlvbnMpO1xubGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsZW1lbnQtYW5pbWF0aW9uJyk7XG5mb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xufVxuXG4vKiBhY3RpdmUgbGluayBwYWdlICovXG5cbmxldCBwYWdlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQtcGFnZV1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wYWdlXCIpLFxuICAgIG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZC1uYXY9JHtwYWdlSWR9XWApO1xuXG5pZihwYWdlSWQgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLW5hdlwiKSkge1xuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xufVxuXG4vKiBjb250YWN0IGZvcm0gKi9cbmluaXRDb250YWN0Rm9ybSgpO1xuXG5mdW5jdGlvbiBpbml0Q29udGFjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm1XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBcIik7XG4gIFxuICBpZiAoIWZvcm1XcmFwKSByZXR1cm47XG4gIFxuICBjb25zdCBmb3JtID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Rm9ybVwiKTtcbiAgY29uc3Qgc3VjY2Vzc01zZ0Jsb2NrID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbXNnJyk7XG4gIGNvbnN0IGZvcm1Db250ZW50ID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGVudCcpO1xuICBjb25zdCBFTUFJTF9SRUdFWCA9IC9bXkAgXFx0XFxyXFxuXStAW15AIFxcdFxcclxcbl0rXFwuW15AIFxcdFxcclxcbl0rLztcbiAgY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lXCIpO1xuICBjb25zdCBsYXN0TmFtZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lXCIpO1xuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKTtcbiAgY29uc3QgZmlyc3ROYW1lRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVFcnJvclwiKTtcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XG4gIGNvbnN0IGVtYWlsRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNlbWFpbEVycm9yXCIpO1xuICBjb25zdCBmZXRjaEVycm9yRWwgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuZmV0Y2gtZXJyb3InKTtcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xuICBsZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFsaWRhdGVGb3JtKFwiZmlyc3ROYW1lSW5wdXRcIiwgZmlyc3ROYW1lSW5wdXQudmFsdWUpO1xuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgdmFsaWRhdGVGb3JtKFwiZW1haWxJbnB1dFwiLCBlbWFpbElucHV0LnZhbHVlKTtcblxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xuXG4gICAgZmV0Y2hFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lSW5wdXQudmFsdWUsXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGVtYWlsOiBlbWFpbElucHV0LnZhbHVlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZUlucHV0LnZhbHVlLFxuICAgIH1cblxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG5cbiAgICBmZXRjaChQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgc3VjY2Vzc01zZ0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGZvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvckVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgfSk7XG5cbiAgfSk7XG5cbiAgZmlyc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH0pO1xuICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH0pO1xuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgICBjYXNlIFwiZmlyc3ROYW1lSW5wdXRcIjpcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XG4gICAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsYXN0TmFtZUlucHV0XCI6XG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xuICAgICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZW1haWxJbnB1dFwiOlxuICAgICAgICBpZighRU1BSUxfUkVHRVgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZW1haWxFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG4vKiBzZXJ2aWNlcyBtZW51IGxvZ2ljICovXG5pbml0U2VydmljZU1lbnUoKTtcblxuZnVuY3Rpb24gaW5pdFNlcnZpY2VNZW51KCkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvd3MnKSkge1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcubWVudS1pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51SXRlbS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWl0ZW1fYWN0aXZlJyk7XG4gICAgICB9KVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiBTdGlja3kgKi9cbmluaXRTdGlja3lNZW51KCk7XG5cbmZ1bmN0aW9uIGluaXRTdGlja3lNZW51KCkge1xuICBjb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zZWMnKTtcbiAgXG4gIGlmKCFtZW51RWwpIHJldHVybjtcblxuICBjb25zdCBvcmlnaW5NZW51VG9wID0gbWVudUVsLm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPiBvcmlnaW5NZW51VG9wKSB7XG4gICAgICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4gICAgfTtcbiAgfSlcbn0iXX0=
