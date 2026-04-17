const products = [
    { id: 1, name: "Minimal Vest", price: 125, img: "https://unsplash.com" },
    { id: 2, name: "Silk Dress Noir", price: 210, img: "https://unsplash.com" },
    { id: 3, name: "Oversized Coat", price: 350, img: "https://unsplash.com" },
    { id: 4, name: "Tailored Trousers", price: 180, img: "https://unsplash.com" }
];

let cart = [];

function renderProducts() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button class="btn-add" onclick="addToCart(${p.id})">AÑADIR</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateUI();
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map((item, index) => `
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
            <span>${item.name}</span>
            <span>$${item.price} <button onclick="remove(${index})" style="border:none; background:none; cursor:pointer">✕</button></span>
        </div>
    `).join('');
    
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-price').innerText = total;
}

function remove(index) {
    cart.splice(index, 1);
    updateUI();
}

function toggleCart() {
    const m = document.getElementById('cart-modal');
    m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}

document.getElementById('checkout-form').onsubmit = (e) => {
    e.preventDefault();
    alert("ORDEN PROCESADA CON ÉXITO");
    cart = [];
    updateUI();
    toggleCart();
};

renderProducts();
