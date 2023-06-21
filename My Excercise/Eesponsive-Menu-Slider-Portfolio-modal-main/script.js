function  mobileMenu() {
let menu = document.querySelector(".header ul");
let btn = document.querySelector(".header button");

if(btn.innerText === 'MENU'){
    menu.style.display = 'block'
    btn.innerText = "Close"
} else {
    menu.style.display = 'none'
    btn.innerText = "MENU"
}
}

let imgNum = 0;
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

const  displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

rightBtn.addEventListener('click', function(){
    displayNone();
    imgNum++;   
    if(imgNum === pictures.length){
        imgNum = 0; 
    }
    pictures[imgNum].style.display = 'block'
})

leftBtn.addEventListener('click', function(){
    displayNone();
    imgNum--;   
    if(imgNum === -1){
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block'

})




function portfolioSort(button){
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll(".portfolio-single-item");

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })

    if(category === 'sve'){
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    portfolioItems.forEach((item) =>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';   
        }
    })
}

function openModal(){
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay");
    modalWindow.style.display = 'block'
    overlay.style.display = 'block'

}


function closeModal(){
    let modalWindow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay");
    modalWindow.style.display = 'none'
    overlay.style.display = 'none'

}