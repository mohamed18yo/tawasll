export function readFileToDataURL(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}



const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
    });

export async function downsizeImage(imageSrc) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const biggestDimension = Math.max(image.width, image.height);
    let resizePercent = 1; // 100%
    if (biggestDimension > 3 * 1024) {
        resizePercent = (3 * 1024) / biggestDimension;
    }

    canvas.width = Math.floor(image.width * resizePercent);
    canvas.height = Math.floor(image.height * resizePercent);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // As Base64 string
    return canvas.toDataURL('image/jpeg');
}