"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var slider = new Swiper(".swiper_creditor", {
  speed: 1400,
  // slidesPerView: 1.6,
  centeredSlides: true,
  grabCursor: true,
  // spaceBetween: 80,
  loopedSlides: 1,
  loop: true,
  autoplay: true,
  breakpoints: _defineProperty({
    320: {
      spaceBetween: 20,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 40
    },
    1024: {
      spaceBetween: 80,
      slidesPerView: 1.6
    }
  }, "1024", {
    spaceBetween: 80,
    slidesPerView: 2
  })
});
//# sourceMappingURL=creditor_solutions_script.js.map
