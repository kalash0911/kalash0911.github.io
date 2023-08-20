window.addEventListener("load", (event) => {
  circleImageAnimation();
  initStickyPhone();
});

function initStickyPhone() {
  const startSection = document.querySelector(".phone-section");
  const phonesWrapper = startSection.querySelector('.sticky-phones-wrapper');
  const phoneContent = phonesWrapper.querySelector('.sticky-phones-content');
  // const kidsWrapper = startSection.querySelector('.sticky-kids-wrapper');
  // const kidsContent = startSection.querySelector('.sticky-kids-content');
  const phoneImgs = phoneContent.querySelectorAll('img');
  // const kidsElements = kidsContent.querySelectorAll('[id*=kids_anim]');
  const steps = document.querySelectorAll('.steps li');
  const stepsReact = [...steps].reduce((prev, cur, ind) => {
    const stepRect = cur.getBoundingClientRect();
    prev[`${ind}`] = stepRect;
    return prev;
  }, {})
  const sectionRect = startSection.getBoundingClientRect();
  phoneImgs.forEach((img, ind) => img.style.zIndex = `${ind}`);
  // kidsElements.forEach((el, ind) => el.style.zIndex = `${ind}`);


  const phoneWrapDesctination = sectionRect.height - stepsReact[0].height + 280;
  const phoneContentHeight = phoneContent.getBoundingClientRect().height;

  // Phone wrapper scroll anim
  gsap.fromTo(
    phonesWrapper,
    {
      x: 5,
      rotation: 3,
      skewX: -2,
    },
    {
      x: -5,
      rotation: -3,
      skewX: 2,
      scrollTrigger: {
        trigger: steps[0].querySelector('.title'),
        start: `50% center`,
        end: `${phoneWrapDesctination} center`,
        scrub: 0.5,
        // markers: true,
        pin: phonesWrapper,
        onEnter: () => {
          // kidsAnimation[0].play();
        }
      },
    }
  );

  //Kids wrapper scroll anim
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
  phoneImgs.forEach((img, ind) => {
    if (ind > 0) {
      gsap.fromTo(
        img,
        {
          x: 0,
          y: -phoneContentHeight,
          rotation: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scrollTrigger: {
            trigger: steps[ind],
            start: `65% 80%-${phoneContentHeight}`,
            end: `bottom+=20% 85%`,
            scrub: 1,
            // markers: true,
            onUpdate: (self) => {
              const filterValue = self.progress.toFixed(3) * 20;
              phoneImgs[ind - 1].style.filter = `blur(${filterValue}px)`;
              if(self.progress < 0.1) {
                kidsAnimation[ind].pause();
              } else {
                if(kidsAnimation[ind].isPaused) {
                  kidsAnimation[ind].play();
                } 
              }
            },
            onLeave: (self) => {
              kidsAnimation[ind].play();
              kidsAnimation[ind-1].pause();
            },
            onEnterBack: () => {
              kidsAnimation[ind-1].play();
            }
          },
        }
      )
    }
  });

   // Kids anim scroll sticky
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

/* ------------------- card section carousel ----------------*/
/* ------------------- triangle degrees helpers ----------------*/
const radToDegree = (radians) => {
  return radians * (180 / Math.PI);
};

const calcIsoscelesTriangleDegree = (a, b) => {
  const cosA = b / (2 * a);
  const aDeg = radToDegree(Math.acos(cosA));
  const bDeg = 180 - aDeg * 2;
  return { cosA, aDeg, bDeg }
};

const calcRightAngledTriangleDegree = (a, b) => {
  const tanA = a/ b;
  const aDeg = radToDegree(Math.atan(tanA));
  const bDeg = 180 - 90 - aDeg;
  return { tanA, aDeg, bDeg }
};

const calcInitRotation = (rightAngledTriangleBDeg, isoscelesTriangleBDeg) => {
  // hardcoded fix for mobile
  let correction = 0;
  if (window.innerWidth <= 1024) {
    correction = 6;
  }
  if (window.innerWidth <= 480) {
    correction = 3;
  }
  return rightAngledTriangleBDeg / 2 + isoscelesTriangleBDeg - correction;
};

const calcFinalRotation = (rightAngledTriangleBDeg, isoscelesTriangleBDeg, cellsLength) => {
  let correction = 0;
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
  const wrapper = document.querySelector(".card-section");
  const cardHolder = document.querySelector(".card-holder");
  const cells = document.querySelectorAll(".card-holder .item");

  if (!wrapper || !cardHolder || !cells) return;

  const { bDeg: IsoscelesTriangleBDeg } = calcIsoscelesTriangleDegree(cardHolder.offsetWidth / 2 - cells[0].offsetHeight, cells[0].offsetWidth);
  const { aDeg: RightAngledTriangleBDeg } = calcRightAngledTriangleDegree(wrapper.offsetWidth / 2, cardHolder.offsetWidth / 2);

  gsap.fromTo(
    cardHolder,
    {
      x: 0,
      rotation: - calcInitRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg),
    },
    {
      x: 0,
      rotation: calcFinalRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg, cells.length) > 0 ? 0 : calcFinalRotation(RightAngledTriangleBDeg, IsoscelesTriangleBDeg, cells.length),
      scrollTrigger: {
        trigger: wrapper,
        start: '30% 50%',
        pin: ".carousel-wrap",
        end: `bottom`,
        scrub: 0.5,
        // markers: true,
      },
    }
  );
}

const kidsAnimation = new Array(5).fill('kids_anim').map((elem, ind, arr) => {
  let animLoadCounter = 0;
  let totalDuration = 0;
  const anim = bodymovin.loadAnimation({
    container: document.getElementById(`${elem}_${ind + 1}`),
    path: `./files/anim_${ind + 1}.json`,
    render: "svg",
    loop: true,
    autoplay: false,
  });
  anim.addEventListener("DOMLoaded", () => {
    animLoadCounter += 1;
    anim.stop();
    if (animLoadCounter === arr.length) {
      totalDuration = kidsAnimation.reduce((prev, cur, ind) => {
        cur.onComplete = () => {
          // anim complete cb
        };
        return (prev += cur.getDuration());
      }, 0);
    }
  });
  return anim;
});

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      kidsAnimation[0].play();
    }
  });
}
function createObserver(target, callback) {
  const options = {
    root: null,
    threshold: 0,
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}

createObserver(document.querySelector('#kids_anim_1'), callback);