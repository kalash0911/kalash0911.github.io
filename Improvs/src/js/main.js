new WOW().init();

document.addEventListener('DOMContentLoaded', function () {
    init();
});
var path = "./";
const sections = document.querySelectorAll("[section]");
const mainBlock = document.querySelector("#main");
const videos = document.querySelectorAll('[video]');
const turnSounds = document.querySelectorAll('[turn-sound ]');
const lastSection = document.querySelector(`[section="video3"]`);
const lastVideoSection = document.querySelector(`[section="video3"]`);
const header = document.querySelector("#header");
const copyCodeButton = document.querySelector("[copyCode]");
const body = document.querySelector(".main_body_section");
const mobilePosters = document.querySelectorAll("[poster_mobile]");

function isSafari() {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return isSafari;
}

function init() {
    window.isDownScroll = false;
    window.currentIndex = null;
    window.body_lock = false;
    window.isScroling = false;

    header.classList.add("header_transparent");

    if (isMobile()) {
        changeVideoForMobile();
        changeMobilePosters();
    }

    if (isMobile() && isSafari()) {
        const video_btns_safari_1 = document.querySelectorAll(".video_btn_safari_1");
        const video_btns_safari_2 = document.querySelectorAll(".video_btn_safari_2");
        video_btns_safari_1.forEach((bottom_video_btn) => {
            bottom_video_btn.classList.add("safari_button_1");
        });

        video_btns_safari_2.forEach((bottom_video_btn) => {
            bottom_video_btn.classList.add("safari_button_2");
        });
    }

    if (/phone_video/.test(location.href)) {
        showHeader(true);
        videos[2].play();
        setSectionState(2);
    } else if (/desktop_video/.test(location.href)) {
        showHeader(true);
        videos[1].play()
        setSectionState(1);
    }

    let firstVideo = videos[0];

    firstVideo.addEventListener("error", function (e) {
        if (isMobile()) {
            firstVideo.setAttribute('poster', 'images/main_page/video_img_mobile_1.png')
        } else {
            firstVideo.setAttribute('poster', 'images/main_page/video_img_1.png')
        }
    });

    firstVideo.addEventListener('timeupdate', function () {
        let firstVideoBlock = document.querySelector("[section=\"video1\"]");
        if (firstVideo.currentTime >= 3.50000) {
            hideCopyCodeButton(true);
        }

        if (firstVideo.currentTime >= 15.00000) {
            firstVideoBlock.classList.add("video-opacity");
            showHeader(true);
        }

        if (firstVideo.currentTime >= 15.80000) {
            nextSlide();
            firstVideoBlock.classList.remove("video-opacity");
        }
    }, false);
}

window.addEventListener('resize', function () {
    if (isMobile()) {
        changeVideoForMobile();
    }
}, true);

function copyCode() {
    var jsCode = `<!DOCTYPE html>
    <head><title></title></head>
    <body>
    <svg id="mySvg" width="960" height="500"></svg>
    <script src="http://d3js.org/d3.v7.min.js"></script>
    <script src="http://d3js.org/topojson.v3.min.js"></script>
    <script>
    var width = 960, height = 500, svg = d3.select("svg");
    d3.json("https://raw.githubusercontent.com/org-scn-design-studio-" +
        "community/sdkcommunitymaps/master/geojson/Europe/Ukraine-regions.json"
    ).then(function (data) {
        var land = topojson.feature(data, data.objects.UKR_adm1),
            projection = d3.geoAlbers().rotate([-30, 0, 0])
                .fitSize([.9 * width, .9 * height], land),
            path = d3.geoPath().projection(projection);
        svg.selectAll("path").data(land.features).enter()
            .append("path").attr("d", path).attr("fill", "#FFD500')
            .attr("stroke", "#005BBB");
        svg.append("text").attr("x", (width / 2)).attr("y", height - (20))
            .attr("text-anchor", "middle").style("font-size", "24px")
            .style("fill", "#005BBB").text("Improvs");`;

    navigator.clipboard.writeText(jsCode);
}

