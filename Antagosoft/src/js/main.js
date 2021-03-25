
document.onkeydown = keyPress;
let form = document.querySelector('form');
let textarea = form.querySelector('textarea');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addComment();
})

function addComment() {
    let commentText = textarea.value;
    if (commentText) {
        document.querySelector('.comments-wrap').innerHTML += `
        <li class="comment-item comment-item1">
            <div class="comment-item-title">
                <h2 class="name-comment">Самуил</h2>
                <p class="data-comment">13 октября 2011</p>
            </div>
            <div class="comment">
                <p>${commentText}</p>
            </div>
        </li>`        
    }
    textarea.value = "";
};

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