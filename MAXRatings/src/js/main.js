// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
      ...obj,
    };
  
    const win = window;
    const sliderSelector = document.querySelector(selector);
    let swiper = new Swiper(selector, init);
  
    const toggleInit = () => {
      const neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width
      if (neededWidth) {
        if (!sliderSelector.classList.contains("swiper-initialized")) {
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

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 20,
  slidesPerView: 4.5,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  speed: 700,
  centerPadding: 0,

  mousewheel: {
    eventsTarget: ".main-slider",
  },

  autoplay: {
    delay: 1500,
  },

  breakpoints: {

    320: {
      slidesPerView: 1.75,
    },

    640: {
      slidesPerView: 2.5,
    },

    1025: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 3.6,
    },

    1250: {
      slidesPerView: 4,
    },

    1400: {
      slidesPerView: 4.5,
    }
  }

});
  