function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

function getTypewriterTexts(){
    const lang = window.currentLang || "fr";
    const t = window.translations ? window.translations[lang] : null;
    return t ? [t.hero_typewriter1, t.hero_typewriter2] : [
        "Étudiante en troisième année de BUT Informatique",
        "À la recherche d'une alternance en data"
    ];
}

let texts = getTypewriterTexts();

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;
let twTimer = null;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        twTimer = setTimeout(typeWriter, speed);
    }
    else{
        twTimer = setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        twTimer = setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        twTimer = setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;

document.addEventListener('languagechange', () => {
    texts = getTypewriterTexts();
    textIndex = 0;
    charcterIndex = 0;
    clearTimeout(twTimer);
    textElements.innerHTML = '';
    twTimer = setTimeout(typeWriter, speed);
});



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

function getModeLabel(isDark){
    const lang = window.currentLang || "fr";
    const t = window.translations ? window.translations[lang] : null;
    if (t) return isDark ? t.mode_dark : t.mode_light;
    return isDark ? 'Mode sombre' : 'Mode clair';
}

// Par défaut : mode clair (classe light-mode présente dans le HTML)
if (document.body.classList.contains('light-mode')) {
  modeLabel.textContent = getModeLabel(false);
  themeSwitch.checked = false;
} else {
  modeLabel.textContent = getModeLabel(true);
  themeSwitch.checked = true;
}

// Gérer le changement de thème avec mise à jour du texte
themeSwitch.addEventListener('change', () => {
  const isDark = themeSwitch.checked;
  document.body.classList.toggle('light-mode', !isDark);
  modeLabel.textContent = getModeLabel(isDark);
});

document.addEventListener('languagechange', () => {
  modeLabel.textContent = getModeLabel(themeSwitch.checked);
});
