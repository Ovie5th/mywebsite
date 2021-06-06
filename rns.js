const hamburger = document.querySelector(".hamburger");
const togglebutton = document.querySelector(".toggle_button");
const mobileNav = document.querySelector(".mobile_nav_wrapper");
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle("open");
});

togglebutton.addEventListener('click', () => {
    mobileNav.classList.toggle("open");
})


const mobiledropdown = document.querySelectorAll(".mobile_dropdown_image");
const submenu = document.querySelectorAll(".mobile_sub_menu");
const leftarrow = document.querySelectorAll(".left_arrow");



pants = mobiledropdown[0];
shirts = mobiledropdown[1];
accessories = mobiledropdown[2];
shoes = mobiledropdown[3];
watches = mobiledropdown[4];
perfumes = mobiledropdown[5];


pantsmenu = submenu[0];
shirtssmenu = submenu[1];
accessoriessmenu = submenu[2];
shoesmenu = submenu[3];
watchesmenu = submenu[4];
perfumesmenu = submenu[5];


pantsleft = leftarrow[0];
shirtsleft = leftarrow[1];
accessoriesleft = leftarrow[2];
shoesleft = leftarrow[3];
watchesleft = leftarrow[4];
perfumesleft = leftarrow[5];

// event listeners for the dropdown menu

pants.addEventListener('click', () => {
    pantsmenu.classList.toggle("mobile_sub_new");
})

shirts.addEventListener('click', () => {
    shirtssmenu.classList.toggle("mobile_sub_new");
})
accessories.addEventListener('click', () => {
    accessoriessmenu.classList.toggle("mobile_sub_new");
})

shoes.addEventListener('click', () => {
    shoesmenu.classList.toggle("mobile_sub_new");
})

watches.addEventListener('click', () => {
    watchesmenu.classList.toggle("mobile_sub_new");
})

perfumes.addEventListener('click', () => {
    perfumesmenu.classList.toggle("mobile_sub_new");
})

// event listeners for the left arrow keys

pantsleft.addEventListener('click', () => {
    pantsmenu.classList.toggle("mobile_sub_new");
})

shirtsleft.addEventListener('click', () => {
    shirtssmenu.classList.toggle("mobile_sub_new");
})
accessoriesleft.addEventListener('click', () => {
    accessoriessmenu.classList.toggle("mobile_sub_new");
})

shoesleft.addEventListener('click', () => {
    shoesmenu.classList.toggle("mobile_sub_new");
})

watchesleft.addEventListener('click', () => {
    watchesmenu.classList.toggle("mobile_sub_new");
})

perfumesleft.addEventListener('click', () => {
    perfumesmenu.classList.toggle("mobile_sub_new");
})


// document.getElementById('frmSearch').onsubmit = function() {
//     window.location = 'http://www.google.com/search?q=site:rns.com.ng ' + document.getElementById('txtSearch').value;
//     return false;
// }