// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik 
document.querySelector('#hamburger-menu').oncklik = () => {
    navbarnav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('clik', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active')
    }
});