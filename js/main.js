const menuBurger = document.querySelector('.header__burger');

console.log(menuBurger);

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active')
})