function hideCopyCodeButton(isHide) {
    let firstVideo = document.querySelector("[section=\"video1\"]");
    if (isHide) {
        firstVideo.classList.add("video_block_full");
        copyCodeButton.classList.add("hide");
    } else {
        firstVideo.classList.remove("video_block_full");
        copyCodeButton.classList.remove("hide");
    }
}

//video
function changeVideoForMobile() {
    for (let index = 0; index < videos.length; index++) {
        const video = videos[index];
        if (!video.src.includes("mobile")) {
            video.src = path + `files/main_video/video_${index + 1}_mobile.mp4`;

        }
    }
}

function changeMobilePosters() {
    mobilePosters.forEach((mobilePoster) => {
        let poster = mobilePoster.getAttribute("poster_mobile");
        mobilePoster.poster = poster;
    });
}

turnSounds.forEach(turn => {
    turn.addEventListener('click', function () {
        let video = videos[getSectionState()]
        if (video) {
            video.muted = !video.muted;
            let sound_turn = turn.querySelector(".sound_turn");
            let sound_switch = turn.querySelector(".sound_switch");
            if (video.muted) {
                if (sound_turn) {
                    sound_turn.style.display = "none";
                    sound_switch.style.display = "block";
                }
            } else {
                if (sound_switch) {
                    sound_switch.style.display = "none";
                    sound_turn.style.display = "block";

                }
            }
        }
    })
});


for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    video.addEventListener('ended', function (e) {
        nextSlide();
        stopAllVideo();
        let nextIndex = index + 1;
        if (videos[nextIndex]) {
            safePlayVideo(nextIndex);
        }
    });
}

function safePlayVideo(Index) {
    let currentVideo = videos[Index];
    let isPlaying = currentVideo.currentTime == 0;
    if (isPlaying) {
        currentVideo.play();
    }
}

function stopAllVideo() {
    videos.forEach(video => {
        video.currentTime = 0;
        video.pause();
    });
}

function nextSlide() {
    if (window.body_lock) {
        return;
    }

    let index = getSectionState();
    if (index) {
        if (index <= sections.length - 2) {
            index = index + 1;

            if (index == 2) {
                stopAllVideo();
                safePlayVideo(2);
            }

            if (index == 3) {
                stopAllVideo();
            }

            let section = sections[index].getAttribute('section');

            scrollByElementName(section);
            setSectionState(index);
        }
    } else {
        showHeader(true);
        let section = sections[1].getAttribute('section');
        scrollByElementName(section);
        stopAllVideo();
        safePlayVideo(1);
        setSectionState(1);
    }
}

function previousSlide(isDownScroll = false) {
    if (window.body_lock) {
        return;
    }

    let index = getSectionState();
    if (index) {
        if (index > 0) {
            index = index - 1;

            if (index <= 2) {
                stopAllVideo();
                hideCopyCodeButton(false);
                safePlayVideo(index);
            }
            if (index == 0) {
                showHeader(false);
            }

            let section = sections[index].getAttribute('section');

            if (section === "video3" && isDownScroll) {
                function scrollToVideo() {
                    scrollByElementName(section);
                    window.removeEventListener('scrollend', scrollToVideo);
                }
                window.addEventListener('scrollend', scrollToVideo)
            }

            if (section == "video3" && !isDownScroll) {
                return;
            }

            scrollByElementName(section);
            setSectionState(index);
        }
    }
}

//scroll
function scrollByElementName(elementName) {
    let element = "";
    element = document.querySelector(`[section=${elementName}]`);
    if (!element) {
        return;
    }

    let scrollToValue = element.offsetTop;
    scrollToOffset(scrollToValue);
}

function scrollToOffset(offset) {
    window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: offset
    });
}

