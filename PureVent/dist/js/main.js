"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// for header
var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");
var linkClose = document.querySelectorAll(".link-close");
var overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }

    menuBody.classList.toggle("menu_active");
  });
}

;

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }

    menuBody.classList.toggle("menu_active");
  });
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
      menuBody.classList.remove("menu_active");
      overflow.classList.remove("overflow_active");
    });
  }
}

; // for active-link

var currentUrl = window.location.href;
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  var menuItemLink = menuItem.querySelector('a');

  if (menuItemLink.href === currentUrl) {
    menuItem.classList.add('active-link');
  }
}); // For Accardion

initAccordion();

function initAccordion() {
  var accardionToggle = function accardionToggle(slideMenu) {
    return function (e) {
      slideMenu.forEach(function (links) {
        var hidePanel = links.nextElementSibling;
        var item = links.closest(".item");

        if (links === e.currentTarget) {
          hidePanel.classList.toggle("active-block");
          item.classList.toggle("active");
        } else {
          links.classList.remove("active");
          hidePanel.classList.remove("active-block");
          item.classList.remove("active");
        }
      });
    };
  };

  var slideMenu = document.querySelectorAll(".accardion-link");
  slideMenu.forEach(function (links) {
    links.addEventListener("click", accardionToggle(slideMenu));
  });
} // Swiper:


function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

    if (neededWidth) {
      if (!(sliderSelector === null || sliderSelector === void 0 ? void 0 : sliderSelector.classList.contains("swiper-initialized"))) {
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

var menuVent = ['Clean guarantee', 'Price matching', 'Locally Licensed'];
destroySlidersOnResize(".vent-slider", 99999, {
  pagination: {
    el: ".vent-pag",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + menuVent[index] + "</span>";
    }
  }
});
var menuPricing = ['duct cleaning', 'air CC'];
destroySlidersOnResize(".pricing-slider", 99999, {
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: ".pricing-pag",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + menuPricing[index] + "</span>";
    }
  }
});
destroySlidersOnResize(".sec-slider", 99999, {
  spaceBetween: 20,
  freeMode: true,
  speed: 700,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  scrollbar: {
    el: ".sec-swiper-scrollbar",
    draggable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16
    },
    640: {
      slidesPerView: 1.5
    },
    800: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2.5
    },
    1200: {
      slidesPerView: 3
    }
  }
}); // For progress-circle nimate

function animateProgressCircle(circle, speed, updateSpeed) {
  var offset = circle.getBoundingClientRect().top - window.innerHeight;

  if (offset < 0 && !circle.classList.contains('animated')) {
    var percent = parseInt(circle.querySelector('.progress-text').textContent);
    var circumference = 2 * Math.PI * 50;
    var strokeDasharrayValue = percent / 100 * circumference + ' ' + (1 - percent / 100) * circumference;
    circle.querySelector('.progress-value').style.strokeDasharray = strokeDasharrayValue;
    circle.querySelector('.progress-text').textContent = '0%';
    circle.classList.add('animated');
    var duration = 1000 / speed;
    var startTime = performance.now();
    requestAnimationFrame(function animate(currentTime) {
      var elapsedTime = currentTime - startTime;
      var progress = elapsedTime / duration;

      if (progress > 1) {
        progress = 1;
      }

      var currentPercent = Math.round(progress * percent);
      var currentStrokeDasharrayValue = currentPercent / 100 * circumference + ' ' + (1 - currentPercent / 100) * circumference;
      circle.querySelector('.progress-value').style.strokeDasharray = currentStrokeDasharrayValue;
      circle.querySelector('.progress-text').textContent = currentPercent + '%';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    });
    var updateInterval = setInterval(function () {
      var currentPercent = parseInt(circle.querySelector('.progress-text').textContent);

      if (currentPercent < percent) {
        circle.querySelector('.progress-text').textContent = currentPercent + 1 + '%';
      } else {
        clearInterval(updateInterval);
      }
    }, updateSpeed);
  }
}

function handleScroll() {
  var circles = document.querySelectorAll('.progress-circle');

  if (circles.length > 0) {
    circles.forEach(function (circle) {
      animateProgressCircle(circle, 1, 1);
    });
  }
}

window.addEventListener('scroll', handleScroll);
//# sourceMappingURL=main.js.map
