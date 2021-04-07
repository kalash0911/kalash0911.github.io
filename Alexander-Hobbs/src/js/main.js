jQuery(function() {
});

$(document).ready(function() {
    $('.burger').click(function(event){
        event.preventDefault()
        $('body').toggleClass('body-lock');
        $('.burger').toggleClass('burger-active');
        $('.header-nav').toggleClass('header-nav-active');
        $('.header-logo').toggleClass('header-logo-active');
    });
});
 
new BeerSlider(document.getElementById('slider'));

new Swiper('.slider-cub', {
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

new Swiper('.slider-events', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 2,
        },

        580: {
            slidesPerView: 3,
        },

        767: {
            slidesPerView: 4,
        },
    },
});

new Swiper('.slider-img', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 40,
    slidesPerView: 1,
    speed: 1000,

    thumbs: {
        swiper: {
            el: '.slider-text',
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
    },
});

new Swiper('.slider-news', {
    speed: 1000,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
/* 
$(document).ready(function(){
	$("#header, #footer").on("click","a[data-goto]", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
}); */