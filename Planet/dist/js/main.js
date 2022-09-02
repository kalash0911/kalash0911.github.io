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
  var form = formWrap.querySelector("#contactForm");
  if (!form && !formWrap) return;
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
    var payload = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
    console.log('payload: ', payload);
    spinner.classList.remove('d-none');
    setTimeout(function () {
      successMsgBlock.classList.add('active');
      formContent.classList.add('d-none');
      spinner.classList.add('d-none');
      formWrap.classList.add('form-send');
    }, 3000);
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7O0FBR0EsSUFBSSxNQUFKLEVBQVk7QUFDVixFQUFBLGtCQUFrQjtBQUNsQixFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNEOztBQUFBOztBQUVELElBQUksU0FBUyxDQUFDLE1BQWQsRUFBc0I7QUFDcEIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUF6QixFQUFnQyxFQUFFLENBQWxDLEVBQW9DO0FBQ2xDLElBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFNBQXZDO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCLENBQUgsRUFBK0M7QUFDM0MsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7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ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBoZWFkZXIgKi9cclxuXHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG5jb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuY29uc3QgbGlua0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rLWNsb3NlXCIpO1xyXG5cclxuXHJcbmlmIChidXJnZXIpIHtcclxuICBidXJnZXJPdXRzaWRlQ2xpY2soKTtcclxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcclxufTtcclxuXHJcbmlmIChsaW5rQ2xvc2UubGVuZ3RoKSB7XHJcbiAgZm9yKHZhciBpID0wO2k8bGlua0Nsb3NlLmxlbmd0aDsrK2kpe1xyXG4gICAgbGlua0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1lbnUpXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb3Blbk1lbnUoZSkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImJvZHlfbG9ja1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgaWYoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyX2FjdGl2ZScpKSB7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2FjdGl2ZScpO1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyX2ZpbmlzaCcpO1xyXG4gICAgfVxyXG4gIG1lbnVCb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X2FjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyX2FjdGl2ZVwiKTtcclxuICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xyXG4gIG1lbnVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X2FjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVyZ2VyT3V0c2lkZUNsaWNrKCkge1xyXG4gIGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KVxyXG59XHJcblxyXG4vKiBwb3BVcCAqL1xyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cFwiKTtcclxuY29uc3QgYnRuT3BlblBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcG9wdXAnKTtcclxuY29uc3QgYnRuQ2xvc2VQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xyXG5cclxuXHJcbmlmIChidG5PcGVuUG9wVXApIHtcclxuICBidG5PcGVuUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qb3BVcCk7XHJcbn07XHJcblxyXG5pZiAoYnRuQ2xvc2VQb3BVcCkge1xyXG4gIGJ0bkNsb3NlUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXApO1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb3BlblBvcFVwIChlKXtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5X2xvY2tcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlUG9wVXAoZSkge1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcclxufVxyXG5cclxuLyogbmF2bWVudSBzZXJ2aWNlIHBhZ2VzICovXHJcblxyXG5jb25zdCB0YWJzQnRuICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfbmF2LWJ0bicpO1xyXG5jb25zdCB0YWJzSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfbGlzdCcpO1xyXG5cclxudGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRCdG4gPSBpdGVtO1xyXG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xyXG4gICAgICAgIGxldCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJJZCk7XHJcblxyXG4gICAgICAgIGlmKCAhIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG5fYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhYnNJdGVtLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoJ2xpc3RfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gU3dpcGVyOlxyXG5cclxuZnVuY3Rpb24gZGVzdHJveVNsaWRlcnNPblJlc2l6ZShzZWxlY3Rvciwgd2lkdGgsIG9iaiwgbW9yZVRoYW4pIHtcclxuICBjb25zdCBpbml0ID0ge1xyXG4gICAgLi4ub2JqLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICBjb25zdCBzbGlkZXJTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuICBpZighc2xpZGVyU2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xyXG5cclxuICBjb25zdCB0b2dnbGVJbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmVlZGVkV2lkdGggPSBtb3JlVGhhbiA/IHdpbi5pbm5lcldpZHRoID49IHdpZHRoIDogd2luLmlubmVyV2lkdGggPD0gd2lkdGhcclxuICAgIGlmIChuZWVkZWRXaWR0aCkge1xyXG4gICAgICBpZiAoIXNsaWRlclNlbGVjdG9yLmNsYXNzTGlzdC5jb250YWlucyhcInN3aXBlci1pbml0aWFsaXplZFwiKSkge1xyXG4gICAgICAgIHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNsaWRlclNlbGVjdG9yLmNsYXNzTGlzdC5jb250YWlucyhcInN3aXBlci1pbml0aWFsaXplZFwiKSkge1xyXG4gICAgICBzd2lwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFtcImxvYWRcIiwgXCJyZXNpemVcIl0uZm9yRWFjaCgoZXZ0KSA9PlxyXG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCB0b2dnbGVJbml0LCBmYWxzZSlcclxuICApO1xyXG59XHJcblxyXG5kZXN0cm95U2xpZGVyc09uUmVzaXplKFwiLnJldmlld3Mtc2xpZGVyXCIsIDk5OTk5LCB7XHJcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICBzcGVlZDogODAwLFxyXG4gIGF1dG9IZWlnaHQ6IHRydWUsXHJcblxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKiByZXZpZXdzIG9wZW5lciAqL1xyXG5cclxuY29uc3QgcmV2aWV3c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0LXdyYXBcIik7XHJcblxyXG5yZXZpZXdzQmxvY2suZm9yRWFjaChmdW5jdGlvbihyZXZpZXcpe1xyXG4gIGNvbnN0IGJ0bk9wZW4gPSByZXZpZXcucXVlcnlTZWxlY3RvcignLnJldi1vcGVuJyk7XHJcbiAgY29uc3QgYnRuQ2xvc2UgPSByZXZpZXcucXVlcnlTZWxlY3RvcignLnJldi1jbG9zZScpO1xyXG5cclxuICBpZihidG5PcGVuKXtcclxuICAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICByZXZpZXcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9yZXZpZXdcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldmlldy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX3Jldmlld1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLyogY2FzdG9tIGFuaW0gKi9cclxuXHJcbmZ1bmN0aW9uIG9uRW50cnkoZW50cnkpIHtcclxuICBlbnRyeS5mb3JFYWNoKGNoYW5nZSA9PiB7XHJcbiAgICBpZiAoY2hhbmdlLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGNoYW5nZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC1zaG93Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxubGV0IG9wdGlvbnMgPSB7IHRocmVzaG9sZDogWzAuNV0gfTtcclxubGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9uRW50cnksIG9wdGlvbnMpO1xyXG5sZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWxlbWVudC1hbmltYXRpb24nKTtcclxuZm9yIChsZXQgZWxtIG9mIGVsZW1lbnRzKSB7XHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xyXG59XHJcblxyXG4vKiBhY3RpdmUgbGluayBwYWdlICovXHJcblxyXG5sZXQgcGFnZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlkLXBhZ2VdXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtaWQtcGFnZVwiKSxcclxuICAgIG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZC1uYXY9JHtwYWdlSWR9XWApO1xyXG5cclxuaWYocGFnZUlkID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1uYXZcIikpIHtcclxuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xyXG59XHJcblxyXG4vKiBjb250YWN0IGZvcm0gKi9cclxuaW5pdENvbnRhY3RGb3JtKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0Q29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcFwiKTtcclxuICBjb25zdCBmb3JtID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Rm9ybVwiKTtcclxuXHJcbiAgaWYgKCFmb3JtICYmICFmb3JtV3JhcCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBzdWNjZXNzTXNnQmxvY2sgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tc2cnKTtcclxuICBjb25zdCBmb3JtQ29udGVudCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuICBjb25zdCBFTUFJTF9SRUdFWCA9IC9bXkAgXFx0XFxyXFxuXStAW15AIFxcdFxcclxcbl0rXFwuW15AIFxcdFxcclxcbl0rLztcclxuICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVwiKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgZW1haWxFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG4gICAgaWYoIWlzRm9ybVZhbGlkKSByZXR1cm47XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdwYXlsb2FkOiAnLCBwYXlsb2FkKTtcclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3VjY2Vzc01zZ0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3JtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZW5kJyk7XHJcbiAgICB9LCAzMDAwKVxyXG4gIH0pO1xyXG5cclxuICBmaXJzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJmaXJzdE5hbWVJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwibGFzdE5hbWVJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZW1haWxJbnB1dFwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZmllbGQsIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgIGNhc2UgXCJmaXJzdE5hbWVJbnB1dFwiOlxyXG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGZpcnN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxhc3ROYW1lSW5wdXRcIjpcclxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbWFpbElucHV0XCI6XHJcbiAgICAgICAgaWYoIUVNQUlMX1JFR0VYLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGVtYWlsRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
