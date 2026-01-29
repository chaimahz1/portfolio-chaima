function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

const texts = [
    "Étudiante en deuxième année de BUT Informatique"
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

const themeSwitch = document.getElementById('theme-switch');
const modeLabel = document.querySelector('.mode-label');

// Par défaut : mode clair (classe light-mode présente dans le HTML)
if (document.body.classList.contains('light-mode')) {
  modeLabel.textContent = 'Mode clair';
  themeSwitch.checked = false;
} else {
  modeLabel.textContent = 'Mode sombre';
  themeSwitch.checked = true;
}

// Gérer le changement de thème avec mise à jour du texte
themeSwitch.addEventListener('change', () => {
  const isDark = themeSwitch.checked;
  document.body.classList.toggle('light-mode', !isDark);
  modeLabel.textContent = isDark ? 'Mode sombre' : 'Mode clair';
});
