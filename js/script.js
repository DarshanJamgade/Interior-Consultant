const hamburger = document.querySelector('[data-hamburger]');
const navToggle = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    navToggle.classList.toggle('show');
})