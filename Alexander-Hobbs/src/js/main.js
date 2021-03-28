jQuery(function() {
});
 
new BeerSlider(document.getElementById('slider'));

const swiper = new Swiper('.slider-cub', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'cube',
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    speed: 1000,
});