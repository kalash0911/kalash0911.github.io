"use strict";

new WOW().init();
initCleanerSwiper();
initCustomerSwiper();
switchSlider();

function initCleanerSwiper() {
  var slider = new Swiper(".swiper_uptidy_cleaner", {
    speed: 1400,
    // slidesPerView: 1.6,
    centeredSlides: true,
    grabCursor: true,
    // spaceBetween: 80,
    loopedSlides: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets" // clickable: true,

    },
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1
      },
      768: {
        spaceBetween: 40
      },
      1024: {
        spaceBetween: 80,
        slidesPerView: 1.6
      },
      1920: {
        spaceBetween: 80,
        slidesPerView: 2
      }
    }
  });
}

function initCustomerSwiper() {
  var slider = new Swiper(".swiper_uptidy_customer", {
    speed: 1400,
    // slidesPerView: 1.6,
    centeredSlides: true,
    grabCursor: true,
    // spaceBetween: 80,
    loopedSlides: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets" // clickable: true,

    },
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1
      },
      768: {
        spaceBetween: 40
      },
      1024: {
        spaceBetween: 80,
        slidesPerView: 1.6
      },
      1920: {
        spaceBetween: 80,
        slidesPerView: 2
      },
      2300: {
        spaceBetween: 80,
        slidesPerView: 2.5
      }
    }
  });
}

function switchSlider() {
  var customerSwiper = document.querySelector(".swiper_uptidy_customer");
  var cleanerSwiper = document.querySelector(".swiper_uptidy_cleaner");
  var switchersItems = document.querySelectorAll(".switcher");
  switchersItems.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      switchersItems.forEach(function (item) {
        item.classList.remove("activeSwitch");
      });
      element.classList.add("activeSwitch");

      if (element.classList.contains('customer')) {
        customerSwiper.style.display = 'block';
        cleanerSwiper.style.display = 'none';
      } else {
        customerSwiper.style.display = 'none';
        cleanerSwiper.style.display = 'block';
      }
    });
  });
}
//# sourceMappingURL=uptidy_script.js.map
