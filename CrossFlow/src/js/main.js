const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if(burger.classList.contains('burger_active')) {
        burger.classList.add('burger_finish');
        burger.classList.remove('burger_active');
      } else {
        burger.classList.add('burger_active');
        burger.classList.remove('burger_finish');
      }
    menuBody.classList.toggle("menu_active");
  });
};

if (linkClose.length) {
    for(var i =0;i<linkClose.length;++i){
        linkClose[i].addEventListener("click", function (e) {
            document.body.classList.remove("body_lock");
            document.body.classList.remove("active");
            burger.classList.remove("burger_active");
            burger.classList.add('burger_finish');
            menuBody.classList.remove("menu_active");
        })
    }
};


const swiper = new Swiper('.service-slider', {
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        autoHeight: true,
      },
      961: {
        autoHeight: false,
      },
    }
});

function initSliders(selector, width, obj) {
  const init = {
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
};

initSliders(".cross-slider", 960, {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
  
});