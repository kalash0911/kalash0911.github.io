playVideo ();

function playVideo () {
    const playButton = document.querySelectorAll('.play_video_btn');
    const video = document.querySelectorAll('.similar_video_item');
    playButton.forEach((button,i) => {
        button.addEventListener("click", () => {
            if(video[i].paused){
                video[i].play();
                video[i].setAttribute('controls','')
                button.style.display = 'none';
            } else {
                video[i].pause();
                video[i].removeAttribute('controls','')
                button.style.display = 'block';
            }
        })
    })
}