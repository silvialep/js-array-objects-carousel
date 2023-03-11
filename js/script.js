/*


Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let carouselEl = document.getElementById('carousel');

let carouselImg = document.getElementById('carousel-img');
let imgTitle = document.getElementById('img-title');
let imgText = document.getElementById('img-text');
let cardSlider = document.getElementById('card-slider');
let arrowUp = document.getElementById('arrow-up');
let arrowDown = document.getElementById('arrow-down');






let imgIndex = 0;

displayImg(images, carouselImg, imgIndex);
createSlider(cardSlider, images);

let allImages = document.querySelectorAll('.sliding-imgs');
allImages[imgIndex].classList.add('active');
displayImg(images, carouselImg, imgIndex);
console.log(imgIndex);



arrowDown.addEventListener('click', () => {
    if (imgIndex == allImages.length - 1) {
        imgIndex = - 1;
        allImages[allImages.length - 1].classList.remove('active');
    }
    imgIndex++;
    displayImg(images, carouselImg, imgIndex);

    console.log(imgIndex);

    
    allImages[imgIndex].classList.add('active');
    allImages[imgIndex - 1].classList.remove('active');


})

arrowUp.addEventListener('click', () => {
    if (imgIndex == 0) {
        imgIndex = allImages.length;
        allImages[0].classList.remove('active');
    }
    imgIndex--;
    displayImg(images, carouselImg, imgIndex);

    console.log(imgIndex);

    allImages[imgIndex].classList.add('active');
    allImages[imgIndex + 1].classList.remove('active');

})















// ___FUNCTIONS__________________

function createSlider(container, array) {
    for (i = 0; i < array.length; i++) {
        let slidingImages = document.createElement('img');
        slidingImages.classList.add('sliding-imgs');
        container.append(slidingImages);
        slidingImages.src = array[i].image;
    }
}

// displayImg(images, carouselImg);
// for (i = 0; i < images.length; i++) {
//     setInterval(displayImg(images, carouselImg), 1000);
// }

// setTimeout(displayImg(images, carouselImg), 2000);


function displayImg(array, imageElement, index) {
    imageElement.src = array[index].image;
    imgTitle.innerText = array[index].title;
    imgText.innerText = array[index].text;
}