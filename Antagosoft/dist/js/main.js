"use strict";

document.onkeydown = keyPress;
var form = document.querySelector('form');
var textarea = form.querySelector('textarea');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addComment();
});

function addComment() {
  var commentText = textarea.value;

  if (commentText) {
    document.querySelector('.comments-wrap').innerHTML += "\n        <li class=\"comment-item comment-item1\">\n            <div class=\"comment-item-title\">\n                <h2 class=\"name-comment\">\u0421\u0430\u043C\u0443\u0438\u043B</h2>\n                <p class=\"data-comment\">13 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2011</p>\n            </div>\n            <div class=\"comment\">\n                <p>".concat(commentText, "</p>\n            </div>\n        </li>");
  }

  textarea.value = "";
}

;

function keyPress(e) {
  if (ifCtrlEnterKeyPressed(e) && isMsgFieldActive()) {
    e.preventDefault();
    addComment();
  }
}

function isMsgFieldActive() {
  return document.activeElement === textarea;
}

function ifCtrlEnterKeyPressed(event) {
  return event.ctrlKey && event.keyCode === 13;
}
//# sourceMappingURL=main.js.map
