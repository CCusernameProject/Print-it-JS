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
    }
];

// Fonction qui permet de changé l'image, le texte et le dot.
let actualChange = 0;
function changeElement(side) {
    // Récupération des éléments par l'id.
    let imagesPages = document.getElementById("images");
    let list_dot = document.querySelectorAll(".dot");
    let text = document.getElementById("textImages")
    // Vérification si c'est "right" ou "left".
    if (side === "right") {
        list_dot[actualChange].classList.remove('dot_selected');
        actualChange++;
        if (actualChange > 3) {
            actualChange = 0;
        };
        imagesPages.setAttribute("src", slides[actualChange].image);
        list_dot[actualChange].classList.add('dot_selected');
        text.innerHTML = slides[actualChange].tagLine
    } else if (side === "left") {
        list_dot[actualChange].classList.remove('dot_selected');
        actualChange--;
        if (actualChange < 0) {
            actualChange = 3;
        };
        imagesPages.setAttribute("src", slides[actualChange].image);
        list_dot[actualChange].classList.add('dot_selected');
        text.innerHTML = slides[actualChange].tagLine
    }
}

const left_arrow = document.getElementById("arrow_left");
const right_arrow = document.getElementById("arrow_right");

// Ajout d'event au click sur la flèche de droite.
right_arrow.addEventListener("click", () => {
    let side = "right"
    changeElement(side)
})

// Ajout d'event au click sur la flèche de gauche.
left_arrow.addEventListener("click", () => {
    let side = "left"
    changeElement(side)
})