window.addEventListener("load", (event) => {
  initStickyPhone();
});

function initStickyPhone() {
  const startSection = document.querySelector(".phone-section");
  const phonesWrapper = startSection.querySelector('.sticky-phones-wrapper');
  const phoneContent = phonesWrapper.querySelector('.sticky-phones-content');
  const kidsWrapper = startSection.querySelector('.sticky-kids-wrapper');
  const kidsContent = startSection.querySelector('.sticky-kids-content');
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


  const phoneWrapDesctination = sectionRect.height - stepsReact[0].height;
  const phoneContentHeight = phonesWrapper.getBoundingClientRect().height;
  // phoneContent.style.height = `${phoneContentHeight - 10}px`;

  // Phone wrapper scroll anim
  gsap.fromTo(
    phonesWrapper,
    {
      x: 5,
      rotation: 3,
      // skewX: -2,
    },
    {
      x: -5,
      rotation: -3,
      // skewX: 2,
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
  gsap.fromTo(
    kidsWrapper,
    {
      x: 0,
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: phonesWrapper,
        start: `${stepsReact[0].height}-=250px center`,
        end: `${phoneWrapDesctination} center`,
        scrub: 0.5,
        // markers: true,
        pin: kidsWrapper,
        onEnter: () => {
          kidsAnimation[0].play()
        }
      },
    }
  );

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
