// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
}
}

//hum
const hum = document.querySelector('#hum');
const navMenu = document.querySelector('#nav-menu');

hum.addEventListener('click', function ()  {
    hum.classList.toggle('hum-active');
    navMenu.classList.toggle('hidden');
});