const swiper = new Swiper('.main-slider', {
    spaceBetween: 20,
    slidesPerView: 4.5,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    speed: 700,
    centerPadding: 0,
  
    mousewheel: {
      eventsTarget: ".main-slider",
    },
  
    autoplay: {
      delay: 1500,
    },
  
    breakpoints: {
  
      320: {
        slidesPerView: 1.75,
      },
  
      640: {
        slidesPerView: 2.5,
      },
  
      1025: {
        slidesPerView: 3.5,
      },
  
      1100: {
        slidesPerView: 4,
      },
  
      1250: {
        slidesPerView: 4.5,
      },
  
      1400: {
        slidesPerView: 5.2,
      }
    }
  
})