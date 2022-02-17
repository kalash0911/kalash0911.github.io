const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains("burger_active")) {
      burger.classList.add("burger_finish");
      burger.classList.remove("burger_active");
    } else {
      burger.classList.add("burger_active");
      burger.classList.remove("burger_finish");
    }
    menuBody.classList.toggle("menu_active");
  });
}

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add("burger_finish");
      menuBody.classList.remove("menu_active");
    });
  }
}

destroySlidersOnResize(".service-slider", 999999, {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

destroySlidersOnResize(".cross-slider", 960, {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
});

// Helpers:

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

const openVideo = document.querySelector(".open-video");
const closeVideo = document.querySelector(".close-video");
const videoBlock = document.querySelector(".video-block");

openVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.add("video-block_active");
  document.body.classList.add("body_overflow");
  document.body.addEventListener("click", closeVideoEvent);
});

closeVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.remove("video-block_active");
  document.body.classList.remove("body_overflow");
  document.body.removeEventListener("click", closeVideoEvent);
});

function closeVideoEvent (e) {
  if(e.target.id!='video' && !e.target.closest('.open-video')){
    videoBlock.classList.remove("video-block_active");
    document.body.classList.remove("body_overflow");
    document.body.removeEventListener("click", closeVideoEvent);
  }
}
