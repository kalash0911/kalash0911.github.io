new WOW().init();
const menuItems = document.querySelectorAll(".menu__item");
const videos = document.querySelectorAll("[video]");
const first_main_video = document.querySelector("[first_main_video]");
const second_main_video = document.querySelector("[second_main_video]");

changeMainVideo();

first_main_video.addEventListener("ended", function (e) {
    first_main_video.classList.add("hide_video");
    second_main_video.classList.remove("hide_video");
    second_main_video.play();
});

second_main_video.addEventListener("ended", function (e) {
    var currentIndex=getSectionState();
    if(!currentIndex){
        fullpage_api.moveSectionDown();
    }
    second_main_video.classList.add("hide_video");
    second_main_video.currentIndex = 0;
});

for (var index = 1; index < videos.length; index++) {
    var video = videos[index];
    video.addEventListener("ended", function (e) {
        fullpage_api.moveSectionDown();
    });
}

new fullpage("#fullpage", {
    navigation: false,
    scrollingSpeed: 1500,
    resetSliders: true,
    anchors: ["", "desktop_video", "phone_video", "", ""],
    afterLoad: function (origin, destination, direction) {
        if (destination.index !== 0) {
            showLoader(false);
        }
    },
    onLeave: function (origin, destination, direction, trigger) {
        const videos = document.querySelectorAll("[video]");
        for (let index = 0; index < videos.length; index++) {
            const video = videos[index];
            var currentIndex=getSectionState();
            if (index == currentIndex) {
                setTimeout(function () {
                    video.currentTime = 0;
                }, 1600);
            }

            if (origin.index === index) {
                if (!video.muted) {
                    video.muted = true;
                    var sound_turn = origin.item.querySelector(".sound_turn");
                    var sound_switch = origin.item.querySelector(".sound_switch");
                    sound_switch.style.display = "block";
                    sound_turn.style.display = "none";
                }
            }
        };

        setSectionState(destination.index);

        if (destination.index === 1) {
            showHeader(true);
        }

        if (destination.index === 0) {
            showHeader(false);
            var firstVideo = document.querySelector('[section="video1"]');
            firstVideo.classList.remove("video_block_full");
            second_main_video.classList.add("hide_video");
            first_main_video.classList.remove("hide_video");
            first_main_video.currentTime = 0;
            second_main_video.currentIndex = 0;
            first_main_video.play();
        }

        menuItems.forEach((menu) => {
            menu.classList.remove("menu_active_link");
            const a = menu.querySelector("a");
            if (a.href.endsWith({ toString: () => destination.anchor || 'index.html' })) {
                menu.classList.add("menu_active_link");
            }
        });
    },
});

document.addEventListener("DOMContentLoaded", function () {
    init();
});
var path = "./";
const sections = document.querySelectorAll("[section]");
const mainBlock = document.querySelector("#main");
const turnSounds = document.querySelectorAll("[turn-sound]");
const lastSection = document.querySelector(`[section="video3"]`);
const lastVideoSection = document.querySelector(`[section="video3"]`);
const header = document.querySelector("#header");
const copyCodeButton = document.querySelector("[copyCode]");
const body = document.querySelector(".main_body_section");
const mobilePosters = document.querySelectorAll("[poster_mobile]");
const mobile_buttons = document.querySelectorAll("[mobile_button]");
const loaderBlock = document.querySelector(".loader_block");

let userAgentString = navigator.userAgent;
let isSafari = userAgentString.indexOf("Safari") > -1;

