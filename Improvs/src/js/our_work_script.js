const slider = new Swiper(".case_swiper", {
    speed: 6000,
    grabCursor: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    // loop: true,
    spaceBetween: 20,
    slidesPerView: 1.3,
    breakpoints: {
        320: {
            slidesPerView: 1.15,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.3,
        },
        1024: {
            freeMode: true,
        },
        1440: {
            slidesPerView: 1.5,
        },
        1920: {
            slidesPerView: 2.2,
        },
    },
    on: {
        init() {
            this.autoplay.stop();

            this.el.addEventListener("mouseenter", () => {
                this.autoplay.start();
            });

            this.el.addEventListener("mouseleave", () => {
                this.autoplay.stop();
            });
        },
    },
});

function filterCases(filter) {
    const cases = document.querySelectorAll(".case");

    cases.forEach((caseElement) => {
        const tags = caseElement.querySelectorAll(".tag");

        let shouldShow = false;
        tags.forEach((tag) => {
            if (tag.textContent === filter || filter === "all") {
                shouldShow = true;
            }
        });

        if (shouldShow) {
            caseElement.style = `
            display:flex;
            `;
        } else {
            caseElement.style = `
            display:none;
            `;
        }
    });

    const filterItems = document.querySelectorAll(".work_filter_item");
    filterItems.forEach((filterItem) => {
        filterItem.classList.remove("active_filter_item");
    });

    const activeFilterItem = document.querySelector(`[data-id="${filter}"]`);
    activeFilterItem.classList.add("active_filter_item");
}

const filterItems = document.querySelectorAll(".work_filter_item");
filterItems.forEach((filterItem) => {
    filterItem.addEventListener("click", (event) => {
        const filter = event.target.getAttribute("data-id");
        filterCases(filter);
    });
});
