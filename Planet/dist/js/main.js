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


var menuItem = document.querySelector(".menu-item");

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    var targetElement = e.target;

    if (window.innerWidth < 1024) {
      if (targetElement.classList.contains('arrows')) {
        targetElement.closest('.menu-item').classList.toggle('menu-item_active');
      }
    }
  }
};

var secLinkClose = document.querySelectorAll(".sec-link-close");

if (secLinkClose.length) {
  for (var i = 0; i < secLinkClose.length; ++i) {
    secLinkClose[i].addEventListener("click", function (e) {
      menuItem.classList.remove("menu-item_active");
    });
  }
}

;

},{"./constants/link.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29uc3RhbnRzL2xpbmsuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxHQUN2QixNQUFNLENBQUMsUUFBUCxDQUFnQixNQURPLEdBRXZCLDhDQUZHOztBQUlBLElBQU0sZUFBZSxhQUFNLFdBQU4sWUFBckI7O0FBQ0EsSUFBTSx1QkFBdUIsYUFBTSxXQUFOLGFBQTdCOzs7Ozs7QUNMUDs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixhQUExQixDQUFsQjs7QUFHQSxJQUFJLE1BQUosRUFBWTtBQUNWLEVBQUEsa0JBQWtCO0FBQ2xCLEVBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0FBQ0Q7O0FBQUE7O0FBRUQsSUFBSSxTQUFTLENBQUMsTUFBZCxFQUFzQjtBQUNwQixPQUFJLElBQUksQ0FBQyxHQUFFLENBQVgsRUFBYSxDQUFDLEdBQUMsU0FBUyxDQUFDLE1BQXpCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBb0M7QUFDbEMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDtBQUNGOztBQUFBOztBQUVELFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQjtBQUNuQixFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixXQUEvQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxT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QixJQUF4QixFQUE4QjtBQUMxQixVQUFJLGFBQWEsQ0FBQyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLFFBQWpDLENBQUosRUFBZ0Q7QUFDNUMsUUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixZQUF0QixFQUFvQyxTQUFwQyxDQUE4QyxNQUE5QyxDQUFxRCxrQkFBckQ7QUFDSDtBQUNKO0FBQ0o7QUFDRixDQVhEOztBQWFBLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBckI7O0FBRUEsSUFBSSxZQUFZLENBQUMsTUFBakIsRUFBeUI7QUFDdkIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFlBQVksQ0FBQyxNQUE1QixFQUFtQyxFQUFFLENBQXJDLEVBQXVDO0FBQ3JDLElBQUEsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBVSxDQUFWLEVBQWE7QUFDckQsTUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixrQkFBMUI7QUFDRCxLQUZEO0FBR0Q7QUFDRjs7QUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBQTEFORVRfSE9TVCA9IHdpbmRvdy5ERVZFTE9QTUVOVF9NT0RFXHJcbiAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgOiBcImh0dHBzOi8vcGxhbmV0YWVtYWlsc2VuZGVyLmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UID0gYCR7UExBTkVUX0hPU1R9L3Jlc3VsdGA7XHJcbmV4cG9ydCBjb25zdCBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCA9IGAke1BMQU5FVF9IT1NUfS9jb250YWN0YDtcclxuIiwiaW1wb3J0IHsgUExBTkVUX0VORFBPSU5UX0NPTlRBQ1QgfSBmcm9tICcuL2NvbnN0YW50cy9saW5rLmpzJztcclxuXHJcbi8qIGhlYWRlciAqL1xyXG5cclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbmNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBsaW5rQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstY2xvc2VcIik7XHJcblxyXG5cclxuaWYgKGJ1cmdlcikge1xyXG4gIGJ1cmdlck91dHNpZGVDbGljaygpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xyXG59O1xyXG5cclxuaWYgKGxpbmtDbG9zZS5sZW5ndGgpIHtcclxuICBmb3IodmFyIGkgPTA7aTxsaW5rQ2xvc2UubGVuZ3RoOysraSl7XHJcbiAgICBsaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudShlKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYm9keV9sb2NrXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBpZihidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXJfYWN0aXZlJykpIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9maW5pc2gnKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfYWN0aXZlJyk7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfZmluaXNoJyk7XHJcbiAgICB9XHJcbiAgbWVudUJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoZSkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXJfYWN0aXZlXCIpO1xyXG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XHJcbiAgbWVudUJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJPdXRzaWRlQ2xpY2soKSB7XHJcbiAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXHJcbn1cclxuXHJcbi8qIHBvcFVwICovXHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xyXG5jb25zdCBidG5PcGVuUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wb3B1cCcpO1xyXG5jb25zdCBidG5DbG9zZVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJyk7XHJcblxyXG5cclxuaWYgKGJ0bk9wZW5Qb3BVcCkge1xyXG4gIGJ0bk9wZW5Qb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBvcFVwKTtcclxufTtcclxuXHJcbmlmIChidG5DbG9zZVBvcFVwKSB7XHJcbiAgYnRuQ2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wVXAgKGUpe1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwb3BVcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlfbG9ja1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3BVcChlKSB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keV9sb2NrXCIpO1xyXG59XHJcblxyXG4vKiBuYXZtZW51IHNlcnZpY2UgcGFnZXMgKi9cclxuXHJcbmNvbnN0IHRhYnNCdG4gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9uYXYtYnRuJyk7XHJcbmNvbnN0IHRhYnNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9saXN0Jyk7XHJcblxyXG50YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XHJcbiAgICAgICAgbGV0IHRhYklkID0gY3VycmVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYklkKTtcclxuXHJcbiAgICAgICAgaWYoICEgY3VycmVudEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bl9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB0YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZCgnbGlzdF9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBTd2lwZXI6XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95U2xpZGVyc09uUmVzaXplKHNlbGVjdG9yLCB3aWR0aCwgb2JqLCBtb3JlVGhhbikge1xyXG4gIGNvbnN0IGluaXQgPSB7XHJcbiAgICAuLi5vYmosXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gIGNvbnN0IHNsaWRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG4gIGlmKCFzbGlkZXJTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZWVkZWRXaWR0aCA9IG1vcmVUaGFuID8gd2luLmlubmVyV2lkdGggPj0gd2lkdGggOiB3aW4uaW5uZXJXaWR0aCA8PSB3aWR0aFxyXG4gICAgaWYgKG5lZWRlZFdpZHRoKSB7XHJcbiAgICAgIGlmICghc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgICAgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgIHN3aXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgW1wibG9hZFwiLCBcInJlc2l6ZVwiXS5mb3JFYWNoKChldnQpID0+XHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldnQsIHRvZ2dsZUluaXQsIGZhbHNlKVxyXG4gICk7XHJcbn1cclxuXHJcbmRlc3Ryb3lTbGlkZXJzT25SZXNpemUoXCIucmV2aWV3cy1zbGlkZXJcIiwgOTk5OTksIHtcclxuICBzcGFjZUJldHdlZW46IDIwLFxyXG4gIHNwZWVkOiA4MDAsXHJcbiAgYXV0b0hlaWdodDogdHJ1ZSxcclxuXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qIHJldmlld3Mgb3BlbmVyICovXHJcblxyXG5jb25zdCByZXZpZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHQtd3JhcFwiKTtcclxuXHJcbnJldmlld3NCbG9jay5mb3JFYWNoKGZ1bmN0aW9uKHJldmlldyl7XHJcbiAgY29uc3QgYnRuT3BlbiA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LW9wZW4nKTtcclxuICBjb25zdCBidG5DbG9zZSA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LWNsb3NlJyk7XHJcblxyXG4gIGlmKGJ0bk9wZW4pe1xyXG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX3Jldmlld1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfcmV2aWV3XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vKiBjYXN0b20gYW5pbSAqL1xyXG5cclxuZnVuY3Rpb24gb25FbnRyeShlbnRyeSkge1xyXG4gIGVudHJ5LmZvckVhY2goY2hhbmdlID0+IHtcclxuICAgIGlmIChjaGFuZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgY2hhbmdlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXNob3cnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5sZXQgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiBbMC41XSB9O1xyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25FbnRyeSwgb3B0aW9ucyk7XHJcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGVtZW50LWFuaW1hdGlvbicpO1xyXG5mb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICBvYnNlcnZlci5vYnNlcnZlKGVsbSk7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBsaW5rIHBhZ2UgKi9cclxuXHJcbmxldCBwYWdlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQtcGFnZV1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wYWdlXCIpLFxyXG4gICAgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkLW5hdj0ke3BhZ2VJZH1dYCk7XHJcblxyXG5pZihwYWdlSWQgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLW5hdlwiKSkge1xyXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpbmtcIik7XHJcbn1cclxuXHJcbi8qIGNvbnRhY3QgZm9ybSAqL1xyXG5pbml0Q29udGFjdEZvcm0oKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwXCIpO1xyXG4gIFxyXG4gIGlmICghZm9ybVdyYXApIHJldHVybjtcclxuICBcclxuICBjb25zdCBmb3JtID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Rm9ybVwiKTtcclxuICBjb25zdCBzdWNjZXNzTXNnQmxvY2sgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tc2cnKTtcclxuICBjb25zdCBmb3JtQ29udGVudCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuICBjb25zdCBFTUFJTF9SRUdFWCA9IC9bXkAgXFx0XFxyXFxuXStAW15AIFxcdFxcclxcbl0rXFwuW15AIFxcdFxcclxcbl0rLztcclxuICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVwiKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgZW1haWxFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG5cclxuICAgIGZldGNoKFBMQU5FVF9FTkRQT0lOVF9DT05UQUNULCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgc3VjY2Vzc01zZ0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgZm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZW5kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgZmlyc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZmlyc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImVtYWlsSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlIFwiZmlyc3ROYW1lSW5wdXRcIjpcclxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgIGZpcnN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsYXN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW1haWxJbnB1dFwiOlxyXG4gICAgICAgIGlmKCFFTUFJTF9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgZW1haWxFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIHNlcnZpY2VzIG1lbnUgbG9naWMgKi9cclxuXHJcbmNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWl0ZW1cIik7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xyXG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3dzJykpIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5tZW51LWl0ZW0nKS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWNMaW5rQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlYy1saW5rLWNsb3NlXCIpO1xyXG5cclxuaWYgKHNlY0xpbmtDbG9zZS5sZW5ndGgpIHtcclxuICBmb3IodmFyIGkgPTA7aTxzZWNMaW5rQ2xvc2UubGVuZ3RoOysraSl7XHJcbiAgICBzZWNMaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWl0ZW1fYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=
