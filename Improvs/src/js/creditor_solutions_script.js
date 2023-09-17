const slider = new Swiper(".swiper_creditor", {
    speed: 1400,
    // slidesPerView: 1.6,
    centeredSlides: true,
    grabCursor: true,
    // spaceBetween: 80,
    loopedSlides: 1,
    loop: true,
    autoplay:true,
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        768: {
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 80,
            slidesPerView: 1.6,
        },
        1024: {
            spaceBetween: 80,
            slidesPerView: 2,
        },
    },
});
