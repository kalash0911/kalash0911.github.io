const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
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

destroySlidersOnResize(".partners-slider", 999999, {
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  pagination: {
    el: ".pagination",
    clickable: true,
  },
});
