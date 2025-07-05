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

//dark mode-toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    console.log("Script loaded."); // Periksa apakah script berjalan
    console.log("darkToggle element:", darkToggle); // Pastikan elemen ditemukan

    if (!darkToggle) {
        console.error("Elemen #dark-toggle tidak ditemukan di DOM. Periksa ID atau urutan loading script.");
        return;
    }

    function applyDarkMode(isDark) {
        console.log("applyDarkMode called. isDark:", isDark);
        if (isDark) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
            darkToggle.checked = true;
            console.log("Mode gelap diterapkan. HTML classes:", html.classList);
        } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
            darkToggle.checked = false;
            console.log("Mode terang diterapkan. HTML classes:", html.classList);
        }
    }

    console.log("Initial check for localStorage.theme:", localStorage.theme);
    console.log("Initial check for prefersDarkScheme.matches:", prefersDarkScheme.matches);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDarkScheme.matches)) {
        console.log("Menerapkan mode gelap dari preferensi.");
        applyDarkMode(true);
    } else {
        console.log("Menerapkan mode terang dari preferensi.");
        applyDarkMode(false);
    }

    darkToggle.addEventListener('click', function () {
        console.log("Toggle clicked. darkToggle.checked (after click):", darkToggle.checked);
        applyDarkMode(darkToggle.checked);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        console.log("System prefers-color-scheme changed. Matches:", e.matches);
        if (!('theme' in localStorage)) {
            applyDarkMode(e.matches);
        }
    });
});