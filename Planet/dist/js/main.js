(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLANET_ENDPOINT_COURSE = exports.PLANET_ENDPOINT_CONTACT = exports.PLANET_ENDPOINT = exports.PLANET_HOST = void 0;
var PLANET_HOST = window.DEVELOPMENT_MODE ? window.location.origin : "https://planetaemailsender.azurewebsites.net";
exports.PLANET_HOST = PLANET_HOST;
var PLANET_ENDPOINT = "".concat(PLANET_HOST, "/result");
exports.PLANET_ENDPOINT = PLANET_ENDPOINT;
var PLANET_ENDPOINT_CONTACT = "".concat(PLANET_HOST, "/contact");
exports.PLANET_ENDPOINT_CONTACT = PLANET_ENDPOINT_CONTACT;
var PLANET_ENDPOINT_COURSE = "".concat(PLANET_HOST, "/course");
exports.PLANET_ENDPOINT_COURSE = PLANET_ENDPOINT_COURSE;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_REGEX = exports.PHONE_REGEX = void 0;
var PHONE_REGEX = /(\(\d{3}\)) \d{3} \d{2} \d{2}/;
exports.PHONE_REGEX = PHONE_REGEX;
var EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
exports.EMAIL_REGEX = EMAIL_REGEX;

},{}],3:[function(require,module,exports){
"use strict";

var _link = require("./constants/link.js");

var _regex = require("./constants/regex.js");

var _general = require("./utils/general.js");

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
  if (!form) return;
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
/* contact form */


initCourseForm();

function initCourseForm() {
  var formWrap = document.querySelector(".form-wrap");
  if (!formWrap) return;
  var form = formWrap.querySelector("#courseForm");
  if (!form) return;
  var successMsgBlock = formWrap.querySelector('.success-msg');
  var formContent = formWrap.querySelector('.form-content');
  var firstNameInput = form.querySelector("#firstName");
  var lastNameInput = form.querySelector("#lastName");
  var emailInput = form.querySelector("#email");
  var phoneInput = form.querySelector("#phone");
  var firstNameErrorEl = form.querySelector("#firstNameError");
  var lastNameErrorEl = form.querySelector("#lastNameError");
  var phoneErrorEl = form.querySelector("#phoneError");
  var fetchErrorEl = formWrap.querySelector('.fetch-error');
  var spinner = document.querySelector('.spinnerWrap');
  var isFormValid = false;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm("firstNameInput", firstNameInput.value);
    validateForm("lastNameInput", lastNameInput.value);
    validateForm("emailInput", emailInput.value);
    validateForm("phoneInput", phoneInput.value);
    if (!isFormValid) return;
    fetchErrorEl.classList.remove('active');
    var request = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      phoneNumber: phoneInput.value
    };
    spinner.classList.remove('d-none');
    fetch(_link.PLANET_ENDPOINT_COURSE, {
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
  phoneInput.addEventListener("input", function (event) {
    validateForm("phoneInput", event.target.value);
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

      case "phoneInput":
        var phoneValue = value ? value.replace(/\D/g, "") : '';
        var maskedPhoneNumber = (0, _general.maskPhoneNumber)(phoneValue);
        phoneInput.value = maskedPhoneNumber;

        if (!_regex.PHONE_REGEX.test(maskedPhoneNumber)) {
          phoneErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        phoneErrorEl.classList.remove("active");
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
      closeOpenItems();
      targetElement.closest('.menu-item').classList.toggle('menu-item_active');
    } else {
      closeOpenItems();
    }

    ;
  });

  function closeOpenItems() {
    menuItem.forEach(function (el) {
      el.classList.remove('menu-item_active');
    });
  }
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

},{"./constants/link.js":1,"./constants/regex.js":2,"./utils/general.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskPhoneNumber = void 0;

var maskPhoneNumber = function maskPhoneNumber(phoneNumber) {
  var length = phoneNumber.length;

  if (length > 8) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3, 6), " ").concat(phoneNumber.slice(6, 8), " ").concat(phoneNumber.slice(8, 10));
  }

  if (length > 6) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3, 6), " ").concat(phoneNumber.slice(6));
  }

  if (length > 3) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3));
  }

  return phoneNumber;
};

