const burgerMenu = document.querySelector(".burger-menu");
const headerDown = document.querySelector(".header-down");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("change");
  headerDown.classList.toggle("active");
});

const chevronLeft = document.querySelector(".slider__chevron-left");
const chevronRight = document.querySelector(".slider__chevron-right");
const sliderItem1 = document.querySelectorAll(".slider__item1");
const dots = document.querySelectorAll(".slider__dot");
const sliderDots = document.querySelector(".slider__dots");
const dotActive = document.querySelector(".active-dot");
let currentWidthSlider = document.querySelector(".slider__container").clientWidth;
let numSlider = sliderItem1.length - 1;
let count = 0;
let currentSlider = 0;

chevronRight.addEventListener("click", function () {
  if (currentSlider === numSlider) {
    return;
  }
  
  count += currentWidthSlider;
  currentSlider += 1;

  dots.forEach((item) => {
    item.classList.remove("active-dot");
  });
  document.querySelector(`[data-${currentSlider}]`).classList.add("active-dot");
  sliderItem1.forEach((item) => {
    item.style.transform = `translateX(-${count}px)`;
  });
});

chevronLeft.addEventListener("click", function () {
  if (currentSlider === 0) {
    return;
  }
  count -= currentWidthSlider;
  currentSlider -= 1;
  dots.forEach((item) => {
    item.classList.remove("active-dot");
  });
  document.querySelector(`[data-${currentSlider}]`).classList.add("active-dot");
  sliderItem1.forEach((item) => {
    item.style.transform = `translateX(-${count}px)`;
  });
});

sliderDots.addEventListener("click", function (event) {
  const isSliderDot = event.target.classList[0] === "slider__dot";
  if (!isSliderDot) {
    return;
  }
  dots.forEach((item) => {
    item.classList.remove("active-dot");
  });

  if (isSliderDot) {
    event.target.classList.add("active-dot");
  }
  
  const currentDotSlider = event.target.dataset.item;
  count = currentWidthSlider * Number(currentDotSlider);
  currentSlider = Number(currentDotSlider);

  sliderItem1.forEach((item) => {
    item.style.transform = `translateX(-${count}px)`;
  });
});

window.addEventListener('resize', function() {
  currentWidthSlider = document.querySelector(".slider__container").clientWidth;
})
 
const selectSeatAll = document.querySelectorAll('.select__seat');

selectSeatAll.forEach(item => {
  item.addEventListener("click", function(event){
    const currentEl = event.target.classList[0];
    if (currentEl === "select__chevron-img") {
      item.querySelector('.select__seat-hidden').classList.toggle('is-active')
      item.querySelector('.select__chevron-img').classList.toggle('is-active__rotate')
    }
    if (currentEl === "value") {
      item.querySelector('.value-active').textContent = event.target.textContent;
      item.querySelector('.select__seat-hidden').classList.remove('is-active')
    }
  })
})



  





  