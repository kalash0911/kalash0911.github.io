// Video controls
initVideoPlayers();

function initVideoPlayers() {
    const videoWraps = document.querySelectorAll(".video-wrap");
    videoWraps?.forEach((videoWrap) => {
        const video = videoWrap.querySelector(".video");
        const playButton = videoWrap.querySelector(".play-button");

        //Play and Pause button
        playButton.addEventListener("click", (e) => {
            if (video.paused) {
                video.play();
                videoWrap.classList.toggle("active");
            } else {
                video.pause();
                videoWrap.classList.toggle("active");
            }
        });

    });
}