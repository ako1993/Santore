const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselButtonRight');
const prevButton = document.querySelector('.carouselButtonLeft');
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//when I click left, move slides to the left
//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = 'translateX(' + amountToMove + ')';
})
//when I click the blips, move to that appropriate slide

