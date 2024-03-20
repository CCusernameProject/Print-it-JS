const slides = [
    {
        "image": "assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];



let actualImage = 0;
function changeImage(side) {
    let imagesPages = document.getElementById("images");
    if (side === "right") {
        actualImage++;
        if (actualImage > 3) {
            actualImage = 0;
        };
        imagesPages.setAttribute("src", slides[actualImage].image);
    } else if (side === "left") {
        actualImage--;
        if (actualImage < 0) {
            actualImage = 3;
        };
        imagesPages.setAttribute("src", slides[actualImage].image);
    }
}

let currentDot = 0;
function changeDotClass(side) {
    let list_dot = document.querySelectorAll(".dot");
    if (side === "right") {
        list_dot[currentDot].classList.remove('dot_selected');
        currentDot++;
        if (currentDot > 3) {
            currentDot = 0;
        };
        list_dot[currentDot].classList.add('dot_selected');
    } else if (side === "left") {
        list_dot[currentDot].classList.remove('dot_selected');
        currentDot--;
        if (currentDot < 0) {
            currentDot = 3;
        };
        list_dot[currentDot].classList.add('dot_selected');
    };
}


const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");

right_arrow.addEventListener("click", () => {
    let side = "right"
    changeImage(side) 
    changeDotClass(side)   
})

left_arrow.addEventListener("click", () => {
    let side = "left"
    changeImage(side)
    changeDotClass(side)
})