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
 
const selectChevron = document.querySelector('.select__chevron-img')
const selectHeader = document.querySelector('.select__seat-active');
const selectItems = document.querySelector('.select__seat-hidden');
const selectText = document.querySelector('.value-active')
const selectValue = document.querySelectorAll('.value') 
const selectItemsAll = document.querySelectorAll('.select__seat-hidden');
const selectChevronAll = document.querySelectorAll('.select__chevron-img')

  
selectItemsAll.forEach(item => {
  item.addEventListener("click", function(event){
    if (event.target.classList[0] !== "value" || "") {
      return
    }
    const currentItem = event.target.dataset.id
    document.querySelector(`#${currentItem}`).textContent = event.target.textContent
    selectItems.classList.remove('is-active');
  })
})

selectChevronAll.forEach(item => {
  item.addEventListener("click", function(event){
    
  })
})
  

  





  