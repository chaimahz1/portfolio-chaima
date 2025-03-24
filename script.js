// === MENU BURGER ===
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// === TYPEWRITER EFFECT ===
const texts = [
    "Étudiante en première année de BUT Informatique"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;


// === SLIDER POUR CHAQUE PROJET UNIVERSITAIRE ===

// Aller à l'image suivante
function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('img');
    let index = Array.from(images).findIndex(img => img.classList.contains('active'));

    // Enlève la classe active actuelle
    images[index].classList.remove('active');

    // Passe à l'image suivante (boucle)
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

// Aller à l'image précédente
function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('img');
    let index = Array.from(images).findIndex(img => img.classList.contains('active'));

    // Enlève la classe active actuelle
    images[index].classList.remove('active');

    // Passe à l'image précédente (boucle)
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
}
