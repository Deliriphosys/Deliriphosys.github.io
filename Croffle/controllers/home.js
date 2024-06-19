let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, index = 4) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 2);
}

function prevSlide() {
    showSlide(currentSlide - 2 );
}