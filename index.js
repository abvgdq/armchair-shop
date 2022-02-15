const burgerMenu = document.querySelector('.burger-menu')
const headerDown = document.querySelector('.header-down')
  

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('change');
  headerDown.classList.toggle('active')
})

const chevronLeft = document.querySelector('.slider__chevron-left')
const chevronRight = document.querySelector('.slider__chevron-right')
const sliderItem = document.querySelector('.slider__item1')
const sliderItem1 = document.querySelector('.slider__item2')

chevronRight.addEventListener('click', function(){
    sliderItem.classList.toggle('translate__item1')
    sliderItem1.classList.toggle('block__items')
})

chevronLeft.addEventListener('click', function(){
    sliderItem.classList.toggle('translate__item2')
    sliderItem1.classList.toggle('block__items')
})