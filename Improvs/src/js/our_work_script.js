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
            transform: scale(1);
            height: 100%;
            `;
        } else {
            caseElement.style = `
            transform: scale(0);
            height: 0;
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
