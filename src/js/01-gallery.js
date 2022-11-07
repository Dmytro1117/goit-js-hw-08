// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const shortid = require('shortid');
// Change code below this line




console.log(shortid.generate());





console.log(galleryItems);

const containerEl = document.querySelector(".gallery");
const markupEl = createGallery(galleryItems);
containerEl.insertAdjacentHTML("beforeend", markupEl);
containerEl.addEventListener("click", onContainer);
// let instance;
function createGallery(images) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
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
  
}

function onContainer(e) {
     e.preventDefault();
    const isGalery = e.target.classList.contains("gallery");
    
    if (isGalery) {
        return;
    }

  // const largeImage = e.target.dataset.source;
  // instance = basicLightbox.create(`
	// 	<img width="1400" height="900" src="${largeImage}">
	// `)
  // instance.show()
  //   console.log(largeImage);
}

//  document.addEventListener("keydown", e => {
//    if (e.code === "Escape") {
//      instance.close()
//       }
//     })