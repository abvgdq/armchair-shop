const burgerMenu = document.querySelector('.burger-menu')
const headerDown = document.querySelector('.header-down')
  

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('change');
  headerDown.classList.toggle('active')
})