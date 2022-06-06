let body = document.querySelector('body');
let intro_image = document.querySelector('header section.main-header img');
let menu = document.querySelector('header nav.top-header img:nth-child(2)');
let menu_items = document.querySelector('header nav.top-header ul');
if(window.innerWidth > 649){
   intro_image.setAttribute('src', './images/image-intro-desktop.jpg');
}
menu.addEventListener('click', () => {
   menu_items.classList.toggle('show');
   body.classList.toggle('menu-open');
})