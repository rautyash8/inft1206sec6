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
/* Looping through images */

function initializeThumbBar() {
    initializeImageFilenameArray(imageSize);
    for (const imageFilename of imageFilenames) {
        const imageRelativePathPattern = `images/${imageFilename}`;
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imageRelativePathPattern);
        newImage.setAttribute('alt', imageFilename);
        thumbBar.appendChild(newImage);
    }
}

initializeThumbBar();

thumbBar.addEventListener('mouseover', event => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

