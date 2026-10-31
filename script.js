document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById('burgerBtn');
    const nav = document.querySelector('.header__nav');
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('header__nav_active');
            burger.classList.toggle('active');
        });
    }
});