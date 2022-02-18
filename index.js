const burgerMenu = document.querySelector('.burger-menu')
const headerDown = document.querySelector('.header-down')
  

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('change');
  headerDown.classList.toggle('active')
})

const chevronLeft = document.querySelector('.slider__chevron-left')
const chevronRight = document.querySelector('.slider__chevron-right')
const sliderItem1 = document.querySelectorAll('.slider__item1')
const dots = document.querySelectorAll('.slider__dot')
const sliderDots = document.querySelector('.slider__dots')
const dotActive = document.querySelector('.active-dot')


let numSlider = sliderItem1.length;
let count = 0

let currentSlider = 1

chevronRight.addEventListener('click', function(){
  if(currentSlider === numSlider) {
    return;
  }
  count += 1920;
  
  currentSlider += 1;
    sliderItem1.forEach(item => {
      item.style.transform = `translateX(-${count}px)`;
    })
})

chevronLeft.addEventListener('click', function(){
  if(currentSlider === 1) {
    return;
  }
  count -= 1920;
  
  currentSlider -= 1;
    sliderItem1.forEach(item => {
      item.style.transform = `translateX(-${count}px)`;
    })
})

sliderDots.addEventListener('click', function(it){
  for(let i=0; i < sliderDots.children.length; i++){
    sliderDots.children[i].classList.remove('active-dot');
  }
   it.target.classList.add('active-dot')
})

sliderDots.addEventListener('click', function(it){
  for(let i=0; i < sliderDots.children.length; i++){
    sliderDots.children[i].classList.remove('active-dot');
  }
   it.target.classList.add('active-dot')
})


 
  

  
 