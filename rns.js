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
const lefts = document.querySelectorAll(".left_arrow");

// mobiledropdown.forEach(mobiledrop => {
//     submenu.forEach(menu => {
//         mobiledrop.addEventListener('click', () => {
//             menu.classList.toggle("mobile_sub_new");
//         })
//     })
// })



// mobiledropdown.forEach(mobiledrop => {
//     submenu.forEach(menu => {
//         mobiledrop.addEventListener('click', () => {
//             menu.classList.toggle("mobile_sub_menu");
//         })
//     })
// })


a = mobiledropdown[0];
b = mobiledropdown[1];
c = mobiledropdown[2];
d = mobiledropdown[3];
e = mobiledropdown[4];
f = mobiledropdown[5];
aa = submenu[0];
bb = submenu[1];
cc = submenu[2];
dd = submenu[3];
ee = submenu[4];
ff = submenu[5];
l = lefts[0];
m = lefts[1];
n = lefts[2];
o = lefts[3];
p = lefts[4];
q = lefts[5];
r = lefts[6];

a.addEventListener('click', () => {
    aa.classList.toggle("mobile_sub_new");
})

b.addEventListener('click', () => {
    bb.classList.toggle("mobile_sub_new");
})
c.addEventListener('click', () => {
    cc.classList.toggle("mobile_sub_new");
})

d.addEventListener('click', () => {
    dd.classList.toggle("mobile_sub_new");
})

e.addEventListener('click', () => {
    ee.classList.toggle("mobile_sub_new");
})

f.addEventListener('click', () => {
    ff.classList.toggle("mobile_sub_new");
})

l.addEventListener('click', () => {
    aa.classList.toggle("mobile_sub_new");
})
m.addEventListener('click', () => {
    bb.classList.toggle("mobile_sub_new");
})
n.addEventListener('click', () => {
    cc.classList.toggle("mobile_sub_new");
})
o.addEventListener('click', () => {
    dd.classList.toggle("mobile_sub_new");
})
p.addEventListener('click', () => {
    ee.classList.toggle("mobile_sub_new");
})
q.addEventListener('click', () => {
    ff.classList.toggle("mobile_sub_new");
})



// lefts.forEach(left => {



//     left.addEventListener('click', e => {
//         e.target = left.classList.toggle('mobiledropdown');
//         // })
//         // left.addEventListener('click', () => {
//         //     b.classList.toggle('mobile_sub_new');
//         // })
//         // left.addEventListener('click', () => {
//         //     cc.classList.toggle('mobile_sub_new');
//         // })
//         // left.addEventListener('click', () => {
//         //     dd.classList.toggle('mobile_sub_new');
//         // })
//         // left.addEventListener('click', () => {
//         //     ee.classList.toggle('mobile_sub_new');
//         // })
//         // left.addEventListener('click', () => {
//         //     ff.classList.toggle('mobile_sub_new');
//     })
// })


// mobiledropdown.addEventListener('click', () => {
//     submenu.classList.toggle("mobile_sub_new");
// })

// left.forEach(lef => {
//     lef.addEventListener('click', () => {
//         submenu.forEach(sub => {
//             sub.classList.toggle("mobile_sub_new");
//         })
//     })
// })

// togglebutton.addEventListener('click', () => {
//     submenu.classList.toggle("hamburger");
// })