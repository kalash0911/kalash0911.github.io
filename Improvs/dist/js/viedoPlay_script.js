"use strict";

playVideo();
function playVideo() {
  var playButton = document.querySelectorAll('.play_video_btn');
  var video = document.querySelectorAll('.similar_video_item');
  playButton.forEach(function (button, i) {
    button.addEventListener("click", function () {
      if (video[i].paused) {
        video[i].play();
        video[i].setAttribute('controls', '');
        button.style.display = 'none';
      } else {
        video[i].pause();
        video[i].removeAttribute('controls', '');
        button.style.display = 'block';
      }
    });
  });
}
//# sourceMappingURL=viedoPlay_script.js.map
