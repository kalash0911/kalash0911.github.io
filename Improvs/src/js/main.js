
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


function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

    if (window.innerWidth <= 768) {
        check = true;
    }
    return check;
};

function isSafari() {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return isSafari;
}

function init() {
    window.isDownScroll = false;
    window.currentIndex = null;
    window.body_lock = false;
    showHeader(false);

    if (isMobile()) {
        changeVideoForMobile();
    }

    if (isMobile() && isSafari()) {
        const bottom_video_btns = document.querySelectorAll(".bottom_video_btn");
        bottom_video_btns.forEach((bottom_video_btn) => {
            bottom_video_btn.classList.add("safari_button");
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
    firstVideo.addEventListener('timeupdate', function () {
        if (firstVideo.currentTime >= 3.50000) {
            hideCopyCodeButton(true);
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
    if (isHide) {
        copyCodeButton.classList.add("hide");
    } else {
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

turnSounds.forEach(turn => {
    turn.addEventListener('click', function () {
        let video = videos[getSectionState()]
        let img = turn.querySelector('img');
        if (video) {
            video.muted = !video.muted;
            if (video.muted) {
                img.src = path + '/images/main_page/sound_switch.svg';
            } else {
                img.src = path + '/images/main_page/sound_turn.svg';
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

function safePlayVideo(Index){
    let currentVideo = videos[Index];
    let isPlaying = currentVideo.currentTime > 0 && !currentVideo.paused && !currentVideo.ended && currentVideo.readyState > currentVideo.HAVE_CURRENT_DATA;
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
            if (section === "work") {
                var body = document.querySelector(".main_body_section");
                body.style.overflowY = "auto";
            }

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
window.addEventListener("scroll", function () {
    let body = document.querySelector(".main_body_section");

    if (window.body_lock) {
        return;
    }

    let viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;
    let viewportOffsetLastSection = Math.abs(lastSection.getBoundingClientRect().bottom + lastSection.offsetHeight + window.scrollY);
    let viewportOffsetLastVideo = Math.abs(lastVideoSection.getBoundingClientRect().bottom + lastSection.offsetHeight + window.scrollY);
    if (viewedPageHeight >= viewportOffsetLastVideo) {
        header.classList.remove("header_transparent");
    } else {
        header.classList.add("header_transparent");
    }
    if (viewedPageHeight <= viewportOffsetLastSection && window.isDownScroll) {
        window.isDownScroll = false;
        previousSlide(true);
        body.style.overflowY = "hidden";
    }
    if (viewedPageHeight >= viewportOffsetLastSection) {
        window.isDownScroll = true;
    }
});


//header
function showHeader(isShow) {
    if (isShow) {
        header.style.display = "block";
    } else {
        header.style.display = "none";
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
    loop: true,
    speed: 2000,
    slidesPerView: 1.3,
    autoplay: {
        delay: 1000,
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

            this.el.addEventListener('mouseenter', () => {
                this.autoplay.start();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.stop();
            });
        }
    }
});


//our project section
let sliderSection = document.querySelector('.circle_main_block');
const cursor = document.querySelector(".cursor");

const mouseMove = function (e) {
    let x = e.pageX;
    let y = e.pageY - 3050;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};

const mouseLeave = function (e) {
    sliderSection.classList.remove("cursor_custom");
    cursor.style.display = 'none';
};

const mouseEnter = function (e) {
    sliderSection.classList.add("cursor_custom");
    cursor.style.display = 'block';
};

sliderSection.addEventListener("mousemove", mouseMove);
sliderSection.addEventListener("mouseleave", mouseLeave);
sliderSection.addEventListener("mouseout", mouseEnter);