/* header logick */

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
    }
  });
};

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
    })
  }
};

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);
  let swiper = new Swiper(selector, init);

  const toggleInit = () => {
    const neededWidth = moreThan
      ? win.innerWidth >= width
      : win.innerWidth <= width;
    if (neededWidth) {
      if (!sliderSelector?.classList.contains("swiper-initialized")) {
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach((evt) =>
    win.addEventListener(evt, toggleInit, false)
  );
}

destroySlidersOnResize(".galerySlider", 800, {
  watchOverflow: true,
  spaceBetween: 20,

  breakpoints: {
    100: {
      slidesPerView: 1.1,
      spaceBetween: 6,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.2,
    },
    700: {
      slidesPerView: 2.5,
    },
  },

});

destroySlidersOnResize(".blogSlider", 9999999, {
  spaceBetween: 20,
  slidesPerView: 4,
  watchOverflow: true,

  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },

  breakpoints: {
    100: {
      slidesPerView: 1.1,
      spaceBetween: 4,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1300: {
      slidesPerView: 4,
    },
  },

});
