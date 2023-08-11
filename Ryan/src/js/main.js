
initStickyPhone();

function initStickyPhone() {
  const startSection = document.querySelector(".phone-section");
  const phonesWrapper = startSection.querySelector('.sticky-phones-wrapper');
  const phoneContent = phonesWrapper.querySelector('.sticky-phones-content')
  const phoneImgs = phoneContent.querySelectorAll('img');
  const steps = document.querySelectorAll('.steps li');
  const stepsReact = [...steps].reduce((prev, cur, ind) => {
    const stepRect = cur.getBoundingClientRect();
    prev[`${ind}`] = stepRect;
    return prev;
  }, {})
  const sectionRect = startSection.getBoundingClientRect();
  phoneImgs.forEach((img, ind) => img.style.zIndex = `${ind}`)

  const phoneWrapDesctination = sectionRect.height - stepsReact[0].height + 280;

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
        trigger: phonesWrapper,
        start: `${stepsReact[0].height}-=250px center`,
        end: `${phoneWrapDesctination} center`,
        scrub: 0.5,
        // markers: true,
        pin: phonesWrapper,
      },
    }
  );

  const phoneContentHeight = phoneContent.getBoundingClientRect().height;

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
            start: `75% 80%-${phoneContentHeight}`,
            end: `bottom+=10% 85%`,
            scrub: 1,
            // markers: true,
            onUpdate: (self) => {
              const filterValue = self.progress.toFixed(3) * 20;
              phoneImgs[ind - 1].style.filter = `blur(${filterValue}px)`;
            }
          },
        }
      )
    }
  })
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
  return rightAngledTriangleBDeg / 2 + isoscelesTriangleBDeg;
};

const calcFinalRotation = (rightAngledTriangleBDeg, isoscelesTriangleBDeg, cellsLength) => {
  return -(isoscelesTriangleBDeg * cellsLength - rightAngledTriangleBDeg * 2) - rightAngledTriangleBDeg / 2
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
        pin: '#main',
        end: `bottom`,
        scrub: 0.5,
        markers: true,
      },
    }
  );
}

circleImageAnimation();
