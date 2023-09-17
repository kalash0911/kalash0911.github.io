new WOW().init();
initBurger();

// Video controls
initVideoPlayers();
popUpVideo();

function initVideoPlayers() {
    const closeElem = document.querySelector(".course-section .closeElem");
    const videoWraps = document.querySelectorAll(".video-wrap");
    videoWraps?.forEach((videoWrap) => {
        const video = videoWrap.querySelector(".video");
        const playButton = videoWrap.querySelector(".play-button");

        //Play and Pause button
        playButton.addEventListener("click", (e) => {
            if (video.paused) {
                video.play();
                videoWrap.classList.toggle("active");
            } else {
                initPause();
            }
        });

        function initPause() {
            video.pause();
            videoWrap.classList.toggle("active");
        }

        closeElem.addEventListener("click", () => {
            initPause();
        });

        function removeClassOnEscape(event) {
            if (event.key === "Escape") {
                initPause();
            }
        }

        document.addEventListener("keydown", removeClassOnEscape);
    });
}

/* castom anim */
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("show");
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".anim");
for (let elm of elements) {
    observer.observe(elm);
}

// For counter animate
if (document.querySelectorAll(".count-progress").length) {
    // создаем экземпляр Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // если элемент стал видимым и его анимация еще не проигрывалась, запускаем анимацию
            if (
                entry.isIntersecting &&
                entry.target.getAttribute("data-animated") === "false"
            ) {
                const element = entry.target;
                const count = parseInt(element.innerText);
                let currentCount = 0;
                const speed =
                    parseInt(element.getAttribute("data-speed")) || 10; // считываем значение атрибута "data-speed" или устанавливаем значение по умолчанию
                const step = parseInt(element.getAttribute("data-step")) || 1; // считываем значение атрибута "data-step" или устанавливаем значение по умолчанию
                const interval = setInterval(() => {
                    if (currentCount < count) {
                        currentCount += step;
                        if (currentCount > count) {
                            currentCount = count;
                        }
                        element.innerText = currentCount;
                    } else {
                        clearInterval(interval);
                        element.setAttribute("data-animated", "true"); // устанавливаем атрибут "data-animated" в значение "true"
                    }
                }, speed);
            }
        });
    });

    // добавляем каждый элемент с классом "count-progress" в Observer
    document.querySelectorAll(".count-progress").forEach((element) => {
        observer.observe(element);
    });
}

// For Paralax
window.addEventListener("scroll", function () {
    const section = document.getElementById("paralax-sc");
    const paralax = document.querySelector(".paralax");
    const windowHeight = window.innerHeight;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionBottom <= windowHeight && sectionBottom >= 0) {
        const translateY = Math.max(
            0,
            ((sectionBottom - windowHeight) / -windowHeight) * 50
        );
        paralax.style.transform = `translateY(${translateY}%)`;
    }
});

function initBurger() {
    const btnBurger = document.querySelector(".header_burger");
    if (!btnBurger) {
        return;
    }
    const menuBurger = document.querySelector(".nav");

    document.addEventListener("click", function (event) {
        if (btnBurger.contains(event.target)) {
            menuBurger.classList.toggle("nav_active");
            btnBurger.classList.toggle("burger_active");
            document.body.classList.toggle("body_lock");
            return;
        }
        if (!menuBurger.contains(event.target)) {
            menuBurger.classList.remove("nav_active");
            btnBurger.classList.remove("burger_active");
            document.body.classList.remove("body_lock");
        }
    });
}

function popUpVideo() {
    const videoElement = document.querySelectorAll(".video");
    const videoWrap = document.querySelectorAll(".video-wrap");
    const container = document.querySelector(".videoBG");
    const box = document.querySelectorAll(".circle-box");
    const circleWrap = document.querySelectorAll(".circle-wrap");
    const playBTn = document.querySelectorAll(".play-btn");
    const closeElem = document.querySelector(".closeElem");

    playBTn.forEach((button, i) => {
        button.addEventListener("click", () => {
            button.classList.add("activeBtn");
            videoWrap[i].classList.add("activeWrap");
            box[i].classList.add("activeBox");
            circleWrap[i].classList.add("activecircleWrap");
            videoElement[i].setAttribute("controls", "");
            container.classList.add("activeContainer");
            document.body.classList.add("video_lock");
            closeElem.classList.add("activecloseElem");
        });
    });

    function removeClasses() {
        playBTn.forEach((button) => {
            button.classList.remove("activeBtn");
        });
        videoWrap.forEach((itemWrap) => {
            itemWrap.classList.remove("activeWrap");
        });
        box.forEach((box) => {
            box.classList.remove("activeBox");
        });
        circleWrap.forEach((itemCircle) => {
            itemCircle.classList.remove("activecircleWrap");
        });
        container.classList.remove("activeContainer");
        document.body.classList.remove("video_lock");
        closeElem.classList.remove("activecloseElem");
    }

    closeElem.addEventListener("click", () => {
        removeClasses();
    });

    function removeClassOnEscape(event) {
        if (event.key === "Escape") {
            removeClasses();
        }
    }

    document.addEventListener("keydown", removeClassOnEscape);
}
