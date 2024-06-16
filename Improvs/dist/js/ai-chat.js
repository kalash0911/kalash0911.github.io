"use strict";

function toggleActiveClass() {
  var buttons = document.querySelectorAll('.open-btn-ai-chat');
  var close = document.querySelector('.close-btn-chat');
  var chatBoxes = document.querySelectorAll('.ai-chat-box');
  close.addEventListener('click', function () {
    chatBoxes.forEach(function (chatBox) {
      chatBox.classList.toggle('active');
    });
  });
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var iframe = document.getElementById('iframe-chat');
      var modile = window.innerWidth < 768;
      iframe.src = "http://localhost:3002/chat-public/modal/asst_1wlULcYq0yd3bbMzAAulmZEL/".concat(modile);
      setTimeout(function () {
        chatBoxes.forEach(function (chatBox) {
          chatBox.classList.toggle('active');
        });
      }, 100);
    });
  });
  function removeClassOnResize() {
    chatBoxes.forEach(function (element) {
      element.classList.remove('active');
    });
  }
  window.addEventListener('resize', removeClassOnResize);
  removeClassOnResize();
}
document.addEventListener('DOMContentLoaded', function () {
  toggleActiveClass();
});
//# sourceMappingURL=ai-chat.js.map
