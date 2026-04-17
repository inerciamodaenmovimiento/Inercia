const products = [
    { id: 1, name: "Blazer Sastre Negro", price: 85000, img: "https://unsplash.com" },
    { id: 2, name: "Pantalón Wide Leg", price: 42000, img: "https://unsplash.com" },
    { id: 3, name: "Mocasines Cuero", price: 56000, img: "https://unsplash.com" },
    { id: 4, name: "Tapado de Lana", price: 120000, img: "https://unsplash.com" }
];

let cart = [];

// Cargar catálogo
function renderProducts() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price.toLocaleString()}</p>
            <button class="btn-add" onclick="addToCart(${p.id})">Agregar al Carrito</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price.toLocaleString()} <button onclick="removeFromCart(${index})">❌</button></span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.innerText = total.toLocaleString();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

document.getElementById('checkout-form').onsubmit = (e) => {
    e.preventDefault();
    alert("¡Compra Exitosa! Gracias por elegir Minimal Studio.");
    cart = [];
    updateCart();
    toggleCart();
};

// Inicializar
renderProducts();
