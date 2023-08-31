"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// window.addEventListener("load", (event) => {
//   if (window.innerWidth >= 1200) {
//     initStickyPhone();
//   }
// });
function initStickyPhone() {
  var startSection = document.querySelector(".phone-section");
  var phonesWrapper = startSection.querySelector('.sticky-phones-wrapper');
  var phoneContent = phonesWrapper.querySelector('.sticky-phones-content'); // const kidsWrapper = startSection.querySelector('.sticky-kids-wrapper');
  // const kidsContent = startSection.querySelector('.sticky-kids-content');

  var phoneImgs = phoneContent.querySelectorAll('.img-step'); // const kidsElements = kidsContent.querySelectorAll('[id*=kids_anim]');

  var steps = document.querySelectorAll('.steps li');

  var stepsReact = _toConsumableArray(steps).reduce(function (prev, cur, ind) {
    var stepRect = cur.getBoundingClientRect();
    prev["".concat(ind)] = stepRect;
    return prev;
  }, {});

  var sectionRect = startSection.getBoundingClientRect();
  phoneImgs.forEach(function (img, ind) {
    return img.style.zIndex = "".concat(ind);
  }); // kidsElements.forEach((el, ind) => el.style.zIndex = `${ind}`);

  var phoneWrapDesctination = sectionRect.height - stepsReact[0].height;
  var phoneContentHeight = phonesWrapper.getBoundingClientRect().height; // phoneContent.style.height = `${phoneContentHeight - 10}px`;
  // Phone wrapper scroll anim

  gsap.fromTo(phonesWrapper, {
    x: 5,
    rotation: 3 // skewX: -2,

  }, {
    x: -5,
    rotation: -3,
    // skewX: 2,
    scrollTrigger: {
      trigger: steps[0].querySelector('.title'),
      start: "50% center",
      end: "".concat(phoneWrapDesctination, " center"),
      scrub: 0.5,
      // markers: true,
      pin: phonesWrapper,
      onEnter: function onEnter() {// kidsAnimation[0].play();
      }
    }
  }); //Kids wrapper scroll anim
  // gsap.fromTo(
  //   kidsWrapper,
  //   {
  //     x: 0,
  //   },
  //   {
  //     x: 0,
  //     scrollTrigger: {
  //       trigger: phonesWrapper,
  //       start: `${stepsReact[0].height}-=250px center`,
  //       end: `${phoneWrapDesctination} center`,
  //       scrub: 0.5,
  //       // markers: true,
  //       pin: kidsWrapper,
  //       onEnter: () => {
  //         kidsAnimation[0].play()
  //       }
  //     },
  //   }
  // );
  // Content images scroll anim

  phoneImgs.forEach(function (img, ind) {
    if (ind > 0) {
      gsap.fromTo(img, {
        x: 0,
        y: -phoneContentHeight,
        rotation: 0
      }, {
        x: 0,
        y: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: steps[ind],
          start: "65% 80%-".concat(phoneContentHeight),
          end: "bottom+=20% 85%",
          scrub: 1,
          // markers: true,
          onUpdate: function onUpdate(self) {
            var filterValue = self.progress.toFixed(3) * 20;
            phoneImgs[ind - 1].style.filter = "blur(".concat(filterValue, "px)"); // if(self.progress < 0.1) {
            //   kidsAnimation[ind].pause();
            // } else {
            //   if(kidsAnimation[ind].isPaused) {
            //     kidsAnimation[ind].play();
            //   } 
            // }
          } // onLeave: (self) => {
          //   kidsAnimation[ind].play();
          //   kidsAnimation[ind-1].pause();
          // },
          // onEnterBack: () => {
          //   kidsAnimation[ind-1].play();
          // }

        }
      });
    }
  }); // Kids anim scroll sticky
  //  kidsElements.forEach((el, ind) => {
  //   if (ind > 0) {
  //     gsap.fromTo(
  //       el,
  //       {
  //         x: 0,
  //         y: -500,
  //         rotation: 0,
  //       },
  //       {
  //         x: 0,
  //         y: 0,
  //         rotation: 0,
  //         scrollTrigger: {
  //           trigger: steps[ind],
  //           start: `75% 80%-${500}`,
  //           end: `bottom+=10% 85%`,
  //           scrub: 1,
  //           // markers: true,
  //           onUpdate: (self) => {
  //             const filterValue = self.progress.toFixed(3) * 20;
  //             kidsElements[ind - 1].style.filter = `blur(${filterValue}px)`;
  //             kidsElements[ind - 1].style.opacity = `${1 - self.progress}`;
  //             if(self.progress !== 1) {
  //               kidsAnimation[ind].pause();
  //             }
  //           },
  //           onLeave: (self) => {
  //             kidsAnimation[ind].play();
  //           },
  //         },
  //       }
  //     )
  //   }
  // });
}

var kidsAnimLoadCounter = 0;
var kidsTotalDuration = 0;
var kidsAnimation = new Array(5).fill('kids_anim').map(function (elem, ind, arr) {
  var anim = bodymovin.loadAnimation({
    container: document.getElementById("".concat(elem, "_").concat(ind + 1)),
    path: "./files/anim_".concat(ind + 1, ".json"),
    render: "svg",
    loop: true,
    autoplay: false
  });
  anim.addEventListener("DOMLoaded", function () {
    kidsAnimLoadCounter += 1;

    if (kidsAnimLoadCounter === arr.length) {
      kidsTotalDuration = kidsAnimation.reduce(function (prev, cur, ind) {
        cur.onComplete = function () {// anim complete cb
        };

        return prev += cur.getDuration();
      }, 0);
      intersectionCallback(kidsAnimation);
    }
  });
  return anim;
});
var mPhoneAnimLoadCounter = 0;
var mPhoneTotalDuration = 0; // const mobilePhoneAnimation = new Array(5).fill('mob_phone').map((elem, ind, arr) => {
//   const anim = bodymovin.loadAnimation({
//     container: document.getElementById(`${elem}_${ind + 1}`),
//     path: `./files/mob_phone_${ind + 1}.json`,
//     render: "svg",
//     loop: true,
//     autoplay: false,
//   });
//   anim.addEventListener("DOMLoaded", () => {
//     mPhoneAnimLoadCounter += 1;
//     if (mPhoneAnimLoadCounter === arr.length) {
//       mPhoneTotalDuration = mobilePhoneAnimation.reduce((prev, cur, ind) => {
//         cur.onComplete = () => {
//           // anim complete cb
//         };
//         return (prev += cur.getDuration());
//       }, 0);
//       intersectionCallback(mobilePhoneAnimation);
//     }
//   });
//   return anim;
// });

function intersectionCallback(animArr) {
  var _document$querySelect;

  (_document$querySelect = document.querySelectorAll('.steps .item')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (el, ind) {
    createObserver(el, function (entries) {
      if (entries[0].isIntersecting) {
        var _animArr$ind;

        (_animArr$ind = animArr[ind]) === null || _animArr$ind === void 0 ? void 0 : _animArr$ind.play();
      } else {
        var _animArr$ind2;

        (_animArr$ind2 = animArr[ind]) === null || _animArr$ind2 === void 0 ? void 0 : _animArr$ind2.pause();
      }
    });
  });
}

function createObserver(target, callback) {
  var options = {
    root: null,
    threshold: 0
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}
//# sourceMappingURL=main.js.map
