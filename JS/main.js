let menu = document.querySelector("header nav ul");
function showMenu() {
    menu.style.display = "block";
}
function closeMenu() {
    menu.style.display = "none";
}


// Show Cart
function showCart() {
    document.querySelector(".shop").classList.toggle("active");
}
let cartItem = document.querySelector(".cart-items");
let addItem = document.querySelector(".add-btn");
function addToCart() {
    for(let i = 1; i <= countAddProducts.innerHTML; i++){
        cartItem.innerHTML += `
            <div class="cart-item">
                <img class= "product" src="Images/image-product-1.jpg" alt="product">
                <div class="cart-item-info">
                    <p>Fall Limited Edition Sneakers</p>
                    <P>$125.00 x 3 <span>$375.00</span></P>
                </div>
                <button onclick= "removeItem(this)" class="remove-btn"><i class="fa-solid fa-trash"></i></button>
                <button class="check-btn">Checkout</button>
            </div>`;
    }
    if(document.querySelector(".massage")){
        document.querySelector(".massage").remove();
    }
    countItem();
    countAddProducts.innerHTML = 1;
}
function removeItem(e) {
    e.parentElement.remove();
    if(cartItem.children.length === 0){
        cartItem.innerHTML = `<p class="massage">Your cart is empty</p>`;
    }
    countItem();
}

function countItem() {
    let countItemInCart = document.querySelector(".count-item");
    countItemInCart.innerHTML = cartItem.children.length;
    if (document.querySelector(".massage")) {
        countItemInCart.innerHTML = 0;
        countItemInCart.style.display = "none";
    }else {
        countItemInCart.style.display = "block";
    }
}


// Show Products
let showImg = document.querySelector(".main-img");
let showImg2 = document.querySelector(".show-products .main-img");
function show(source) {
    let imgProduct = document.querySelectorAll(".sub img");
    showImg.src = source.src;
    showImg2.src = source.src;
    imgProduct.forEach(element => {
        element.classList.remove("active-img");
    });
    source.classList.add("active-img");
}
function showPro() {
    document.querySelector(".show-products").classList.remove("active");    
}

document.querySelector(".close").addEventListener("click", () => {  
    document.querySelector(".show-products").classList.add("active");
});

// Add Product to Cart

let countAddProducts = document.querySelector(".count");
function decrement() {
    if(countAddProducts.innerHTML > 1){
        countAddProducts.innerHTML--;
    }
}
function increment() {
    if(countAddProducts.innerHTML > 0 ){
        countAddProducts.innerHTML++;
    }
}

// Slider
let Slider = document.querySelectorAll(".show-products .sub img");
function arrowRight() {
    if(showImg2.src === Slider[0].src){
        showImg2.src = Slider[1].src;
        Slider[1].classList.add("active-img");
        Slider[0].classList.remove("active-img");
    }else if(showImg2.src === Slider[1].src){
        showImg2.src = Slider[2].src;
        Slider[2].classList.add("active-img");
        Slider[1].classList.remove("active-img");
    }else if(showImg2.src === Slider[2].src){
        showImg2.src = Slider[3].src;
        Slider[3].classList.add("active-img");
        Slider[2].classList.remove("active-img");
    }else if(showImg2.src === Slider[3].src){
        showImg2.src = Slider[0].src;
        Slider[0].classList.add("active-img");
        Slider[3].classList.remove("active-img");
    }else {
        showImg2.src = Slider[0].src;
        Slider[0].classList.add("active-img");
    }
    showImg.src = showImg2.src;
}
function arrowLeft() {
    if(showImg2.src === Slider[0].src){
        showImg2.src = Slider[3].src;
        Slider[3].classList.add("active-img");
        Slider[0].classList.remove("active-img");
    }else if(showImg2.src === Slider[1].src){
        showImg2.src = Slider[0].src;
        Slider[0].classList.add("active-img");
        Slider[1].classList.remove("active-img");
    }else if(showImg2.src === Slider[2].src){
        showImg2.src = Slider[1].src;
        Slider[1].classList.add("active-img");
        Slider[2].classList.remove("active-img");
    }else if(showImg2.src === Slider[3].src){
        showImg2.src = Slider[2].src;
        Slider[2].classList.add("active-img");
        Slider[3].classList.remove("active-img");
    }else {
        showImg2.src = Slider[0].src;
        Slider[0].classList.add("active-img");
    }
    showImg.src = showImg2.src;
}