//sroll previous
let viewportOffsetLastSection = Math.abs(lastSection.getBoundingClientRect().bottom + (lastSection.offsetHeight - 50) + window.scrollY);
let viewportOffsetLastVideo = Math.abs(lastVideoSection.getBoundingClientRect().bottom + lastSection.offsetHeight + window.scrollY);
window.addEventListener("scroll", function () {
    let viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;

    if (window.body_lock) {
        return;
    }

    if (viewedPageHeight >= viewportOffsetLastVideo) {
        header.classList.remove("header_transparent");
    } else {
        header.classList.add("header_transparent");
    }
    if (viewedPageHeight <= (viewportOffsetLastSection) && window.isDownScroll) {
        window.isDownScroll = false;
        body.style.overflowY = "hidden";
        previousSlide(true);
    }
    if (viewedPageHeight >= viewportOffsetLastVideo && !isDownScroll) {
        body.style.overflowY = "auto";
        window.isDownScroll = true;
    }


    //menu hover
    let main = document.querySelector("[section=\"video1\"]");
    let website = document.querySelector("[section=\"video2\"]");
    let mobileApplication = document.querySelector("[section=\"video3\"]");
    let work = document.querySelector("[section=\"work\"]");

    let viewportOffsetMain = Math.abs(main.getBoundingClientRect().top + window.scrollY);
    let viewportOffsetWebsite = Math.abs(website.getBoundingClientRect().top + window.scrollY);
    let viewportOffMobileAppication = Math.abs(mobileApplication.getBoundingClientRect().top + window.scrollY);
    let viewportOffWork = Math.abs(work.getBoundingClientRect().top + window.scrollY);

    if (viewedPageHeight >= viewportOffsetMain && viewedPageHeight <= viewportOffMobileAppication) {
        cleanHoverMenu();
        menuItems[1].classList.add("menu_active_link");
    } else if (viewedPageHeight >= viewportOffsetWebsite && viewedPageHeight < viewportOffWork) {
        cleanHoverMenu();
        menuItems[2].classList.add("menu_active_link");
    } else if (viewedPageHeight >= viewportOffWork) {
        cleanHoverMenu();
        menuItems[3].classList.add("menu_active_link");
    }

    window.isScroling = true;
    setTimeout(() => window.isScroling = false, 500);
});


//header
function showHeader(isShow) {
    if (isShow) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

//touch
let eventTouch = null;
document.addEventListener("touchstart", function (e) {
    eventTouch = e;
});

document.addEventListener("touchmove", function (e) {
    if (eventTouch) {
        let position = (e.touches[0].pageY - eventTouch.touches[0].pageY);
        eventTouch = null;
        if (position > 0) {
            previousSlide();
        } else {
            nextSlide();
        }
    }
});

document.addEventListener("touched", function (e) {
    eventTouch = null;
});

//touch desktop
var event = null;
document.addEventListener("mousedown", function (e) {
    event = e;
});

document.addEventListener("mousemove", function (e) {
    if (event) {
        let position = (e.screenY - event.screenY);
        event = null;
        if (position > 0) {
            previousSlide();
        } else {
            nextSlide();
        }
    }
});

document.addEventListener("mouseup", function (e) {
    event = null;
});

//mouse wheel event
var delayWheel = true;
document.addEventListener('wheel', function (event) {
    if (delayWheel === true) {
        delayWheel = false;
        if (event.deltaY > 0) {
            nextSlide();
        } else {
            previousSlide();
        }

        setTimeout(function () {
            delayWheel = true;
        }, 1000);
    }
});


//state
function setSectionState(index) {
    window.currentIndex = index;
}

function getSectionState() {
    var state = window.currentIndex;
    if (state) {
        return state;
    } else {
        return null;
    }
}

//OURWORK
const slider = new Swiper(".case_swiper", {
    speed: 4500,
    // loop: true,
    spaceBetween: 20,
    // freeMode: true,
    centeredSlides: false,
    preventInteractionOnTransition: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            slidesPerView: 1.15,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.3,
        },
        1440: {
            slidesPerView: 1.5,
        },
        1920: {
            slidesPerView: 2.2,
        },
    },
    on: {
        init() {
            this.autoplay.stop();

            this.el.addEventListener('mousemove', () => {
                if (!window.isScroling) {
                    this.autoplay.start();
                }
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.stop();
            });
        }
    }
});
