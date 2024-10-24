var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu");
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
};

initSliders(".animation-slider", 479, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  dots: true,
  arrows: true,
  adaptiveHeight: true,
  touchThreshold: 50,
});

const tabsBtn  = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tab_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tab_active');
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('tab__item_active');
            });

            currentBtn.classList.add('tab_active');
            currentTab.classList.add('tab__item_active');
        }
    });
});

initSliders(".services__slider1", 999999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  touchThreshold: 50,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});

initSliders(".services__slider2", 999999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  touchThreshold: 50,
  autoplay: true,
  autoplaySpeed: 2000,
  nfinite: true,
});

initSliders(".services__slider3", 999999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  touchThreshold: 50,
  autoplay: true,
  autoplaySpeed: 2000,
  nfinite: true,
});