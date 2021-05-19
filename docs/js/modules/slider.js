const slides = document.querySelectorAll('.slider__item'),
      sliderInner = document.querySelector('.slider__inner'),
      rightSlide = document.querySelector('.slider__right'),
      leftSlide = document.querySelector('.slider__left'),
      sliderImg = document.querySelectorAll('.slider__item img'),
      sliderWindow = document.querySelector('.slider__window');
let offset = 0;
let width = parseInt(getComputedStyle(slides[0]).width, 10);


function nextSlide () {
  if (offset == (width * (slides.length-1))) {
    offset = 0;
    sliderInner.style.transform = `translateX(-${offset}px)`;
  } else {
    offset += width;
    sliderInner.style.transform = `translateX(-${offset}px)`;
  }
}

function prevSlide () {
  if (offset == 0) {
    offset = (width * (slides.length-1));
    sliderInner.style.transform = `translateX(${-offset}px)`;

  } else {
    offset -= width;
    sliderInner.style.transform = `translateX(${-offset}px)`;
  }
}


rightSlide.addEventListener('click', e => {
  nextSlide();
})
leftSlide.addEventListener('click', e => {
  prevSlide();
})

function resizeSlider () {
  sliderImg.forEach(img => {
    let windowHeight = getComputedStyle(sliderWindow).width;
    img.style.width = `${windowHeight}`;
  });
}
resizeSlider();
window.addEventListener("resize", e => {
  resizeSlider();
})
