const menuBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__menu ');

menuBurger.addEventListener('click', function(){
    if(menuBurger.classList.toggle('active')){
        menuBurger.style.cssText= "position: fixed; top: 42px; right: 15px;"
    }
    else{
        menuBurger.style.cssText= ""
    }
    navMenu.classList.toggle('active');

    

})

navMenu.addEventListener('click', function () {
    const headerMenu = this.closest('.header__menu ');
    headerMenu.classList.remove('active');
    menuBurger.classList.remove('active');
    menuBurger.style.cssText= ""


})


