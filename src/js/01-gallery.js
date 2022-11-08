// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line


// const shortid = require('shortid');

// console.log(shortid.generate());


// console.log(galleryItems);

const containerEl = document.querySelector(".gallery");
const markupEl = createGallery(galleryItems);
containerEl.insertAdjacentHTML("beforeend", markupEl);
containerEl.addEventListener("click", onContainer);
// let instance;
function createGallery(images) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
  }).join("");
  
} function onContainer(e) {
     e.preventDefault();
    const isGalery = e.target.classList.contains("gallery");
    
    if (isGalery) {
        return;
    }

}

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250} );