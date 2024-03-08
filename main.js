// buttons menu + close
const bar = document.getElementById("bar");
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const cart = document.getElementById("cart");
let close_show_img = document.getElementById("close-show-img");
let selected_img = document.querySelector(".select-img");
//  add class active
const openMenu = () => {
    nav.classList.add("active")
}
// remove class active
const closeMenu = () => {
    nav.classList.remove("active")
}
// Toggle cart Item
const toggleCartItem = () => {
    let cartClick = document.getElementById("cart-click")
    cartClick.classList.toggle("on");
}
// 
const changeImage = () => {
    let gallry_img = document.querySelectorAll(".gallry");
    // 
    gallry_img.forEach((img) => {
        img.addEventListener('click', function () {
            selected_img.src = img.src;
        })
    })
}
// call function to change images
changeImage()
// show image 
const showImage = () => {
    let detils_img = document.querySelector(".detils-imgs");
    detils_img.style.display = "block";
}
// 
const removeImage = () => {
    let detils_img = document.querySelector(".detils-imgs");
    detils_img.style.display = "none";
}
// add events
cart.addEventListener(("click"), toggleCartItem)
bar.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)
selected_img.addEventListener('click', showImage)
close_show_img.addEventListener('click', removeImage)


// settings swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});