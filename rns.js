const hamburger = document.querySelector(".hamburger");
const togglebutton = document.querySelector(".toggle_button");
const mobileNav = document.querySelector(".mobile_nav_wrapper");
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle("open");
});

togglebutton.addEventListener('click', () => {
    mobileNav.classList.toggle("open");
})