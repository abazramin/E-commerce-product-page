// buttons menu + close
const bar = document.getElementById("bar");
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const cart = document.getElementById("cart");
let close_show_img = document.getElementById("close-show-img");
let selected_img = document.querySelector(".select-img");

let increse = document.getElementById("increases");
let decreases = document.getElementById("decreases");
let amount_value = document.getElementById("amount-value");

let contentCart = document.querySelector(".content")
let count = document.getElementById("count");



// set settings
count.style.display = "none"
let firstValue = 0;

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
// 
const increaseValue = () => {
    firstValue++;
    amount_value.innerHTML = firstValue;
}
// 
const desncreaseValue = () => {
    if (firstValue >= 0) {
        amount_value.innerHTML = firstValue;
        firstValue--;
    }
}


const addItem = () => {
    if (firstValue > 0) {
        const total = 125.00 * firstValue;
        contentCart.classList.remove("empty");
        contentCart.innerHTML = `
        <div class="product">
            <div class="product-detils">
                <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                    <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> × <span class="number">${firstValue}</span> <b>$${total}</b></p>
                    </div>
                    <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
            </div>
                <button class="checkout-btn">Checkout</button>
        </div>`;
        count.style.display = "block";
        count.innerText = firstValue;
    }
}

const deleteItem = () => {
    contentCart.classList.add("empty");
    contentCart.innerHTML = `<p>Your cart is empty</p>`;
    count.style.display = "none";
}




// add events
cart.addEventListener(("click"), toggleCartItem)
bar.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)
selected_img.addEventListener('click', showImage)
close_show_img.addEventListener('click', removeImage)
increse.addEventListener('click', increaseValue)
decreases.addEventListener('click', desncreaseValue)
document.getElementById("submit").addEventListener('click', addItem)
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


// todo: add function to increse count and disincrease [done]
// todo: edit button close menu [done]
// todo: add icon add to cart [done]
// todo: create function addToCart [done]
// todo: edit cart item responsive in mobile + tap + screen + full screen [done]
// todo: edit prev and next button in swiper slider [done]
// todo: write cleen code and improve performance
