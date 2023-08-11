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
  var phoneWrapDesctination = sectionRect.height - stepsReact[0].height + 280; // Phone wrapper scroll anim

  gsap.fromTo(phonesWrapper, {
    x: 5,
    rotation: 3,
    skewX: -2
  }, {
    x: -5,
    rotation: -3,
    skewX: 2,
    scrollTrigger: {
      trigger: phonesWrapper,
      start: "".concat(stepsReact[0].height, "-=250px center"),
      end: "".concat(phoneWrapDesctination, " center"),
      scrub: 0.5,
      // markers: true,
      pin: phonesWrapper
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
          start: "75% 80%-".concat(phoneContentHeight),
          end: "bottom+=10% 85%",
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
/* ------------------- card section carousel ----------------*/

/* ------------------- triangle degrees helpers ----------------*/


var radToDegree = function radToDegree(radians) {
  return radians * (180 / Math.PI);
};

var calcIsoscelesTriangleDegree = function calcIsoscelesTriangleDegree(a, b) {
  var cosA = b / (2 * a);
  var aDeg = radToDegree(Math.acos(cosA));
  var bDeg = 180 - aDeg * 2;
  return {
    cosA: cosA,
    aDeg: aDeg,
    bDeg: bDeg
  };
};

var calcRightAngledTriangleDegree = function calcRightAngledTriangleDegree(a, b) {
  var tanA = a / b;
  var aDeg = radToDegree(Math.atan(tanA));
  var bDeg = 180 - 90 - aDeg;
  return {
    tanA: tanA,
    aDeg: aDeg,
    bDeg: bDeg
  };
};

var calcInitRotation = function calcInitRotation(rightAngledTriangleBDeg, isoscelesTriangleBDeg) {
  // hardcoded fix for mobile
  var correction = 0;

  if (window.innerWidth <= 1024) {
    correction = 6;
  }

  if (window.innerWidth <= 480) {
    correction = 3;
  }

  return rightAngledTriangleBDeg / 2 + isoscelesTriangleBDeg - correction;
};

var calcFinalRotation = function calcFinalRotation(rightAngledTriangleBDeg, isoscelesTriangleBDeg, cellsLength) {
  var correction = 0;

  if (window.innerWidth <= 1024) {
    correction = -3;
  }

  if (window.innerWidth <= 480) {
    correction = -1;
  }

  return -(isoscelesTriangleBDeg * cellsLength - rightAngledTriangleBDeg * 2) - rightAngledTriangleBDeg / 2 - correction;
};
/* ------------------- card section initialization ----------------*/


function circleImageAnimation() {
  var wrapper = document.querySelector(".card-section");
  var cardHolder = document.querySelector(".card-holder");
  var cells = document.querySelectorAll(".card-holder .item");
  if (!wrapper || !cardHolder || !cells) return;

  var _calcIsoscelesTriangl = calcIsoscelesTriangleDegree(cardHolder.offsetWidth / 2 - cells[0].offsetHeight, cells[0].offsetWidth),
      IsoscelesTriangleBDeg = _calcIsoscelesTriangl.bDeg;

  var _calcRightAngledTrian = calcRightAngledTriangleDegree(wrapper.offsetWidth / 2, cardHolder.offsetWidth / 2),
      RightAngledTriangleBDeg = _calcRightAngledTrian.aDeg;

  gsap.fromTo(cardHolder, {
    x: 0,
    rotation: -calcInitRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg)
  }, {
    x: 0,
    rotation: calcFinalRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg, cells.length) > 0 ? 0 : calcFinalRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg, cells.length),
    scrollTrigger: {
      trigger: wrapper,
      start: '30% 50%',
      pin: '#main',
      end: "bottom",
      scrub: 0.5 // markers: true,

    }
  });
}

circleImageAnimation();
//# sourceMappingURL=main.js.map
