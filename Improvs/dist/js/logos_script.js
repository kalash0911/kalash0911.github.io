"use strict";

switchSlider();
var sliderStudent = new Swiper(".swiper_logos_student", {
  speed: 1400,
  centeredSlides: true,
  grabCursor: true,
  // loopedSlides: 1,
  // loop: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  breakpoints: {
    320: {
      // spaceBetween: 20,
      // slidesPerView: 1.05,
      pagination: {
        dynamicBullets: true
      }
    },
    480: {
      // spaceBetween: 20,
      // slidesPerView: 1.1,
      pagination: {
        dynamicBullets: true
      }
    },
    768: {
      // spaceBetween: 40,
      // slidesPerView: 1.2,
      pagination: {
        dynamicBullets: false
      }
    }
    // 1024: {
    //     spaceBetween: 60,
    //     slidesPerView: 1.6,
    // },
    // 1920: {
    //     spaceBetween: 80,
    //     slidesPerView: 2,
    // },
  }
});
var sliderStudentText = new Swiper(".swiper_student_text", {
  speed: 1400,
  slidesPerView: 1,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  }
});
sliderStudent.controller.control = sliderStudentText;
var sliderTeacher = new Swiper(".swiper_logos_teacher", {
  speed: 1400,
  centeredSlides: true,
  grabCursor: true,
  // loopedSlides: 1,
  // loop: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  breakpoints: {
    320: {
      // spaceBetween: 20,
      // slidesPerView: 1.05,
      pagination: {
        dynamicBullets: true
      }
    },
    480: {
      // spaceBetween: 20,
      // slidesPerView: 1.1,
      pagination: {
        dynamicBullets: true
      }
    },
    768: {
      //     spaceBetween: 40,
      //     slidesPerView: 1.2,
      pagination: {
        dynamicBullets: false
      }
    }
    // 1024: {
    //     spaceBetween: 60,
    //     slidesPerView: 1.6,
    // },
    // 1920: {
    //     spaceBetween: 80,
    //     slidesPerView: 2,
    // },
    // 2300: {
    //     spaceBetween: 80,
    //     slidesPerView: 2.5,
    // },
  }
});
var sliderTeacherText = new Swiper(".swiper_teacher_text", {
  speed: 1400,
  slidesPerView: 1,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  }
});
sliderTeacher.controller.control = sliderTeacherText;
function switchSlider() {
  var teacherSwiper = document.querySelector(".swiper_logos_teacher");
  var studentSwiper = document.querySelector(".swiper_logos_student");
  var studentSwiperText = document.querySelector(".swiper_student_text");
  var teacherSwiperText = document.querySelector(".swiper_teacher_text");
  var switchersItems = document.querySelectorAll(".switcher");
  switchersItems.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      switchersItems.forEach(function (item) {
        item.classList.remove("activeSwitch");
      });
      element.classList.add("activeSwitch");
      if (element.classList.contains("teacher")) {
        teacherSwiper.style.display = "block";
        studentSwiper.style.display = "none";
        studentSwiperText.style.display = "none";
        teacherSwiperText.style.display = "block";
      } else {
        teacherSwiper.style.display = "none";
        studentSwiper.style.display = "block";
        teacherSwiperText.style.display = "none";
        studentSwiperText.style.display = "block";
      }
    });
  });
}
var sliderReview = new Swiper(".swiper_review", {
  speed: 1400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1.5
    },
    1024: {
      slidesPerView: 1.8
    },
    1200: {
      slidesPerView: 2.2
    },
    1440: {
      slidesPerView: 2.5
    },
    1920: {
      slidesPerView: 3.5
    },
    2300: {
      slidesPerView: 4.5
    }
  }
});
//# sourceMappingURL=logos_script.js.map
