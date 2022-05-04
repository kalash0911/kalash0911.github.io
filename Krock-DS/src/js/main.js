jQuery(function () {
    initMaps();
});

let greeting = () => console.log("Hi!");

$(document).ready(function () {
    $('.get-for-btn').click(function (event) {
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.get-for').toggleClass('get-for-visible');
    });
});

$(document).ready(function () {
    $('.order-now').click(function (event) {
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.order').toggleClass('order-visible');
    });
});

$(document).ready(function () {
    $('.pricepopup-btn').click(function (event) {
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.pricepopup').toggleClass('pricepopup-visible');
    });
});

$(document).ready(function () {
    $('.burger').click(function (event) {
        event.preventDefault()
        $('.burger').toggleClass('burger-active');
        $('.header').toggleClass('header-active');
    });
});

function initMaps() {
    let mapLinks = document.querySelectorAll('.map-link');

    mapLinks.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let map = document.getElementById('map');
            let mapSrc = map.getAttribute('src');
            if (mapSrc !== el.dataset.src) {
                changeSrc('map', el.dataset.src);
            }
        })
    })
}

function changeSrc(id, src) {
    document.getElementById(id).src = src;
}

window.onscroll = function () {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 50) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}

new Swiper('.mob-swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'coverflow',
    autoHeight: true,
    speed: 1000,
});

new Swiper('.challange-swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'slide',
    autoHeight: true,
    speed: 1000,
});

