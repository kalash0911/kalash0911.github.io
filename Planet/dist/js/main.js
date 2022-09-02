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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7O0FBR0EsSUFBSSxNQUFKLEVBQVk7QUFDVixFQUFBLGtCQUFrQjtBQUNsQixFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNEOztBQUFBOztBQUVELElBQUksU0FBUyxDQUFDLE1BQWQsRUFBc0I7QUFDcEIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUF6QixFQUFnQyxFQUFFLENBQWxDLEVBQW9DO0FBQ2xDLElBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFNBQXZDO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCLENBQUgsRUFBK0M7QUFDM0MsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDRCxHQUhILE1BR1M7QUFDTCxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNEOztBQUNILEVBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsYUFBMUI7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I7QUFDcEIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjtBQUNBLEVBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsRUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixhQUExQjtBQUNEOztBQUVELFNBQVMsa0JBQVQsR0FBOEI7QUFDNUIsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DO0FBQ0Q7QUFFRDs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBckI7QUFDQSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF0Qjs7QUFHQSxJQUFJLFlBQUosRUFBa0I7QUFDaEIsRUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDs7QUFBQTs7QUFFRCxJQUFJLGFBQUosRUFBbUI7QUFDakIsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBeEM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFsQztBQUNEOztBQUFBOztBQUVELFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUFzQjtBQUNwQixFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsRUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixRQUFwQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFdBQTVCO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLENBQXBCLEVBQXVCO0FBQ3JCLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQSxFQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDRDtBQUVEOzs7QUFFQSxJQUFNLE9BQU8sR0FBSSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBakI7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBakI7QUFFQSxPQUFPLENBQUMsT0FBUixDQUFnQixVQUFTLElBQVQsRUFBZTtBQUMzQixFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDLFFBQUksVUFBVSxHQUFHLElBQWpCO0FBQ0EsUUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsVUFBeEIsQ0FBWjtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWpCOztBQUVBLFFBQUksQ0FBRSxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4QixZQUE5QixDQUFOLEVBQW1EO0FBQy9DLE1BQUEsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBUyxJQUFULEVBQWU7QUFDM0IsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsWUFBdEI7QUFDSCxPQUZEO0FBSUEsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBZTtBQUM1QixRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNILE9BRkQ7QUFJQSxNQUFBLFVBQVUsQ0FBQyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFlBQXpCO0FBQ0EsTUFBQSxVQUFVLENBQUMsU0FBWCxDQUFxQixHQUFyQixDQUF5QixhQUF6QjtBQUNIO0FBQ0osR0FqQkQ7QUFrQkgsQ0FuQkQsRSxDQXFCQTs7QUFFQSxTQUFTLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDLEtBQTFDLEVBQWlELEdBQWpELEVBQXNELFFBQXRELEVBQWdFO0FBQzlELE1BQU0sSUFBSSxxQkFDTCxHQURLLENBQVY7O0FBSUEsTUFBTSxHQUFHLEdBQUcsTUFBWjtBQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBRUEsTUFBRyxDQUFDLGNBQUosRUFBb0I7QUFFcEIsTUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFiOztBQUVBLE1BQU0sVUFBVSxHQUFHLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLFFBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBSixJQUFrQixLQUFyQixHQUE2QixHQUFHLENBQUMsVUFBSixJQUFrQixLQUEzRTs7QUFDQSxRQUFJLFdBQUosRUFBaUI7QUFDZixVQUFJLENBQUMsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsUUFBekIsQ0FBa0Msb0JBQWxDLENBQUwsRUFBOEQ7QUFDNUQsUUFBQSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFUO0FBQ0Q7QUFDRixLQUpELE1BSU8sSUFBSSxjQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixDQUFrQyxvQkFBbEMsQ0FBSixFQUE2RDtBQUNsRSxNQUFBLE1BQU0sQ0FBQyxPQUFQO0FBQ0Q7QUFDRixHQVREOztBQVdBLEdBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBMkIsVUFBQyxHQUFEO0FBQUEsV0FDekIsR0FBRyxDQUFDLGdCQUFKLENBQXFCLEdBQXJCLEVBQTBCLFVBQTFCLEVBQXNDLEtBQXRDLENBRHlCO0FBQUEsR0FBM0I7QUFHRDs7QUFFRCxzQkFBc0IsQ0FBQyxpQkFBRCxFQUFvQixLQUFwQixFQUEyQjtBQUMvQyxFQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQyxFQUFBLEtBQUssRUFBRSxHQUZ3QztBQUcvQyxFQUFBLFVBQVUsRUFBRSxJQUhtQztBQUsvQyxFQUFBLFVBQVUsRUFBRTtBQUNWLElBQUEsTUFBTSxFQUFFLHFCQURFO0FBRVYsSUFBQSxNQUFNLEVBQUU7QUFGRTtBQUxtQyxDQUEzQixDQUF0QjtBQVdBOztBQUVBLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQixDQUFyQjtBQUVBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFVBQVMsTUFBVCxFQUFnQjtBQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBUCxDQUFxQixXQUFyQixDQUFoQjtBQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFQLENBQXFCLFlBQXJCLENBQWpCOztBQUVBLE1BQUcsT0FBSCxFQUFXO0FBQ1QsSUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMxQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0QsS0FGRDtBQUlBLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDM0MsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBYkQ7QUFlQSxJQUFJLEdBQUosR0FBVSxJQUFWO0FBRUE7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFBLE1BQU0sRUFBSTtBQUN0QixRQUFJLE1BQU0sQ0FBQyxjQUFYLEVBQTJCO0FBQ3pCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLGNBQTVCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBQ0QsSUFBSSxPQUFPLEdBQUc7QUFBRSxFQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQ7QUFBYixDQUFkO0FBQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBSixDQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixDQUFmOzsyQ0FDZ0IsUTs7OztBQUFoQixzREFBMEI7QUFBQSxRQUFqQixHQUFpQjtBQUN4QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLEdBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFFQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsWUFBekMsQ0FBc0QsY0FBdEQsQ0FBYjtBQUFBLElBQ0ksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULHdCQUF1QyxNQUF2QyxPQURkOztBQUdBLElBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGFBQXJCLENBQWIsRUFBa0Q7QUFDOUMsRUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixhQUF0QjtBQUNIO0FBRUQ7OztBQUNBLGVBQWU7O0FBRWYsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUVBLE1BQUksQ0FBQyxJQUFELElBQVMsQ0FBQyxRQUFkLEVBQXdCO0FBRXhCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQXhCO0FBQ0EsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxNQUFNLFdBQVcsR0FBRyx5Q0FBcEI7QUFDQSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixZQUFuQixDQUF2QjtBQUNBLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFdBQW5CLENBQXRCO0FBQ0EsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBbkI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixVQUFuQixDQUFyQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsaUJBQW5CLENBQXpCO0FBQ0EsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsZ0JBQW5CLENBQXhCO0FBQ0EsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsYUFBbkIsQ0FBckI7QUFDQSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFyQjtBQUNBLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQWhCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsS0FBbEI7QUFFQSxFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFDLENBQUQsRUFBTztBQUNyQyxJQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsSUFBQSxZQUFZLENBQUMsZ0JBQUQsRUFBbUIsY0FBYyxDQUFDLEtBQWxDLENBQVo7QUFDQSxJQUFBLFlBQVksQ0FBQyxlQUFELEVBQWtCLGFBQWEsQ0FBQyxLQUFoQyxDQUFaO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBRCxFQUFlLFVBQVUsQ0FBQyxLQUExQixDQUFaO0FBQ0EsUUFBRyxDQUFDLFdBQUosRUFBaUI7QUFDakIsUUFBTSxPQUFPLEdBQUc7QUFDZCxNQUFBLFNBQVMsRUFBRSxjQUFjLENBQUMsS0FEWjtBQUVkLE1BQUEsUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUZWO0FBR2QsTUFBQSxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBSEo7QUFJZCxNQUFBLE9BQU8sRUFBRSxZQUFZLENBQUM7QUFKUixLQUFoQjtBQU1BLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE9BQXpCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUNBLElBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixNQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLE1BQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsTUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixXQUF2QjtBQUNELEtBTFMsRUFLUCxJQUxPLENBQVY7QUFNRCxHQXBCRDtBQXNCQSxFQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDLEtBQUQsRUFBVztBQUNsRCxJQUFBLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQWhDLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQyxLQUFELEVBQVc7QUFDakQsSUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQS9CLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQyxLQUFELEVBQVc7QUFDOUMsSUFBQSxZQUFZLENBQUMsWUFBRCxFQUFlLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBNUIsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLFlBQVEsS0FBUjtBQUNFLFdBQUssZ0JBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLFFBQS9CO0FBQ0EsVUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBLFFBQUEsZ0JBQWdCLENBQUMsU0FBakIsQ0FBMkIsTUFBM0IsQ0FBa0MsUUFBbEM7QUFDQTs7QUFDRixXQUFLLGVBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixNQUExQixDQUFpQyxRQUFqQztBQUNBOztBQUNGLFdBQUssWUFBTDtBQUNFLFlBQUcsQ0FBQyxXQUFXLENBQUMsSUFBWixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLFVBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDQSxVQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixNQUF2QixDQUE4QixRQUE5QjtBQUNBO0FBM0JKO0FBNkJEO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBoZWFkZXIgKi9cblxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XG5jb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcblxuXG5pZiAoYnVyZ2VyKSB7XG4gIGJ1cmdlck91dHNpZGVDbGljaygpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcbn07XG5cbmlmIChsaW5rQ2xvc2UubGVuZ3RoKSB7XG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcbiAgICBsaW5rQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcbiAgfVxufTtcblxuZnVuY3Rpb24gb3Blbk1lbnUoZSkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgaWYoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyX2FjdGl2ZScpKSB7XG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXJfZmluaXNoJyk7XG4gICAgfVxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHlfbG9ja1wiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XG4gIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdidXJnZXJfZmluaXNoJyk7XG4gIG1lbnVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X2FjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gYnVyZ2VyT3V0c2lkZUNsaWNrKCkge1xuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXG59XG5cbi8qIHBvcFVwICovXG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xuY29uc3QgYnRuT3BlblBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcG9wdXAnKTtcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcblxuXG5pZiAoYnRuT3BlblBvcFVwKSB7XG4gIGJ0bk9wZW5Qb3BVcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBvcFVwKTtcbn07XG5cbmlmIChidG5DbG9zZVBvcFVwKSB7XG4gIGJ0bkNsb3NlUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXApO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcbn07XG5cbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XG59XG5cbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xuXG5jb25zdCB0YWJzQnRuICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfbmF2LWJ0bicpO1xuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcblxudGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xuXG4gICAgICAgIGlmKCAhIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG5fYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdidG5fYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gU3dpcGVyOlxuXG5mdW5jdGlvbiBkZXN0cm95U2xpZGVyc09uUmVzaXplKHNlbGVjdG9yLCB3aWR0aCwgb2JqLCBtb3JlVGhhbikge1xuICBjb25zdCBpbml0ID0ge1xuICAgIC4uLm9iaixcbiAgfTtcblxuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIGNvbnN0IHNsaWRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgaWYoIXNsaWRlclNlbGVjdG9yKSByZXR1cm47XG5cbiAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xuXG4gIGNvbnN0IHRvZ2dsZUluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmVlZGVkV2lkdGggPSBtb3JlVGhhbiA/IHdpbi5pbm5lcldpZHRoID49IHdpZHRoIDogd2luLmlubmVyV2lkdGggPD0gd2lkdGhcbiAgICBpZiAobmVlZGVkV2lkdGgpIHtcbiAgICAgIGlmICghc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgIHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIGluaXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3dpcGVyLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICBzd2lwZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBbXCJsb2FkXCIsIFwicmVzaXplXCJdLmZvckVhY2goKGV2dCkgPT5cbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldnQsIHRvZ2dsZUluaXQsIGZhbHNlKVxuICApO1xufVxuXG5kZXN0cm95U2xpZGVyc09uUmVzaXplKFwiLnJldmlld3Mtc2xpZGVyXCIsIDk5OTk5LCB7XG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHNwZWVkOiA4MDAsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxufSk7XG5cbi8qIHJldmlld3Mgb3BlbmVyICovXG5cbmNvbnN0IHJldmlld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dC13cmFwXCIpO1xuXG5yZXZpZXdzQmxvY2suZm9yRWFjaChmdW5jdGlvbihyZXZpZXcpe1xuICBjb25zdCBidG5PcGVuID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtb3BlbicpO1xuICBjb25zdCBidG5DbG9zZSA9IHJldmlldy5xdWVyeVNlbGVjdG9yKCcucmV2LWNsb3NlJyk7XG5cbiAgaWYoYnRuT3Blbil7XG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICByZXZpZXcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9yZXZpZXdcIik7XG4gICAgfSk7XG5cbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9yZXZpZXdcIik7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5uZXcgV09XKCkuaW5pdCgpO1xuXG4vKiBjYXN0b20gYW5pbSAqL1xuXG5mdW5jdGlvbiBvbkVudHJ5KGVudHJ5KSB7XG4gIGVudHJ5LmZvckVhY2goY2hhbmdlID0+IHtcbiAgICBpZiAoY2hhbmdlLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBjaGFuZ2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtc2hvdycpO1xuICAgIH1cbiAgfSk7XG59XG5sZXQgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiBbMC41XSB9O1xubGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9uRW50cnksIG9wdGlvbnMpO1xubGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsZW1lbnQtYW5pbWF0aW9uJyk7XG5mb3IgKGxldCBlbG0gb2YgZWxlbWVudHMpIHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbG0pO1xufVxuXG4vKiBhY3RpdmUgbGluayBwYWdlICovXG5cbmxldCBwYWdlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQtcGFnZV1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wYWdlXCIpLFxuICAgIG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZC1uYXY9JHtwYWdlSWR9XWApO1xuXG5pZihwYWdlSWQgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLW5hdlwiKSkge1xuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xufVxuXG4vKiBjb250YWN0IGZvcm0gKi9cbmluaXRDb250YWN0Rm9ybSgpO1xuXG5mdW5jdGlvbiBpbml0Q29udGFjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm1XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBcIik7XG4gIGNvbnN0IGZvcm0gPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RGb3JtXCIpO1xuXG4gIGlmICghZm9ybSAmJiAhZm9ybVdyYXApIHJldHVybjtcblxuICBjb25zdCBzdWNjZXNzTXNnQmxvY2sgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tc2cnKTtcbiAgY29uc3QgZm9ybUNvbnRlbnQgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XG4gIGNvbnN0IEVNQUlMX1JFR0VYID0gL1teQCBcXHRcXHJcXG5dK0BbXkAgXFx0XFxyXFxuXStcXC5bXkAgXFx0XFxyXFxuXSsvO1xuICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVcIik7XG4gIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdE5hbWVcIik7XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xuICBjb25zdCBmaXJzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0TmFtZUVycm9yXCIpO1xuICBjb25zdCBsYXN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdE5hbWVFcnJvclwiKTtcbiAgY29uc3QgZW1haWxFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsRXJyb3JcIik7XG4gIGNvbnN0IGZldGNoRXJyb3JFbCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mZXRjaC1lcnJvcicpO1xuICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5uZXJXcmFwJyk7XG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZUZvcm0oXCJmaXJzdE5hbWVJbnB1dFwiLCBmaXJzdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgdmFsaWRhdGVGb3JtKFwibGFzdE5hbWVJbnB1dFwiLCBsYXN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxuICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lSW5wdXQudmFsdWUsXG4gICAgICBlbWFpbDogZW1haWxJbnB1dC52YWx1ZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3BheWxvYWQ6ICcsIHBheWxvYWQpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdWNjZXNzTXNnQmxvY2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBmb3JtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICBmb3JtV3JhcC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbmQnKTtcbiAgICB9LCAzMDAwKVxuICB9KTtcblxuICBmaXJzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgdmFsaWRhdGVGb3JtKFwiZmlyc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG4gIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbGlkYXRlRm9ybShcImVtYWlsSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgIGNhc2UgXCJmaXJzdE5hbWVJbnB1dFwiOlxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcbiAgICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxhc3ROYW1lSW5wdXRcIjpcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XG4gICAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlbWFpbElucHV0XCI6XG4gICAgICAgIGlmKCFFTUFJTF9SRUdFWC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIGVtYWlsRXJyb3JFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59Il19
