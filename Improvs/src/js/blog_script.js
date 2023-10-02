function filterBlogs(filter) {
    const posts = document.querySelectorAll(".similar_post");

    posts.forEach((postElement) => {
        const categories = postElement.querySelectorAll(".category_name");

        let shouldShow = false;
        categories.forEach((category) => {
            if (category.textContent === filter || filter === "all") {
                shouldShow = true;
            }
        });

        if (shouldShow) {
            postElement.style = `
            display:flex;
            `;
        } else {
            postElement.style = `
            display:none;
            `;
        }
    });

    const filterItems = document.querySelectorAll(".dropdown_item");
    filterItems.forEach((filterItem) => {
        filterItem.classList.remove("active_filter_item");
    });

    const activeFilterItem = document.querySelector(`[data-id="${filter}"]`);
    activeFilterItem.classList.add("active_filter_item");
}

const filterItems = document.querySelectorAll(".dropdown_item");
filterItems.forEach((filterItem) => {
    filterItem.addEventListener("click", (event) => {
        const filter = event.target.getAttribute("data-id");
        filterBlogs(filter);
    });
});
