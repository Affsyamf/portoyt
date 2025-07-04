// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
        
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
}
}

//hum
const hum = document.querySelector('#hum');
const navMenu = document.querySelector('#nav-menu');

hum.addEventListener('click', function ()  {
    hum.classList.toggle('hum-active');
    navMenu.classList.toggle('hidden');
});

//click not hamburger
window.addEventListener('click', function (e) {
    if(e.target != hum && e.target != navMenu) {
        hum.classList.remove('hum-active');
        navMenu.classList.add('hidden');
    }
});