"use strict";

function toggleActiveClass() {
  var openBtn = document.querySelector('.open-btn-ai-chat');
  if (openBtn) {
    openBtn.addEventListener('click', function () {
      var aiChatBox = this.closest('.ai-chat-box');
      if (aiChatBox) {
        aiChatBox.classList.toggle('active');
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  toggleActiveClass();
});
//# sourceMappingURL=ai-chat.js.map
