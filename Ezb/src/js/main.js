const burger = document.querySelector(".burger-wrap");
const gamburger = document.querySelector(".plate7");
if (burger) {
  const menuBody = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu_overlay");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    gamburger.classList.toggle("active");
    menuBody.classList.toggle("menu_active");
    menuOverlay.classList.toggle("menu_overlay_active");
  });

  menuOverlay.addEventListener("click", function (e) {
    document.body.classList.remove("body_lock");
    gamburger.classList.remove("active");
    menuBody.classList.remove("menu_active");
    menuOverlay.classList.remove("menu_overlay_active");
  });
};

function initSliders(selector, width, obj) {
    const init = {
      infinite: false,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      ...obj,
    };
  
    $(() => {
      const win = $(window);
      const slider = $(selector);
  
      win.on("load resize", () => {
        if (win.width() <= width) {
          slider.not(".slick-initialized").slick(init);
        } else if (slider.hasClass("slick-initialized")) {
          slider.slick("unslick");
        }
      });
    });
}

initSliders(".merch-slider", 9999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

initSliders(".tattoo-slider", 9999, {
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}); 

/* initSliders(".reviews_slider", 1300, {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}); */ 