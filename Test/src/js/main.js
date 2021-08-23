const itemImg = document.querySelectorAll('.main__item-img');
const modal =  document.querySelector('.modal-img');
const modalImg = modal.querySelector('img');
const overflowImg = document.querySelector('.modal-img__overflow');
const closeBtnImg  = document.querySelector('.modal-img__close');

function showImg(e){
    document.body.classList.add("body_lock");
    modal.classList.add("modal-img_active");
    e.preventDefault();
    
    let img = e.target.closest('img');
    let src = img.getAttribute('src');

    modalImg.setAttribute('src', src);
};

function closeImg(){
    document.body.classList.remove("body_lock");
    modal.classList.remove("modal-img_active");
};

for (let i = 0;i<itemImg.length;++i){
    itemImg[i].addEventListener("click", function (e) {
        showImg(e);
    });
};

let modalActive = document.querySelectorAll('.modal-img_active');

if (modalActive) {
    overflowImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });

    closeBtnImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });
};
