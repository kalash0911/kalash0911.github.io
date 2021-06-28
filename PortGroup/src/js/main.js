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

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll ('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle ('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
    const menuBody = document.querySelector('.menu__body');
    menuBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('body_lock');
        menuBurger.classList.toggle('menu__burger_active');
        menuBody.classList.toggle('menu__body_active');
    });
}

sectionInViewport();

function sectionInViewport() {
    let section = document.querySelector('.scroll-section');

    window.addEventListener('scroll', () => {
        let sectionRect = section.getBoundingClientRect();
        let isBlockIsOutFromViewPort = sectionRect.height + sectionRect.top - 400;
        let isBlockInViewPort = window.innerHeight - sectionRect.top - 250;
        if(isBlockIsOutFromViewPort > 0 && isBlockInViewPort > 0) {
            document.body.classList.add('change-bg')
        } else {
            document.body.classList.remove('change-bg')
        }
    })
};

function initSliders (selector, width, obj){
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
          if (win.width() < width) {
            slider.not(".slick-initialized").slick(init);
          } else if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick");
          }
        });
    });
}

initSliders(".services__gallery", 480)
initSliders(".post-slider", 768, {
    slidesToShow: 2,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
})
initSliders(".reviews-slider", 768)