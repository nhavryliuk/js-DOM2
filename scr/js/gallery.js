export function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.download_url;
        gallery.appendChild(img);
    });
    updateImageCount();
}

export function updateImageCount() {
    const gallery = document.getElementById('gallery');
    const imageCountDisplay = document.getElementById('imageCount');
    const totalImages = gallery.children.length;
    imageCountDisplay.textContent = `Кількість картинок: ${totalImages}`;
}

export function clearGallery() {
    document.getElementById('gallery').innerHTML = '';
    updateImageCount();
}

export function removeLastImage() {
    const gallery = document.getElementById('gallery');
    const lastImage = gallery.lastElementChild;
    if (lastImage) {
        gallery.removeChild(lastImage);
        updateImageCount();
    }
}

export function reverseGallery() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
    updateImageCount();
}