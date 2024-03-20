// JavaScript for Image Slider
let currentSlide = 0;

const items = document.querySelectorAll('.item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function nextSlide() {
    if (currentSlide < totalItems - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlide();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalItems - 1;
    }
    updateSlide();
}

function updateSlide() {
    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
}