exports.maskPhoneNumber = maskPhoneNumber;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29uc3RhbnRzL2xpbmsuanMiLCJzcmMvanMvY29uc3RhbnRzL3JlZ2V4LmpzIiwic3JjL2pzL21haW4uanMiLCJzcmMvanMvdXRpbHMvZ2VuZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxHQUN2QixNQUFNLENBQUMsUUFBUCxDQUFnQixNQURPLEdBRXZCLDhDQUZHOztBQUlBLElBQU0sZUFBZSxhQUFNLFdBQU4sWUFBckI7O0FBQ0EsSUFBTSx1QkFBdUIsYUFBTSxXQUFOLGFBQTdCOztBQUNBLElBQU0sc0JBQXNCLGFBQU0sV0FBTixZQUE1Qjs7Ozs7Ozs7OztBQ05BLElBQU0sV0FBVyxHQUFHLCtCQUFwQjs7QUFDQSxJQUFNLFdBQVcsR0FBRyx5Q0FBcEI7Ozs7OztBQ0RQOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO0FBQ0EsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCOztBQUdBLElBQUksTUFBSixFQUFZO0FBQ1YsRUFBQSxrQkFBa0I7QUFDbEIsRUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsUUFBakM7QUFDRDs7QUFBQTs7QUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFkLEVBQXNCO0FBQ3BCLE9BQUksSUFBSSxDQUFDLEdBQUUsQ0FBWCxFQUFhLENBQUMsR0FBQyxTQUFTLENBQUMsTUFBekIsRUFBZ0MsRUFBRSxDQUFsQyxFQUFvQztBQUNsQyxJQUFBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYSxnQkFBYixD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QyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQVgsZUFBdUMsV0FBVyxDQUFDLEtBQVosQ0FDckMsQ0FEcUMsRUFFckMsQ0FGcUMsQ0FBdkMsY0FHSyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUhMLGNBR2dDLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBSGhDO0FBSUQ7O0FBRUQsTUFBSSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLHNCQUFXLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQVgsZUFBdUMsV0FBVyxDQUFDLEtBQVosQ0FDckMsQ0FEcUMsRUFFckMsQ0FGcUMsQ0FBdkMsY0FHSyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixDQUhMO0FBSUQ7O0FBRUQsTUFBSSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLHNCQUFXLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQVgsZUFBdUMsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBdkM7QUFDRDs7QUFFRCxTQUFPLFdBQVA7QUFDRCxDQXRCTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBQTEFORVRfSE9TVCA9IHdpbmRvdy5ERVZFTE9QTUVOVF9NT0RFXHJcbiAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgOiBcImh0dHBzOi8vcGxhbmV0YWVtYWlsc2VuZGVyLmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UID0gYCR7UExBTkVUX0hPU1R9L3Jlc3VsdGA7XHJcbmV4cG9ydCBjb25zdCBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCA9IGAke1BMQU5FVF9IT1NUfS9jb250YWN0YDtcclxuZXhwb3J0IGNvbnN0IFBMQU5FVF9FTkRQT0lOVF9DT1VSU0UgPSBgJHtQTEFORVRfSE9TVH0vY291cnNlYDtcclxuIiwiZXhwb3J0IGNvbnN0IFBIT05FX1JFR0VYID0gLyhcXChcXGR7M31cXCkpIFxcZHszfSBcXGR7Mn0gXFxkezJ9LztcclxuZXhwb3J0IGNvbnN0IEVNQUlMX1JFR0VYID0gL1teQCBcXHRcXHJcXG5dK0BbXkAgXFx0XFxyXFxuXStcXC5bXkAgXFx0XFxyXFxuXSsvO1xyXG4iLCJpbXBvcnQgeyBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCwgUExBTkVUX0VORFBPSU5UX0NPVVJTRSB9IGZyb20gJy4vY29uc3RhbnRzL2xpbmsuanMnO1xyXG5pbXBvcnQgeyBQSE9ORV9SRUdFWCB9IGZyb20gJy4vY29uc3RhbnRzL3JlZ2V4LmpzJztcclxuaW1wb3J0IHsgbWFza1Bob25lTnVtYmVyIH0gZnJvbSAnLi91dGlscy9nZW5lcmFsLmpzJztcclxuXHJcbi8qIGhlYWRlciAqL1xyXG5cclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbmNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBsaW5rQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstY2xvc2VcIik7XHJcblxyXG5cclxuaWYgKGJ1cmdlcikge1xyXG4gIGJ1cmdlck91dHNpZGVDbGljaygpO1xyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xyXG59O1xyXG5cclxuaWYgKGxpbmtDbG9zZS5sZW5ndGgpIHtcclxuICBmb3IodmFyIGkgPTA7aTxsaW5rQ2xvc2UubGVuZ3RoOysraSl7XHJcbiAgICBsaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudShlKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYm9keV9sb2NrXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBpZihidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXJfYWN0aXZlJykpIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9maW5pc2gnKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfYWN0aXZlJyk7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfZmluaXNoJyk7XHJcbiAgICB9XHJcbiAgbWVudUJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoZSkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXJfYWN0aXZlXCIpO1xyXG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XHJcbiAgbWVudUJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXJnZXJPdXRzaWRlQ2xpY2soKSB7XHJcbiAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXHJcbn1cclxuXHJcbi8qIHBvcFVwICovXHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xyXG5jb25zdCBidG5PcGVuUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wb3B1cCcpO1xyXG5jb25zdCBidG5DbG9zZVBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJyk7XHJcblxyXG5cclxuaWYgKGJ0bk9wZW5Qb3BVcCkge1xyXG4gIGJ0bk9wZW5Qb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBvcFVwKTtcclxufTtcclxuXHJcbmlmIChidG5DbG9zZVBvcFVwKSB7XHJcbiAgYnRuQ2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wVXAgKGUpe1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwb3BVcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlfbG9ja1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3BVcChlKSB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keV9sb2NrXCIpO1xyXG59XHJcblxyXG4vKiBuYXZtZW51IHNlcnZpY2UgcGFnZXMgKi9cclxuXHJcbmNvbnN0IHRhYnNCdG4gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9uYXYtYnRuJyk7XHJcbmNvbnN0IHRhYnNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9saXN0Jyk7XHJcblxyXG50YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XHJcbiAgICAgICAgbGV0IHRhYklkID0gY3VycmVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYklkKTtcclxuXHJcbiAgICAgICAgaWYoICEgY3VycmVudEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bl9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB0YWJzQnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZCgnbGlzdF9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBTd2lwZXI6XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95U2xpZGVyc09uUmVzaXplKHNlbGVjdG9yLCB3aWR0aCwgb2JqLCBtb3JlVGhhbikge1xyXG4gIGNvbnN0IGluaXQgPSB7XHJcbiAgICAuLi5vYmosXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gIGNvbnN0IHNsaWRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG4gIGlmKCFzbGlkZXJTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZWVkZWRXaWR0aCA9IG1vcmVUaGFuID8gd2luLmlubmVyV2lkdGggPj0gd2lkdGggOiB3aW4uaW5uZXJXaWR0aCA8PSB3aWR0aFxyXG4gICAgaWYgKG5lZWRlZFdpZHRoKSB7XHJcbiAgICAgIGlmICghc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgICAgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3RvciwgaW5pdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgIHN3aXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgW1wibG9hZFwiLCBcInJlc2l6ZVwiXS5mb3JFYWNoKChldnQpID0+XHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldnQsIHRvZ2dsZUluaXQsIGZhbHNlKVxyXG4gICk7XHJcbn1cclxuXHJcbmRlc3Ryb3lTbGlkZXJzT25SZXNpemUoXCIucmV2aWV3cy1zbGlkZXJcIiwgOTk5OTksIHtcclxuICBzcGFjZUJldHdlZW46IDIwLFxyXG4gIHNwZWVkOiA4MDAsXHJcbiAgYXV0b0hlaWdodDogdHJ1ZSxcclxuXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTtcclxuXHJcbi8qIHJldmlld3Mgb3BlbmVyICovXHJcblxyXG5jb25zdCByZXZpZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHQtd3JhcFwiKTtcclxuXHJcbnJldmlld3NCbG9jay5mb3JFYWNoKGZ1bmN0aW9uKHJldmlldyl7XHJcbiAgY29uc3QgYnRuT3BlbiA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LW9wZW4nKTtcclxuICBjb25zdCBidG5DbG9zZSA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LWNsb3NlJyk7XHJcblxyXG4gIGlmKGJ0bk9wZW4pe1xyXG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX3Jldmlld1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfcmV2aWV3XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vKiBjYXN0b20gYW5pbSAqL1xyXG5cclxuZnVuY3Rpb24gb25FbnRyeShlbnRyeSkge1xyXG4gIGVudHJ5LmZvckVhY2goY2hhbmdlID0+IHtcclxuICAgIGlmIChjaGFuZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgY2hhbmdlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXNob3cnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5sZXQgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiBbMC41XSB9O1xyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25FbnRyeSwgb3B0aW9ucyk7XHJcbmxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGVtZW50LWFuaW1hdGlvbicpO1xyXG5mb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcclxuICBvYnNlcnZlci5vYnNlcnZlKGVsbSk7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBsaW5rIHBhZ2UgKi9cclxuXHJcbmxldCBwYWdlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQtcGFnZV1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wYWdlXCIpLFxyXG4gICAgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkLW5hdj0ke3BhZ2VJZH1dYCk7XHJcblxyXG5pZihwYWdlSWQgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLW5hdlwiKSkge1xyXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpbmtcIik7XHJcbn1cclxuXHJcbi8qIGNvbnRhY3QgZm9ybSAqL1xyXG5pbml0Q29udGFjdEZvcm0oKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwXCIpO1xyXG4gIFxyXG4gIGlmICghZm9ybVdyYXApIHJldHVybjtcclxuICBcclxuICBjb25zdCBmb3JtID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Rm9ybVwiKTtcclxuXHJcbiAgaWYoIWZvcm0pIHJldHVybjtcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc01zZ0Jsb2NrID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbXNnJyk7XHJcbiAgY29uc3QgZm9ybUNvbnRlbnQgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcbiAgY29uc3QgRU1BSUxfUkVHRVggPSAvW15AIFxcdFxcclxcbl0rQFteQCBcXHRcXHJcXG5dK1xcLlteQCBcXHRcXHJcXG5dKy87XHJcbiAgY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lXCIpO1xyXG4gIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdE5hbWVcIik7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKTtcclxuICBjb25zdCBmaXJzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0TmFtZUVycm9yXCIpO1xyXG4gIGNvbnN0IGxhc3ROYW1lRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZUVycm9yXCIpO1xyXG4gIGNvbnN0IGVtYWlsRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNlbWFpbEVycm9yXCIpO1xyXG4gIGNvbnN0IGZldGNoRXJyb3JFbCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mZXRjaC1lcnJvcicpO1xyXG4gIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bpbm5lcldyYXAnKTtcclxuICBsZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJmaXJzdE5hbWVJbnB1dFwiLCBmaXJzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGxhc3ROYW1lSW5wdXQudmFsdWUpO1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZW1haWxJbnB1dFwiLCBlbWFpbElucHV0LnZhbHVlKTtcclxuXHJcbiAgICBpZighaXNGb3JtVmFsaWQpIHJldHVybjtcclxuXHJcbiAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbElucHV0LnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlSW5wdXQudmFsdWUsXHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuXHJcbiAgICBmZXRjaChQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHN1Y2Nlc3NNc2dCbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGZvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VuZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcclxuICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgbGFzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgdmFsdWUpIHtcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSBcImZpcnN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGFzdE5hbWVJbnB1dFwiOlxyXG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVtYWlsSW5wdXRcIjpcclxuICAgICAgICBpZighRU1BSUxfUkVHRVgudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgIGVtYWlsRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgZW1haWxFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjb250YWN0IGZvcm0gKi9cclxuaW5pdENvdXJzZUZvcm0oKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDb3Vyc2VGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm1XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBcIik7XHJcbiAgXHJcbiAgaWYgKCFmb3JtV3JhcCkgcmV0dXJuO1xyXG4gIFxyXG4gIGNvbnN0IGZvcm0gPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKFwiI2NvdXJzZUZvcm1cIik7XHJcblxyXG4gIGlmKCFmb3JtKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NNc2dCbG9jayA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1zZycpO1xyXG4gIGNvbnN0IGZvcm1Db250ZW50ID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGVudCcpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0TmFtZVwiKTtcclxuICBjb25zdCBsYXN0TmFtZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lXCIpO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XHJcbiAgY29uc3QgcGhvbmVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcclxuICBjb25zdCBmaXJzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0TmFtZUVycm9yXCIpO1xyXG4gIGNvbnN0IGxhc3ROYW1lRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZUVycm9yXCIpO1xyXG4gIGNvbnN0IHBob25lRXJyb3JFbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwaG9uZUVycm9yXCIpO1xyXG4gIGNvbnN0IGZldGNoRXJyb3JFbCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mZXRjaC1lcnJvcicpO1xyXG4gIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bpbm5lcldyYXAnKTtcclxuICBsZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJmaXJzdE5hbWVJbnB1dFwiLCBmaXJzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGxhc3ROYW1lSW5wdXQudmFsdWUpO1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZW1haWxJbnB1dFwiLCBlbWFpbElucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcInBob25lSW5wdXRcIiwgcGhvbmVJbnB1dC52YWx1ZSlcclxuXHJcbiAgICBpZighaXNGb3JtVmFsaWQpIHJldHVybjtcclxuXHJcbiAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbElucHV0LnZhbHVlLFxyXG4gICAgICBwaG9uZU51bWJlcjogcGhvbmVJbnB1dC52YWx1ZSxcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG5cclxuICAgIGZldGNoKFBMQU5FVF9FTkRQT0lOVF9DT1VSU0UsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICBzdWNjZXNzTXNnQmxvY2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICBmb3JtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICBmb3JtV3JhcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmV0Y2hFcnJvckVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgZmV0Y2hFcnJvckVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICBmaXJzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJmaXJzdE5hbWVJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwibGFzdE5hbWVJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwicGhvbmVJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZmllbGQsIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgIGNhc2UgXCJmaXJzdE5hbWVJbnB1dFwiOlxyXG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGZpcnN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxhc3ROYW1lSW5wdXRcIjpcclxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwaG9uZUlucHV0XCI6XHJcbiAgICAgICAgY29uc3QgcGhvbmVWYWx1ZSA9IHZhbHVlID8gdmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpIDogJyc7XHJcbiAgICAgICAgY29uc3QgbWFza2VkUGhvbmVOdW1iZXIgPSBtYXNrUGhvbmVOdW1iZXIocGhvbmVWYWx1ZSk7XHJcbiAgICAgICAgcGhvbmVJbnB1dC52YWx1ZSA9IG1hc2tlZFBob25lTnVtYmVyO1xyXG4gICAgICAgIGlmKCFQSE9ORV9SRUdFWC50ZXN0KG1hc2tlZFBob25lTnVtYmVyKSkge1xyXG4gICAgICAgICAgcGhvbmVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBwaG9uZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIHNlcnZpY2VzIG1lbnUgbG9naWMgKi9cclxuaW5pdFNlcnZpY2VNZW51KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U2VydmljZU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93cycpKSB7XHJcbiAgICAgIGNsb3NlT3Blbkl0ZW1zKCk7XHJcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLm1lbnUtaXRlbScpLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsb3NlT3Blbkl0ZW1zKCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZU9wZW5JdGVtcygpIHtcclxuICAgIG1lbnVJdGVtLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbV9hY3RpdmUnKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKiBTdGlja3kgKi9cclxuaW5pdFN0aWNreU1lbnUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGlja3lNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNlYycpO1xyXG4gIFxyXG4gIGlmKCFtZW51RWwpIHJldHVybjtcclxuXHJcbiAgY29uc3Qgb3JpZ2luTWVudVRvcCA9IG1lbnVFbC5vZmZzZXRQYXJlbnQub2Zmc2V0VG9wO1xyXG4gIFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gb3JpZ2luTWVudVRvcCkge1xyXG4gICAgICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lbnVFbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgfTtcclxuICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IG1hc2tQaG9uZU51bWJlciA9IChwaG9uZU51bWJlcikgPT4ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IHBob25lTnVtYmVyLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxlbmd0aCA+IDgpIHtcclxuICAgIHJldHVybiBgKCR7cGhvbmVOdW1iZXIuc2xpY2UoMCwgMyl9KSAke3Bob25lTnVtYmVyLnNsaWNlKFxyXG4gICAgICAzLFxyXG4gICAgICA2XHJcbiAgICApfSAke3Bob25lTnVtYmVyLnNsaWNlKDYsIDgpfSAke3Bob25lTnVtYmVyLnNsaWNlKDgsIDEwKX1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlbmd0aCA+IDYpIHtcclxuICAgIHJldHVybiBgKCR7cGhvbmVOdW1iZXIuc2xpY2UoMCwgMyl9KSAke3Bob25lTnVtYmVyLnNsaWNlKFxyXG4gICAgICAzLFxyXG4gICAgICA2XHJcbiAgICApfSAke3Bob25lTnVtYmVyLnNsaWNlKDYpfWA7XHJcbiAgfVxyXG5cclxuICBpZiAobGVuZ3RoID4gMykge1xyXG4gICAgcmV0dXJuIGAoJHtwaG9uZU51bWJlci5zbGljZSgwLCAzKX0pICR7cGhvbmVOdW1iZXIuc2xpY2UoMyl9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwaG9uZU51bWJlcjtcclxufTtcclxuIl19
