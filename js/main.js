const menuBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__menu ');

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

navMenu.addEventListener('click', function () {
    const headerMenu = this.closest('.header__menu ');
    headerMenu.classList.remove('active');
    menuBurger.classList.remove('active');
})


