export async function fetchImages(callback) {
    const response = await fetch('https://picsum.photos/v2/list?limit=4');
    const data = await response.json();
    callback(data);
}