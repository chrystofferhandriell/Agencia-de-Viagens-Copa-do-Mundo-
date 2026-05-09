
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const cards = document.querySelectorAll('.card');

let currentIndex = 0;

function updateCarousel() {

  const cardWidth = cards[0].offsetWidth + 25;

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {

  if(currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }

});

prevBtn.addEventListener('click', () => {

  if(currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }

});

window.addEventListener('resize', updateCarousel);
