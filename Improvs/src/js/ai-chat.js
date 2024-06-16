function toggleActiveClass() {
    const buttons = document.querySelectorAll('.open-btn-ai-chat');
    const close = document.querySelector('.close-btn-chat');
    const chatBoxes = document.querySelectorAll('.ai-chat-box');

    close.addEventListener('click', function () {
        chatBoxes.forEach(chatBox => {
            chatBox.classList.toggle('active');
        });
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const iframe = document.getElementById('iframe-chat');
            const modile = window.innerWidth < 768
            iframe.src = `http://localhost:3002/chat-public/modal/asst_1wlULcYq0yd3bbMzAAulmZEL/${modile}`;
            setTimeout(() => {
                chatBoxes.forEach(chatBox => {
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