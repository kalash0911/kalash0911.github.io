"use strict";

new WOW().init();
new fullpage("#fullpage", {
  dropEffect: true,
  // dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
  // anchors: ["section1", "section2", "section3"], // якори для навигации
  navigation: false,
  // показывать навигацию
  scrollingSpeed: 1500,
  // sectionSelector: '.section',
  // navigationTooltips: ["Секция 1", "Секция 2", "Секция 3"],
  afterLoad: function afterLoad(origin, destination, direction) {
    var videos = document.querySelectorAll("[video]");

    for (var index = 0; index < videos.length; index++) {
      var video = videos[index];
      video.addEventListener("ended", function (e) {
        fullpage_api.moveSectionDown();
      });
    }
  }
}); // document.addEventListener("DOMContentLoaded", function () {
//     init();
// });
// var path = "./";
// const sections = document.querySelectorAll("[section]");
// const mainBlock = document.querySelector("#main");
// const turnSounds = document.querySelectorAll("[turn-sound ]");
// // const lastSection = document.querySelector(`[section="video3"]`);
// // const lastVideoSection = document.querySelector(`[section="video3"]`);
// const header = document.querySelector("#header");
// const copyCodeButton = document.querySelector("[copyCode]");
// const body = document.querySelector(".main_body_section");
// const mobilePosters = document.querySelectorAll("[poster_mobile]");
// const mobile_buttons = document.querySelectorAll("[mobile_button]");
// const loaderBlock = document.querySelector(".loader_block");
// let userAgentString = navigator.userAgent;
// let isSafari = userAgentString.indexOf("Safari") > -1;
// function init() {
//     window.isDownScroll = false;
//     window.currentIndex = null;
//     window.body_lock = false;
//     window.isScroling = false;
//     header.classList.add("header_transparent");
//     if (isMobile()) {
//         changeVideoForMobile();
//         changeMobilePosters();
//     }
//     if (isMobile() && isSafari) {
//         mobile_buttons.forEach((mobile_button) => {
//             mobile_button.classList.add("safari_button");
//         });
//     }
//     if (/phone_video/.test(location.href)) {
//         showLoader(true);
//         showHeader(true);
//         videos[2].play();
//         setSectionState(2);
//     } else if (/desktop_video/.test(location.href)) {
//         showLoader(true);
//         showHeader(true);
//         videos[1].play();
//         setSectionState(1);
//     }
//     /*
//         let firstVideo = videos[0];
//         firstVideo.addEventListener("error", function (e) {
//             if (isMobile()) {
//                 firstVideo.setAttribute('poster', 'images/main_page/video_img_mobile_1.png')
//             } else {
//                 firstVideo.setAttribute('poster', 'images/main_page/video_img_1.png')
//             }
//             showCopyCodeButton(true);
//         }); */
//     firstVideo.addEventListener(
//         "timeupdate",
//         function () {
//             let firstVideoBlock = document.querySelector('[section="video1"]');
//             if (firstVideo.currentTime > 0) {
//                 showCopyCodeButton(true);
//             }
//             if (firstVideo.currentTime >= 3.5) {
//                 showCopyCodeButton(false);
//                 addFullVideo(true);
//             }
//             if (firstVideo.currentTime >= 15.0) {
//                 firstVideoBlock.classList.add("video-opacity");
//                 showHeader(true);
//             }
//             if (firstVideo.currentTime >= 15.8) {
//                 nextSlide();
//                 firstVideoBlock.classList.remove("video-opacity");
//             }
//         },
//         false
//     );
// }
// window.addEventListener(
//     "resize",
//     function () {
//         if (isMobile()) {
//             changeVideoForMobile();
//         }
//     },
//     true
// );
// function showLoader(isShow) {
//     if (isShow) {
//         loaderBlock.classList.add("show_loader");
//     } else {
//         setTimeout(function () {
//             loaderBlock.classList.remove("show_loader");
//         }, 1000);
//     }
// }
// function copyCode() {
//     var jsCode = `<!DOCTYPE html>
//     <head><title></title></head>
//     <body>
//     <svg id="mySvg" width="960" height="500"></svg>
//     <script src="http://d3js.org/d3.v7.min.js"></script>
//     <script src="http://d3js.org/topojson.v3.min.js"></script>
//     <script>
//     var width = 960, height = 500, svg = d3.select("svg");
//     d3.json("https://raw.githubusercontent.com/org-scn-design-studio-" +
//         "community/sdkcommunitymaps/master/geojson/Europe/Ukraine-regions.json"
//     ).then(function (data) {
//         var land = topojson.feature(data, data.objects.UKR_adm1),
//             projection = d3.geoAlbers().rotate([-30, 0, 0])
//                 .fitSize([.9 * width, .9 * height], land),
//             path = d3.geoPath().projection(projection);
//         svg.selectAll("path").data(land.features).enter()
//             .append("path").attr("d", path).attr("fill", "#FFD500')
//             .attr("stroke", "#005BBB");
//         svg.append("text").attr("x", (width / 2)).attr("y", height - (20))
//             .attr("text-anchor", "middle").style("font-size", "24px")
//             .style("fill", "#005BBB").text("Improvs");`;
//     navigator.clipboard.writeText(jsCode);
// }
// function showCopyCodeButton(isShow) {
//     if (isShow) {
//         copyCodeButton.classList.remove("hide");
//     } else {
//         copyCodeButton.classList.add("hide");
//     }
// }
// function addFullVideo(isFullVideo) {
//     let firstVideo = document.querySelector('[section="video1"]');
//     if (isFullVideo) {
//         firstVideo.classList.add("video_block_full");
//     } else {
//         firstVideo.classList.remove("video_block_full");
//     }
// }
// //video
// function changeVideoForMobile() {
//     for (let index = 0; index < videos.length; index++) {
//         const video = videos[index];
//         if (!video.src.includes("mobile")) {
//             video.src = path + `files/main_video/video_${index + 1}_mobile.mp4`;
//         }
//     }
// }
// function changeMobilePosters() {
//     mobilePosters.forEach((mobilePoster) => {
//         let poster = mobilePoster.getAttribute("poster_mobile");
//         mobilePoster.poster = poster;
//     });
// }
// turnSounds.forEach((turn) => {
//     turn.addEventListener("click", function () {
//         let video = videos[getSectionState()];
//         if (video) {
//             video.muted = !video.muted;
//             let sound_turn = turn.querySelector(".sound_turn");
//             let sound_switch = turn.querySelector(".sound_switch");
//             if (video.muted) {
//                 if (sound_turn) {
//                     sound_turn.style.display = "none";
//                     sound_switch.style.display = "block";
//                 }
//             } else {
//                 if (sound_switch) {
//                     sound_switch.style.display = "none";
//                     sound_turn.style.display = "block";
//                 }
//             }
//         }
//     });
// });
// for (let index = 0; index < videos.length; index++) {
//     const video = videos[index];
//     video.addEventListener("ended", function (e) {
//         nextSlide();
//     });
// }
// function nextSlide() {
//     if (window.body_lock) {
//         return;
//     }
//     let index = getSectionState();
//     if (index) {
//         if (index <= sections.length - 2) {
//             index = index + 1;
//             if (index == 2) {
//                 videos[1].pause();
//                 videos[2].currentTime = 0;
//                 videos[2].play();
//             }
//             if (index == 3) {
//                 videos[2].pause();
//             }
//             let section = sections[index].getAttribute("section");
//             if (section === "work" && isMobile()) {
//                 body.style.overflowY = "auto";
//             }
//             scrollByElementName(section);
//             setSectionState(index);
//         }
//     } else {
//         showHeader(true);
//         let section = sections[1].getAttribute("section");
//         scrollByElementName(section);
//         videos[0].pause();
//         videos[1].currentTime = 0;
//         videos[1].play();
//         setSectionState(1);
//     }
// }
// function previousSlide(isDownScroll = false) {
//     if (window.body_lock) {
//         return;
//     }
//     console.log("function previousSlide");
//     let index = getSectionState();
//     if (index) {
//         if (index > 0) {
//             index = index - 1;
//             if (index <= 2) {
//                 showCopyCodeButton(false);
//                 addFullVideo(false);
//             }
//             if (index == 0) {
//                 showHeader(false);
//                 videos[1].pause();
//                 videos[0].currentTime = 0;
//                 videos[0].play();
//             }
//             if (index == 1) {
//                 videos[2].pause();
//                 videos[1].currentTime = 0;
//                 videos[1].play();
//             }
//             if (index == 2) {
//                 videos[2].currentTime = 0;
//                 videos[2].play();
//             }
//             let section = sections[index].getAttribute("section");
//             if (section === "video3" && isDownScroll) {
//                 function scrollToVideo() {
//                     scrollByElementName(section);
//                     window.removeEventListener("scrollend", scrollToVideo);
//                 }
//                 window.addEventListener("scrollend", scrollToVideo);
//             }
//             if (section == "video3" && !isDownScroll) {
//                 return;
//             }
//             scrollByElementName(section);
//             setSectionState(index);
//         }
//     }
// }
//scroll

