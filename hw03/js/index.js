/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/crush.jpg',
    'images/iceskating.jpg',
    'images/carson.jpg',
    'images/starbucks.jpg',
    'images/spikeball.jpg',
    'images/family.jpg',
    'images/hiking.jpg',
    'images/sadie.jpg'
];

currentIndex = 0

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index)
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
}

const imageElements = document.querySelectorAll('.image')

for (const elem of imageElements) {
    elem.onclick = showImage;
}

const showNext = (ev) => {
    currentIndex += 1;
    if (currentIndex > 7) {
        currentIndex = 0
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage;
}

document.querySelector('.next').onclick = showNext

const showPrevious = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 7
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage;
}

document.querySelector('.prev').onclick = showPrevious
document.querySelector('.featured_image').onclick = showNext