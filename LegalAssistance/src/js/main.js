// for header

findHref()
initTabs();

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
const overflow = document.querySelector(".overflow");

if (burger) {
    burger.addEventListener("click", function (e) {
        document.body.classList.toggle("body_lock");
        document.body.classList.toggle("active");
        if (burger.classList.contains("burger_active")) {
            burger.classList.add("burger_finish");
            burger.classList.remove("burger_active");
            overflow.classList.toggle("overflow_active");
        } else {
            burger.classList.add("burger_active");
            burger.classList.remove("burger_finish");
            overflow.classList.toggle("overflow_active");
        }
        menuBody.classList.toggle("menu_active");
    });
}

if (overflow) {
    overflow.addEventListener("click", function (e) {
        document.body.classList.toggle("body_lock");
        document.body.classList.toggle("active");
        if (burger.classList.contains("burger_active")) {
            burger.classList.add("burger_finish");
            burger.classList.remove("burger_active");
            overflow.classList.toggle("overflow_active");
        } else {
            burger.classList.add("burger_active");
            burger.classList.remove("burger_finish");
            overflow.classList.toggle("overflow_active");
        }
        menuBody.classList.toggle("menu_active");
    });
}

if (linkClose.length) {
    for (var i = 0; i < linkClose.length; ++i) {
        linkClose[i].addEventListener("click", function (e) {
            document.body.classList.remove("body_lock");
            document.body.classList.remove("active");
            burger.classList.remove("burger_active");
            burger.classList.add("burger_finish");
            menuBody.classList.remove("menu_active");
            overflow.classList.remove("overflow_active");
        });
    }
}

function initTabs() {
    const faqTabs = document.querySelector("#faqTabs");

    if (!faqTabs) return;

    const tabs = document.querySelectorAll(".tab_title"),
        tabsContent = document.querySelectorAll(".tab_content"),
        tabsParent = document.querySelector(".tab_wrapper"),
        closeItem = document.querySelectorAll(".open_status");

    function showTabContent(i = 0) {
        tabsContent[i].classList.toggle("show");
        tabs[i].classList.toggle("tab_active");
        closeItem[i].classList.toggle("open_active");
    }

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tab_title")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });
        }
    });
}

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
        ...obj,
    };

    const win = window;
    const sliderSelector = document.querySelector(selector);
    let swiper = new Swiper(selector, init);

    const toggleInit = () => {
        const neededWidth = moreThan
            ? win.innerWidth >= width
            : win.innerWidth <= width;
        if (neededWidth) {
            if (!sliderSelector?.classList.contains("swiper-initialized")) {
                swiper = new Swiper(selector, init);
            }
        } else if (sliderSelector.classList.contains("swiper-initialized")) {
            swiper.destroy();
        }
    };

    ["load", "resize"].forEach((evt) =>
        win.addEventListener(evt, toggleInit, false)
    );
}

destroySlidersOnResize(".news_swiper", 9999, {
    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
        },
    },
});

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(
            " active_tab",
            ""
        );
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active_tab";
}


function findHref() {
    let element = document.getElementById("menu").getElementsByTagName("a");
    let url = window.location.href;
    for (let i = 0; i < element.length; i++) {
        if (url === element[i].href) {
            element[i].classList.add("item_active");
        }
    }
}


ScrollTrigger.create({
    trigger: ".tabsNav",
    toggleClass: "active_scrollMenu",
    start: "top top+=20px",
    endTrigger: "#footer",
    end: `${footer.clientHeight} bottom`,
    pin: true,
    pinSpacing: false,
    scrub: 1,
  });