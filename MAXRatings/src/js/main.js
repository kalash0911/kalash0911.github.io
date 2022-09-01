/* header logick */

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
burger.addEventListener("click", function (e) {
  document.body.classList.toggle("body_lock");
  document.body.classList.toggle("active");
  if(burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
    }
});
};

if (linkClose.length) {
  for(var i =0;i<linkClose.length;++i){
      linkClose[i].addEventListener("click", function (e) {
          document.body.classList.remove("body_lock");
          document.body.classList.remove("active");
          burger.classList.remove("burger_active");
          burger.classList.add('burger_finish');
      })
  }
};

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
      ...obj,
    };
  
    const win = window;
    const sliderSelector = document.querySelector(selector);
    let swiper = new Swiper(selector, init);
  
    const toggleInit = () => {
      const neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width
      if (neededWidth) {
        if (!sliderSelector.classList.contains("swiper-initialized")) {
          swiper = new Swiper(selector, init);
        }
      } else if (sliderSelector.classList.contains("swiper-initialized")) {
        swiper.destroy();
      }
    };
  
    ["load", "resize"].forEach((evt) =>
      win.addEventListener(evt, toggleInit, false)
    );
}

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 20,
  slidesPerView: 4.5,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  speed: 700,
  centerPadding: 0,

  mousewheel: {
    eventsTarget: ".main-slider",
  },

  autoplay: {
    delay: 1500,
  },

  breakpoints: {

    320: {
      slidesPerView: 1.75,
    },

    640: {
      slidesPerView: 2.5,
    },

    1025: {
      slidesPerView: 3.5,
    },

    1100: {
      slidesPerView: 4,
    },

    1250: {
      slidesPerView: 4.5,
    },

    1400: {
      slidesPerView: 5.2,
    }
  }

});

/* scroll logic */

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// GSAP ScrollTrigger
ScrollTrigger.create({
  trigger: "#platforms",
  start: "top bottom",
  endTrigger: "#contact",
  end: "bottom 50%+=100px",
  onUpdate: self => {
    gsap.to("#platforms .cont", {
      x: self.progress.toFixed(3) * 300
    });
  }
});

// Open review in popup
handleReviewOpen();

function handleReviewOpen() {
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  const popup = document.querySelector('.popup');
  const popupText = popup.querySelector('.popup-text');
  const popupContentBlock = popup.querySelector('.popup-content');
  const popupImg = popup.querySelector('.img-wrap img');
  const closeBtn = popup.querySelector('.btn-close')
  const backDrop = document.querySelector('.backdrop');

  swiperSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
      if(slide.classList.contains('swiper-slide-active')) {
        const text = slide.querySelector('p.discription').textContent;
        const imagePath = slide.querySelector('.img-wrap img').getAttribute('src');
        openPopup(text, imagePath);
      }
    })
  });

  backDrop.addEventListener('click', closePopup)
  closeBtn.addEventListener('click', closePopup)

  function openPopup(text,imagePath) {
    popup.classList.add('open');
    backDrop.classList.add('open');
    document.body.classList.add("body_lock");
    popupText.textContent = text;
    popupImg.setAttribute('src', imagePath)
  }

  function closePopup() {
    popup.classList.remove('open');
    backDrop.classList.remove('open');
    document.body.classList.remove("body_lock");
    popupText.textContent = '';
  }
}