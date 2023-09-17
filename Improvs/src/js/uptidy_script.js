initCleanerSwiper();
initCustomerSwiper();
switchSlider();

function initCleanerSwiper() {
    const slider = new Swiper(".swiper_uptidy_cleaner", {
        speed: 1400,
        // slidesPerView: 1.6,
        centeredSlides: true,
        grabCursor: true,
        // spaceBetween: 80,
        loopedSlides: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            // clickable: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 40,
            },
            1024: {
                spaceBetween: 80,
                slidesPerView: 1.6,
            },
            1440: {
                spaceBetween: 80,
                slidesPerView: 2,
            },
        },
    });
}

function initCustomerSwiper() {
    const slider = new Swiper(".swiper_uptidy_customer", {
        speed: 1400,
        // slidesPerView: 1.6,
        centeredSlides: true,
        grabCursor: true,
        // spaceBetween: 80,
        loopedSlides: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            // clickable: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                spaceBetween: 40,
            },
            1024: {
                spaceBetween: 80,
                slidesPerView: 1.6,
            },
            1440: {
                spaceBetween: 80,
                slidesPerView: 2,
            },
        },
    });
}

function switchSlider() {
    const customerSwiper = document.querySelector(".swiper_uptidy_customer");
    const cleanerSwiper = document.querySelector(".swiper_uptidy_cleaner");
    const switchersList = document.querySelector(".switcher_wrap");
    const switchersItems = document.querySelectorAll(".switcher");
    const switcherArrow = document.querySelectorAll(".switch_arrow");

    switchersItems.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            switchersItems.forEach((item) => {
                item.classList.remove("activeSwitch");
            });
            element.classList.add("activeSwitch");

            if(element.classList.contains('customer')) {
                customerSwiper.style.display = 'block';
                cleanerSwiper.style.display = 'none';
            } else {
                customerSwiper.style.display = 'none';
                cleanerSwiper.style.display = 'block';
            }
        });
    });
 
}
