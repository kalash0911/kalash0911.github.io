"use strict";

new WOW().init();
var menuItems = document.querySelectorAll(".menu__item");
var videos = document.querySelectorAll("[video]");

for (var index = 0; index < videos.length; index++) {
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
  afterLoad: function afterLoad(origin, destination, direction) {
    showLoader(false);
  },
  onLeave: function onLeave(origin, destination, direction, trigger) {
    var videos = document.querySelectorAll("[video]");

    for (var _index = 0; _index < videos.length; _index++) {
      var _video = videos[_index];
      _video.currentTime = 0;

      if (origin.index === _index) {
        if (!_video.muted) {
          _video.muted = true;
          var sound_turn = origin.item.querySelector(".sound_turn");
          var sound_switch = origin.item.querySelector(".sound_switch");
          sound_switch.style.display = "block";
          sound_turn.style.display = "none";
        }
      }
    }

    setSectionState(destination.index);

    if (destination.index === 1) {
      showHeader(true);
    }

    if (destination.index === 0) {
      showHeader(false);
    }

    menuItems.forEach(function (menu) {
      menu.classList.remove("menu_active_link");
      var a = menu.querySelector("a");

      if (a.href.endsWith({
        toString: function toString() {
          return destination.anchor || 'index.html';
        }
      })) {
        menu.classList.add("menu_active_link");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  init();
});
var path = "./";
var sections = document.querySelectorAll("[section]");
var mainBlock = document.querySelector("#main");
var turnSounds = document.querySelectorAll("[turn-sound]");
var lastSection = document.querySelector("[section=\"video3\"]");
var lastVideoSection = document.querySelector("[section=\"video3\"]");
var header = document.querySelector("#header");
var copyCodeButton = document.querySelector("[copyCode]");
var body = document.querySelector(".main_body_section");
var mobilePosters = document.querySelectorAll("[poster_mobile]");
var mobile_buttons = document.querySelectorAll("[mobile_button]");
var loaderBlock = document.querySelector(".loader_block");
var userAgentString = navigator.userAgent;
var isSafari = userAgentString.indexOf("Safari") > -1;

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

  if (isMobile() && isSafari) {
    mobile_buttons.forEach(function (mobile_button) {
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

  var firstVideo = videos[0];
  firstVideo.addEventListener("error", function (e) {
    if (isMobile()) {
      firstVideo.setAttribute("poster", "images/main_page/video_img_mobile_1.png");
    } else {
      firstVideo.setAttribute("poster", "images/main_page/video_img_1.png");
    }

    showCopyCodeButton(true);
  });
  firstVideo.addEventListener("timeupdate", function () {
    var firstVideoBlock = document.querySelector('[section="video1"]');

    if (firstVideo.currentTime > 0) {
      showCopyCodeButton(true);
    }

    if (firstVideo.currentTime >= 3.5) {
      showCopyCodeButton(false);
      addFullVideo(true);
    }

    if (firstVideo.currentTime >= 15.0) {
      firstVideoBlock.classList.add("video-opacity");
      showHeader(true);
    }

    if (firstVideo.currentTime >= 15.8) {
      nextSlide();
      firstVideoBlock.classList.remove("video-opacity");
    }
  }, false);
}

window.addEventListener("resize", function () {
  if (isMobile()) {
    changeVideoForMobile();
  }
}, true);

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
  var jsCode = "<!DOCTYPE html>\n    <head><title></title></head>\n    <body>\n    <svg id=\"mySvg\" width=\"960\" height=\"500\"></svg>\n    <script src=\"http://d3js.org/d3.v7.min.js\"></script>\n    <script src=\"http://d3js.org/topojson.v3.min.js\"></script>\n    <script>\n    var width = 960, height = 500, svg = d3.select(\"svg\");\n    d3.json(\"https://raw.githubusercontent.com/org-scn-design-studio-\" +\n        \"community/sdkcommunitymaps/master/geojson/Europe/Ukraine-regions.json\"\n    ).then(function (data) {\n        var land = topojson.feature(data, data.objects.UKR_adm1),\n            projection = d3.geoAlbers().rotate([-30, 0, 0])\n                .fitSize([.9 * width, .9 * height], land),\n            path = d3.geoPath().projection(projection);\n        svg.selectAll(\"path\").data(land.features).enter()\n            .append(\"path\").attr(\"d\", path).attr(\"fill\", \"#FFD500')\n            .attr(\"stroke\", \"#005BBB\");\n        svg.append(\"text\").attr(\"x\", (width / 2)).attr(\"y\", height - (20))\n            .attr(\"text-anchor\", \"middle\").style(\"font-size\", \"24px\")\n            .style(\"fill\", \"#005BBB\").text(\"Improvs\");";
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
  var firstVideo = document.querySelector('[section="video1"]');

  if (isFullVideo) {
    firstVideo.classList.add("video_block_full");
  } else {
    firstVideo.classList.remove("video_block_full");
  }
} //video


function changeVideoForMobile() {
  for (var _index2 = 0; _index2 < videos.length; _index2++) {
    var _video2 = videos[_index2];

    if (!_video2.src.includes("mobile")) {
      _video2.src = path + "files/main_video/video_".concat(_index2 + 1, "_mobile.mp4");
    }
  }
}

function changeMobilePosters() {
  mobilePosters.forEach(function (mobilePoster) {
    var poster = mobilePoster.getAttribute("poster_mobile");
    mobilePoster.poster = poster;
  });
}

turnSounds.forEach(function (turn) {
  turn.addEventListener("click", function () {
    var video = videos[getSectionState()];

    if (video) {
      video.muted = !video.muted;
      var sound_turn = turn.querySelector(".sound_turn");
      var sound_switch = turn.querySelector(".sound_switch");

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
}); //header

function showHeader(isShow) {
  if (isShow) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
} //state


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
} //OURWORK


var slider = new Swiper(".our_work-slider", {
  slidesPerView: 1.5,
  spaceBetween: 20
});
//# sourceMappingURL=main.js.map
