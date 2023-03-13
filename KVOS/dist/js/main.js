"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
}

; // Swiper:

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

destroySlidersOnResize(".partners-slider", 999999, {
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  pagination: {
    el: ".pagination",
    clickable: true
  }
});
/* for form */

var yearSelect = document.getElementById("year");

if (yearSelect) {
  var currentYear = new Date().getFullYear();

  for (var year = 1900; year <= currentYear; year++) {
    var option = document.createElement("option");
    option.setAttribute("value", year);
    option.text = year;
    yearSelect.appendChild(option);
  }
}

var textarea = document.getElementById("myTextarea");
var charCount = document.getElementById("charCount");

if (textarea) {
  textarea.addEventListener("input", function () {
    var length = textarea.value.length;
    charCount.innerText = length + " /300";
  });
}

var fileDrop = document.getElementById('file-drop');
var fileInput = document.getElementById('file-input');
var fileName = document.getElementById('file-name');

if (fileDrop && fileInput && fileName) {
  fileDrop.addEventListener('dragenter', function (event) {
    event.preventDefault();
    fileDrop.classList.add('drag-over');
  });
  fileDrop.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
  fileDrop.addEventListener('drop', function (event) {
    event.preventDefault();
    fileDrop.classList.remove('drag-over');
    var file = event.dataTransfer.files[0];

    if (file) {
      fileName.textContent = "".concat(file.name);
      fileInput.files = event.dataTransfer.files;
    } else {
      fileName.textContent = 'Файл не обраний';
    }
  });
  fileInput.addEventListener('change', function (event) {
    var file = event.target.files[0];

    if (file) {
      fileName.textContent = "".concat(file.name);
    } else {
      fileName.textContent = 'Файл не обраний';
    }
  });
}
//# sourceMappingURL=main.js.map
