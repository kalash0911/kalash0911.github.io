

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



var swiper = new Swiper('.main-swiper', {
    init: false,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },

        570: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1000: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        1150: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

if (document.body.classList.contains('_touch')) {
    swiper.init()
}


// const qwe = new Swiper('.main-swiper', {
//     // Optional parameters
//     init: false,
//     loop: false,
//     slidesPerView: 4
// });

// if (document.body.classList.contains('_pc')) {
//     qwe.init()
// }

var swiper = new Swiper('.portfolio-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
        },

        630: {
          slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
        
        1225: {
            slidesPerView: 4,
        }
    }
});