import { fetchImages } from './api.js';
import { addImagesToGallery, clearGallery, removeLastImage, reverseGallery } from './gallery.js';

document.getElementById('loadMore').addEventListener('click', () => fetchImages(addImagesToGallery));
document.getElementById('clearGallery').addEventListener('click', clearGallery);
document.getElementById('removeLast').addEventListener('click', removeLastImage);
document.getElementById('reverseGallery').addEventListener('click', reverseGallery);

document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Завантаження перших 4 картинок при завантаженні сторінки
fetchImages(addImagesToGallery);