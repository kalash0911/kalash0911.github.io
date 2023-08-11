
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