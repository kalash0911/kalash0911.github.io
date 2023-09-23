
const sections = document.querySelectorAll("[section]");
const mainBlock = document.querySelector("#wrapper");

function nextSlide() {
    var slide = getSectionState();
    if (slide) {
        let index = slide.index;
        if (index < sections.length - 2) {
            index = index + 1;
            let section = sections[index + 1].getAttribute('section');
            scrollByElementName(section);
            setSectionState(section, index);
        }
    } else {
        let section = sections[1].getAttribute('section');
        scrollByElementName(section);
        setSectionState(section, 1);
    }
}

function previousSlide() {
    var slide = getSectionState();
    if (slide) {
        let index = slide.index;
        if (index > 0) {
            index = index - 1;
            let section = sections[index + 1].getAttribute('section');
            scrollByElementName(section);
            setSectionState(section, index);
        }
    } else {
        let section = sections[1].getAttribute('section');
        scrollByElementName(section);
        setSectionState(section, 1);
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
    mainBlock.style.transform = `translate3d(0px, -${offset}px, 0px)`;
    //window.scrollTo({
    //  behavior: 'smooth',
    // left: 0,
    // top: offset
    //});
}


//header
function showHeader(isShow) {
    let header = document.querySelector("#header");
    if (isShow) {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
}

//BURGERMENU
const burger = document.querySelector(".burger");
const burger_btn = document.querySelector(".burger-btn");
const text_click = document.querySelector(".text_burger_btn");
const menuBody = document.querySelector(".header__menu ");
const linkClose = document.querySelectorAll(".link-close");
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
}

//mouse wheel event
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
    }, 500);
});

//touch
let x = null;
document.addEventListener('touchstart', e => x = e.touches[0].clientX);
document.addEventListener('touchmove', e => {
    if (!x) return;
    if (e.touches[0].clientX < 0) {
        nextSlide();
    } else {
        previousSlide();
    }
    x = null;
});

//state
function setSectionState(name, index) {
    let stateObj = { "section": name, "index": index };
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


