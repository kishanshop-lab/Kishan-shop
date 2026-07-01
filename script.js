function searchProduct(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Product
function addToCart(name, price) {

    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added To Cart");
}

// Cart Page
function loadCart() {

    let table = document.getElementById("cartTable");

    if (!table) return;

    table.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {

        let total = item.price * item.quantity;

        grandTotal += total;

        table.innerHTML += `

<tr>

<td>${item.name}</td>

<td>₹${item.price}</td>

<td>

<button onclick="decreaseQty(${index})">-</button>

${item.quantity}

<button onclick="increaseQty(${index})">+</button>

</td>

<td>₹${total}</td>

<td>

<button onclick="removeItem(${index})">
Remove
</button>

</td>

</tr>

`;

    });

    document.getElementById("grandTotal").innerHTML = grandTotal;

}

// Increase
function increaseQty(index){

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// Decrease
function decreaseQty(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// Remove
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// Payment
function placeOrder(){

    let payment=document.querySelector('input[name="payment"]:checked').value;

    alert("Order Placed Successfully\nPayment : "+payment);

    localStorage.removeItem("cart");

}

window.onload=loadCart;

let total = 0;

function addToCart(name, price){

let cart = document.getElementById("cart");

let item = document.createElement("li");

item.innerHTML = name + " - ₹" + price;

cart.appendChild(item);

total = total + price;

document.getElementById("total").innerHTML = total;

}

function placeOrder() {

    let payment = document.querySelector('input[name="payment"]:checked').value;

    document.getElementById("message").innerHTML =
    "✅ Order Placed Successfully!<br>Payment Method: " + payment;

}

function login(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email=="admin@gmail.com" && password=="12345"){

document.getElementById("loginMessage").innerHTML="✅ Login Successful";

window.location="index.html";

}else{

document.getElementById("loginMessage").innerHTML="❌ Invalid Email or Password";

}

}

function signup(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if(name==="" || email==="" || password===""){
        alert("Please fill all fields");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully!");

    window.location.href = "login.html";
}


function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if(user && email === user.email && password === user.password){

        alert("Login Successful");

        window.location.href = "index.html";

    }else{

        alert("Invalid Email or Password");

    }

}

// Show Logged In User
function loadUser(){

    let user = JSON.parse(localStorage.getItem("user"));

    let welcome = document.getElementById("welcomeUser");

    if(welcome){

        if(user){

            welcome.innerHTML = "👋 " + user.name;

        }else{

            welcome.innerHTML = "Guest";

        }

    }

}

// Logout
function logout(){

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}

function addWishlist(product){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(product + " added to Wishlist ❤️");

}

function loadWishlist(){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let list = document.getElementById("wishlist");

    list.innerHTML = "";

    wishlist.forEach(function(product){

        let li = document.createElement("li");

        li.innerHTML = product;

        list.appendChild(li);

    });

}

function loadWishlist(){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let list = document.getElementById("wishlist");

    list.innerHTML = "";

    wishlist.forEach(function(product,index){

        let li = document.createElement("li");

        li.innerHTML = `
            ${product}
            <button onclick="removeWishlist(${index})">
                ❌ Remove
            </button>
        `;

        list.appendChild(li);

    });

}

function removeWishlist(index){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.splice(index,1);

    localStorage.setItem("wishlist",JSON.stringify(wishlist));

    loadWishlist();

}



function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added to Cart 🛒");

}

function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let list = document.getElementById("cartList");

    let total = 0;

    list.innerHTML = "";

    cart.forEach(function(item, index){

        total += item.price;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ₹${item.price}

            <button onclick="removeCart(${index})">
                ❌ Remove
            </button>
        `;

        list.appendChild(li);

    });

    document.getElementById("grandTotal").innerHTML = total;

}

function removeCart(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}
