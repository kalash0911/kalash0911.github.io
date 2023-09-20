blogFilter();

function blogFilter() {
    const list = document.querySelector(".dropdown-content");
    const items = document.querySelectorAll(".similar_post");

    list.addEventListener("click", (e) => {
        const targetId = e.target.closest('.dropdown_item').dataset.id;

        getItems(targetId === 'all' ? "similar_post" : targetId);
    });

    function getItems(className) {
        items.forEach((item) => {
            if (item.classList.contains(className)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
}