/* function scrollByElementName(elementName) {
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
} */
//sroll previous

/* let viewportOffsetLastSection = Math.abs(lastSection.getBoundingClientRect().bottom + (lastSection.offsetHeight) + window.scrollY);
let viewportOffsetLastVideo = Math.abs(lastVideoSection.getBoundingClientRect().bottom + (lastSection.offsetHeight) + window.scrollY);
let plusMobileVievPort = 0;
let minusMobileVievPort = 50;

window.addEventListener("scroll", function () {
    let viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;

    if (isMobile()) {
        plusMobileVievPort = 150;
    }

    if (window.body_lock) {
        return;
    }

    if (viewedPageHeight >= viewportOffsetLastVideo) {
        header.classList.remove("header_transparent");
    } else {
        header.classList.add("header_transparent");
    }
    if ((viewedPageHeight + plusMobileVievPort) <= (viewportOffsetLastSection - minusMobileVievPort) && window.isDownScroll) {
        window.isDownScroll = false;
        body.style.overflowY = "hidden";
        previousSlide(true);
    }
    if (viewedPageHeight + plusMobileVievPort >= viewportOffsetLastVideo && !isDownScroll) {
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
        showLoader(false);
    } else if (viewedPageHeight >= viewportOffsetWebsite) {
        cleanHoverMenu();
        menuItems[2].classList.add("menu_active_link");
        showLoader(false);
    } else if (viewedPageHeight >= viewportOffWork) {
        cleanHoverMenu();
        menuItems[3].classList.add("menu_active_link");
    }

    window.isScroling = true;
    setTimeout(() => window.isScroling = false, 500);
}); */
//header
// function showHeader(isShow) {
//     if (isShow) {
//         header.classList.add("active");
//     } else {
//         header.classList.remove("active");
//     }
// }
// //touch
// let eventTouch = null;
// document.addEventListener("touchstart", function (e) {
//     eventTouch = e;
// });
// document.addEventListener("touchmove", function (e) {
//     if (eventTouch) {
//         let position = e.touches[0].pageY - eventTouch.touches[0].pageY;
//         eventTouch = null;
//         if (position > 0) {
//             previousSlide();
//         } else {
//             nextSlide();
//         }
//     }
// });
// document.addEventListener("touched", function (e) {
//     eventTouch = null;
// });
// //touch desktop
// var event = null;
// document.addEventListener("mousedown", function (e) {
//     event = e;
// });
// document.addEventListener("mousemove", function (e) {
//     if (event) {
//         let position = e.screenY - event.screenY;
//         event = null;
//         if (position > 0) {
//             previousSlide();
//         } else {
//             nextSlide();
//         }
//     }
// });
// document.addEventListener("mouseup", function (e) {
//     event = null;
// });
// //mouse wheel event
// var delayWheel = true;
// document.addEventListener("wheel", function (event) {
//     if (delayWheel === true) {
//         console.log("event wheel");
//         delayWheel = false;
//         if (event.deltaY > 0) {
//             console.log("event wheel nextSlide");
//             nextSlide();
//         } else {
//             console.log("event wheel previousSlide");
//             previousSlide();
//         }
//         setTimeout(function () {
//             delayWheel = true;
//         }, 2000);
//     }
// });
// //state
// function setSectionState(index) {
//     window.currentIndex = index;
// }
// function getSectionState() {
//     var state = window.currentIndex;
//     if (state) {
//         return state;
//     } else {
//         return null;
//     }
// }
// //OURWORK

var slider = new Swiper(".our_work-slider", {
  slidesPerView: 1.5,
  spaceBetween: 20
});
//# sourceMappingURL=main.js.map
