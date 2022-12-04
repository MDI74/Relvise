const menuBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__menu');
const columnContacts = document.querySelectorAll('[data-contact]')
const itemsContact = document.querySelectorAll('.item-contact')

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
    const headerMenu = this.closest('.header__menu');
    headerMenu.classList.remove('active');
    menuBurger.classList.remove('active');
    menuBurger.style.cssText= "";
})

columnContacts.forEach(function(item){
    item.addEventListener('click', function(){
        const contact = document.querySelector('#' + this.dataset.contact);

        itemsContact.forEach(function (item) { 
            item.classList.remove('active');
       })

        contact.classList.toggle('active');

    })

})


