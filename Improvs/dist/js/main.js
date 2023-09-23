"use strict";

var sections = document.querySelectorAll("[section]");
var mainBlock = document.querySelector("#wrapper");

function nextSlide() {
  var slide = getSectionState();

  if (slide) {
    var index = slide.index;

    if (index < sections.length - 2) {
      index = index + 1;
      var section = sections[index].getAttribute('section');
      scrollByElementName(section);
      setSectionState(section, index);
    }
  } else {
    var _section = sections[1].getAttribute('section');

    scrollByElementName(_section);
    setSectionState(_section, 1);
  }
}

function previousSlide() {
  var slide = getSectionState();

  if (slide) {
    var index = slide.index;

    if (index > 0) {
      index = index - 1;
      var section = sections[index].getAttribute('section');
      scrollByElementName(section);
      setSectionState(section, index);
    }
  } else {
    var _section2 = sections[1].getAttribute('section');

    scrollByElementName(_section2);
    setSectionState(_section2, 1);
  }
} //scroll


function scrollByElementName(elementName) {
  var element = "";
  element = document.querySelector("[section=".concat(elementName, "]"));

  if (!element) {
    return;
  }

  var scrollToValue = element.offsetTop;
  scrollToOffset(scrollToValue);
}

function scrollToOffset(offset) {
  mainBlock.style.transform = "translate3d(0px, -".concat(offset, "px, 0px)"); //window.scrollTo({
  //  behavior: 'smooth',
  // left: 0,
  // top: offset
  //});
} //header


function showHeader(isShow) {
  var header = document.querySelector("#header");

  if (isShow) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
} //BURGERMENU


var burger = document.querySelector(".burger");
var burger_btn = document.querySelector(".burger-btn");
var text_click = document.querySelector(".text_burger_btn");
var menuBody = document.querySelector(".header__menu ");
var linkClose = document.querySelectorAll(".link-close");

if (burger) {
  burger_btn.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    text_click.classList.toggle("text_burger_btn-click");

    if (burger.classList.contains("burger_active")) {
      burger.classList.add("burger_finish");
      burger.classList.remove("burger_active");
    } else {
      burger.classList.add("burger_active");
      burger.classList.remove("burger_finish");
    }

    menuBody.classList.toggle("menu_active");
  });
}

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      text_click.classList.remove("text_burger_btn-click");
      burger.classList.remove("burger_active");
      burger.classList.add("burger_finish");
      menuBody.classList.remove("menu_active");
    });
  }
} //mouse wheel event


var delayWheel = true;
document.addEventListener('wheel', function (event) {
  if (delayWheel) {
    if (event.deltaY > 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    delayWheel = false;
  }

  setTimeout(function () {
    delayWheel = true;
  }, 1000);
}); //touch

var event = null;
document.addEventListener("touchstart", function (e) {
  event = e;
});
document.addEventListener("touchmove", function (e) {
  if (event) {
    var position = e.touches[0].pageY - event.touches[0].pageY;
    console.log(position);

    if (position > 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  }
});
document.addEventListener("touched", function (e) {
  event = null;
}); //state

function setSectionState(name, index) {
  var stateObj = {
    "section": name,
    "index": index
  };
  window.history.pushState(stateObj, "MainPage", "/");
}

function getSectionState() {
  var state = window.history.state;

  if (state) {
    return window.history.state;
  } else {
    return null;
  }
}
//# sourceMappingURL=main.js.map
