new WOW().init();

let sliderMain = new Swiper(".swiper_smile", {
    speed: 1400,
    slidesPerView: 1.9,
    centeredSlides: true,
    grabCursor: true,
    loopedSlides: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            pagination: {
                dynamicBullets: true,
            },
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            pagination: {
                dynamicBullets: true,
            },
        },
        768: {
            slidesPerView: 1.8,
            spaceBetween: 20,
            pagination: {
                dynamicBullets: false,
            },
        },
        1024: {
            slidesPerView: 1.9,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 1.9,
            spaceBetween: 80,
        },
        1440: {
            slidesPerView: 2.2,
            spaceBetween: 80,
        },
        1620: {
            slidesPerView: 2.5,
            spaceBetween: 80,
        },
        1920: {
            slidesPerView: 2.8,
            spaceBetween: 80,
        },
        2220: {
            slidesPerView: 3.2,
            spaceBetween: 80,
        },
        2560: {
            slidesPerView: 3.5,
            spaceBetween: 80,
        },
        2860: {
            slidesPerView: 3.8,
            spaceBetween: 80,
        },
        3160: {
            slidesPerView: 4.1,
            spaceBetween: 80,
        },
        3460: {
            slidesPerView: 4.4,
            spaceBetween: 80,
        },
        3760: {
            slidesPerView: 4.7,
            spaceBetween: 80,
        },
        4060: {
            slidesPerView: 5.3,
            spaceBetween: 80,
        },
        4360: {
            slidesPerView: 5.6,
            spaceBetween: 80,
        },
        4660: {
            slidesPerView: 5.9,
            spaceBetween: 80,
        },
        4960: {
            slidesPerView: 6.2,
            spaceBetween: 80,
        },
    },
});

let sliderMainText = new Swiper(".swiper_smile_text", {
    speed: 1400,
    slidesPerView: 1,
});

sliderMain.controller.control = sliderMainText;

let sliderPhoto = new Swiper(".swiper_photo", {
    speed: 1400,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 20,
    loopedSlides: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
        },
        480: {
            slidesPerView: 1.9,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 3.3,
        },
        1440: {
            slidesPerView: 3.6,
        },
        1620: {
            slidesPerView: 3.9,
        },
        1920: {
            slidesPerView: 4.2,
        },
        2220: {
            slidesPerView: 4.5,
        },
        2560: {
            slidesPerView: 4.8,
        },
        2860: {
            slidesPerView: 5.1,
        },
        3160: {
            slidesPerView: 5.4,
        },
        3460: {
            slidesPerView: 5.7,
        },
        3760: {
            slidesPerView: 6,
        },
        4060: {
            slidesPerView: 6.3,
        },
        4360: {
            slidesPerView: 6.6,
        },
        4660: {
            slidesPerView: 6.9,
        },
        4960: {
            slidesPerView: 7.2,
        },
    },
});
