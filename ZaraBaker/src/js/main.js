new WOW().init();

window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth < 1024) {
            if (targetElement.classList.contains('btn-arrow')) {
                targetElement.closest('.menu-item').classList.toggle('menu-item_active');
                targetElement.closest('.menu').classList.toggle('opacity-links')
            }
        }
    }
};

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

initSliders(".servis-slider", 767, {
  slidesToShow: 2,
  slidesToScroll: 2,
  adaptiveHeight: true,
  speed: 700,
  dots: true,
  arrows: false,
  touchThreshold: 50,
  responsive:[
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});

initSliders(".icons-slider", 99999, {
  speed: 700,
  dots: true,
  arrows: false,
  touchThreshold: 50,
  slidesPerRow: 2,
  rows: 3,
  adaptiveHeight: true,
  responsive:[
    {
      breakpoint: 1025,
      settings: {
        slidesPerRow: 3,
        rows: 2,
      },
    },{
      breakpoint: 768,
      settings: {
        slidesPerRow: 1,
        rows: 3,
      },
    },
  ],
});

initSliders(".testi-slider", 99999, {
  slidesToShow: 1,
  adaptiveHeight: true,
  speed: 700,
  dots: true,
  arrows: false,
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

const progressCircle = document.querySelector('.progress-content');

document.addEventListener('DOMContentLoaded', () => {
  initCounter();
});

function initCounter() {
  let statWrapEl = document.querySelector('.init-progress');
  let initStart = false;
  let maxNumbersElArr = document.querySelectorAll('.progress-title > span');

  window.addEventListener('scroll', () => {
      if(isVisible(statWrapEl) && !initStart) {
        progressCircle.classList.add('progress_active');
          initStart = true;
          maxNumbersElArr.forEach((el) => {
              const maxNumber = Number(el.textContent);
              let startCount = 1;
              let intervalId = setInterval(() => {
                  if(startCount < maxNumber) {
                      startCount += 1;
                      if (startCount > maxNumber) {
                          startCount = maxNumber;
                          clearInterval(intervalId);
                      }
                      el.textContent = formatNumber(startCount);
                  } 
              }, 20)
          })
      } 
  });
}

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

$( document ).ready(function(){
  $( ".itemU" ).hover(function(){
    let position=$(this).attr("position");
    $(".first-item").removeClass("first-item_active");
    $(".first-item" + position).addClass("first-item_active");
  });
});