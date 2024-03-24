const slides = [
    {
        "image": "assets/images/slideshow/slide1.jpg",
        "tagLine": "<p>Impressions tous formats <span>en boutique et en ligne</span></p>"
    },
    {
        "image": "assets/images/slideshow/slide2.jpg",
        "tagLine": "<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>"
    },
    {
        "image": "assets/images/slideshow/slide3.jpg",
        "tagLine": "<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
    },
    {
        "image": "assets/images/slideshow/slide4.png",
        "tagLine": "<p>Autocollants <span>avec découpe laser sur mesure</span></p>"
    },
    list_dot = []
]
const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");
const dots_div = document.getElementById("dots_div");
let imagesPages = document.getElementById("images");
let text = document.getElementById("textImages");
let actualChange = 0;

// Fonction qui permet de changé l'image, le texte et le dot.
const changeElement = (side) => {
    // Vérification si c'est "right" ou "left".
    if (side === "right") {
        list_dot[actualChange].classList.remove('dot_selected');
        actualChange++;
        if (actualChange > 3) {
            actualChange = 0;
        };
        changeElement2(actualChange)
    } else {
        list_dot[actualChange].classList.remove('dot_selected');
        actualChange--;
        if (actualChange < 0) {
            actualChange = 3;
        };
        changeElement2(actualChange)
    }
}

// Fonction pour changé les éléments
const changeElement2 = (changeNumber) => {
    imagesPages.setAttribute("src", slides[changeNumber].image);
    list_dot[changeNumber].classList.add('dot_selected');
    text.innerHTML = slides[changeNumber].tagLine
}

// Ajout des dots selon le nombre d'image
for (let i = 0; i < (slides.length - 1); i++) {
    const spanDots = document.createElement('span');
    dots_div.appendChild(spanDots);
    if(i === 0) {
        spanDots.classList.add('dot')
        spanDots.classList.add('dot_selected')
        list_dot.push(spanDots)
    } else {
        spanDots.classList.add('dot')
        list_dot.push(spanDots)
    }
}


// Ajout d'event au click sur la flèche de droite.
right_arrow.addEventListener("click", () => {
    changeElement("right")
})

// Ajout d'event au click sur la flèche de gauche.
left_arrow.addEventListener("click", () => {
    changeElement()
})