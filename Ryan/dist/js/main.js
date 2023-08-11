"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

initStickyPhone();

function initStickyPhone() {
  var startSection = document.querySelector(".phone-section");
  var phonesWrapper = startSection.querySelector('.sticky-phones-wrapper');
  var phoneContent = phonesWrapper.querySelector('.sticky-phones-content');
  var phoneImgs = phoneContent.querySelectorAll('img');
  var steps = document.querySelectorAll('.steps li');

  var stepsReact = _toConsumableArray(steps).reduce(function (prev, cur, ind) {
    var stepRect = cur.getBoundingClientRect();
    prev["".concat(ind)] = stepRect;
    return prev;
  }, {});

  var sectionRect = startSection.getBoundingClientRect();
  phoneImgs.forEach(function (img, ind) {
    return img.style.zIndex = "".concat(ind);
  });
  var phoneWrapDesctination = sectionRect.height - stepsReact[steps.length - 1].height - 50; // Phone wrapper scroll anim

  gsap.fromTo(phonesWrapper, {
    x: 5,
    y: -stepsReact[0].height / 2,
    rotation: 3,
    skewX: -2
  }, {
    x: -5,
    y: phoneWrapDesctination,
    rotation: -3,
    skewX: 2,
    scrollTrigger: {
      trigger: startSection,
      start: "top 40%",
      end: "bottom",
      scrub: 0.5 // markers: true,

    }
  });
  var phoneContentHeight = phoneContent.getBoundingClientRect().height; // Content images scroll anim

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
          start: "20% 80%-".concat(phoneContentHeight),
          end: "bottom-=100px 85%",
          scrub: 1,
          // markers: true,
          onUpdate: function onUpdate(self) {
            var filterValue = self.progress.toFixed(3) * 20;
            phoneImgs[ind - 1].style.filter = "blur(".concat(filterValue, "px)");
          }
        }
      });
    }
  });
}
//# sourceMappingURL=main.js.map
