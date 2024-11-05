const gallery = document.getElementById('gallery');
const imageCountDisplay = document.getElementById('imageCount');
const body = document.body;
let currentTheme = 'light';

async function fetchImages() {
    const response = await fetch('https://picsum.photos/v2/list?limit=4');
    const data = await response.json();
    data.forEach(image => {
        const img = document.createElement('img');
        img.src = image.download_url;
        gallery.appendChild(img);
    });
    updateImageCount();
}

function updateImageCount() {
    const totalImages = gallery.children.length;
    imageCountDisplay.textContent = `Кількість картинок: ${totalImages}`;
}

document.getElementById('loadMore').addEventListener('click', fetchImages);
document.getElementById('clearGallery').addEventListener('click', () => {
    gallery.innerHTML = '';
    updateImageCount();
});
document.getElementById('removeLast').addEventListener('click', () => {
    const lastImage = gallery.lastElementChild;
    if (lastImage) {
        gallery.removeChild(lastImage);
        updateImageCount();
    }
});
document.getElementById('reverseGallery').addEventListener('click', () => {
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
    updateImageCount();
});

document.getElementById('toggleTheme').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.className = currentTheme;
});

// Завантаження перших 4 картинок при завантаженні сторінки
fetchImages();