function init() {
    showLoader(true);
    window.currentIndex = null;

    header.classList.add("header_transparent");

    if (isMobile()) {
        changeMainVideoForMobile();
        changeVideoForMobile();
        changeMobilePosters();
    }

    if (isMobile() && isSafari) {
        mobile_buttons.forEach((mobile_button) => {
            mobile_button.classList.add("safari_button");
        });
    }

    if (/phone_video/.test(location.href)) {
        showLoader(true);
        showHeader(true);
        videos[2].play();
    } else if (/desktop_video/.test(location.href)) {
        showLoader(true);
        showHeader(true);
        videos[1].play();
    }

    first_main_video.addEventListener("error", function (e) {
        showLoader(false);
        if (isMobile()) {
            first_main_video.setAttribute(
                "poster",
                "images/main_page/video_img_mobile_1.png"
            );
        } else {
            first_main_video.setAttribute(
                "poster",
                "images/main_page/video_img_1.png"
            );
        }
        showCopyCodeButton(true);
    });

    first_main_video.addEventListener('loadeddata', function() {
        showLoader(false);
    }, false);

    first_main_video.addEventListener(
        "timeupdate",
        function () {
            let firstVideoBlock = document.querySelector('[section="video1"]');
            if (first_main_video.currentTime > 0) {
                showLoader(false);
                showCopyCodeButton(true);
            }

            if (first_main_video.currentTime >= 3.5) {
                showCopyCodeButton(false);
                addFullVideo(true);
            }

            if (first_main_video.currentTime >= 14.8) {
                firstVideoBlock.classList.add("video-opacity");
            }

            if (first_main_video.currentTime >= 15.8) {
                firstVideoBlock.classList.remove("video-opacity");
                showHeader(true);
            }
        },
        false
    );
}

window.addEventListener(
    "resize",
    function () {
        if (isMobile()) {
            changeVideoForMobile();
        }
    },
    true
);

function showLoader(isShow) {
    if (isShow) {
        loaderBlock.classList.add("show_loader");
    } else {
        setTimeout(function () {
            loaderBlock.classList.remove("show_loader");
        }, 1000);
    }
}

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

function showCopyCodeButton(isShow) {
    if (isShow) {
        copyCodeButton.classList.remove("hide");
    } else {
        copyCodeButton.classList.add("hide");
    }
}

function addFullVideo(isFullVideo) {
    let firstVideo = document.querySelector('[section="video1"]');
    if (isFullVideo) {
        firstVideo.classList.add("video_block_full");
    } else {
        firstVideo.classList.remove("video_block_full");
    }
}

//video
function changeVideoForMobile() {
    for (let index = 1; index < videos.length; index++) {
        const video = videos[index];
        if (!video.src.includes("mobile")) {
                video.src = path + `files/main_video/video_${index+1}_mobile.mov`;
        }
    }
}

function changeMobilePosters() {
    mobilePosters.forEach((mobilePoster) => {
        let poster = mobilePoster.getAttribute("poster_mobile");
        mobilePoster.poster = poster;
    });
}

turnSounds.forEach((turn) => {
    turn.addEventListener("click", function () {
        let video = videos[getSectionState()];
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
    });
});

//header
function showHeader(isShow) {
    if (isShow) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

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
const slider = new Swiper(".our_work-slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,

    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },

    pagination: {
        el: ".nav-pag",
        type: "bullets",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.5,
        },
        1440: {
            slidesPerView: 2.5,
        },
        1920: {
            slidesPerView: 3.5,
        },
    },
});


var animateSoundTurnBlocks = document.querySelectorAll(".sound_turn");
animateSoundTurnBlocks.forEach((soundTurn) => {
    lottie.loadAnimation({
        container: soundTurn,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './files/robot.json'
    });
});

var animateSountSwitchBlocks = document.querySelectorAll(".sound_switch");
animateSountSwitchBlocks.forEach((soundSwitch) => {
    lottie.loadAnimation({
        container: soundSwitch,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './files/robot_still.json'
    });
});

function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase();
    const hasMediaCapabilities = !!(
        navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
    );
    const isSafari =
        ua.indexOf("safari") != -1 &&
        !(ua.indexOf("chrome") != -1) &&
        ua.indexOf("version/") != -1;
    const isiphone =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return (isSafari || isiphone) && hasMediaCapabilities;
}

function changeMainVideoForMobile(){
    if(supportsHEVCAlpha()){
        first_main_video.src ="files/main_video/video_1_part1_mobile.mov";
    }else{
        first_main_video.src ="files/main_video/video_1_part1_mobile.webm";
    }
    second_main_video.src ="files/main_video/video_1_part2_mobile.mov"
}

function changeMainVideo(){
    if(supportsHEVCAlpha()){
        first_main_video.src ="files/main_video/video_1_part1.mov";
    }else{
        first_main_video.src ="files/main_video/video_1_part1.webm";
    }
    second_main_video.src ="files/main_video/video_1_part2.mov"
}
