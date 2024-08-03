const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let imageFilenames = [];

function initializeImageFilenameArray(length) {
    for (let i = 0; i < length; i++) {
        const imageFilenamePattern = `pic${i + 1}.jpg`;
        imageFilenames.push(imageFilenamePattern);
    }
}

const imageSize = 5;