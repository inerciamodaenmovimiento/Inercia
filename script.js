const products = [
    { id: 1, name: "BLAZER SARTRE", price: 250, img: "https://unsplash.com" },
    { id: 2, name: "PANTALÓN WIDE", price: 180, img: "https://unsplash.com" },
    { id: 3, name: "MOCASINES UKR", price: 120, img: "https://unsplash.com" },
    { id: 4, name: "TAPADO WOOL", price: 400, img: "https://unsplash.com" }
];

let cart = [];
let salesTotal = 0;
let ordersCount = 0;
let inputKeys = ""; // Para rastrear el código 0110

// Renderizar Productos
function init() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button class="btn-add" onclick="addToCart(${p.id})">AGREGAR</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    cart.push(p);
    document.getElementById('cart-count').innerText = cart.length;
    updateCartUI();
}

function updateCartUI() {
    const itemsDiv = document.getElementById('cart-items');
    itemsDiv.innerHTML = cart.map((item, idx) => `
        <div style="font-size:11px; margin-bottom:10px; display:flex; justify-content:space-between">
            <span>${item.name}</span>
            <span onclick="remove(${idx})" style="cursor:pointer">✕</span>
        </div>
    `).join('');
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-price').innerText = total;
}

function remove(idx) { cart.splice(idx,1); updateCartUI(); }

function toggleCart() {
    const m = document.getElementById('cart-modal');
    m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}

// Lógica de Compra y Admin
document.getElementById('checkout-form').onsubmit = (e) => {
    e.preventDefault();
    const total = cart.reduce((s, i) => s + i.price, 0);
    salesTotal += total;
    ordersCount++;
    alert("COMPRA REALIZADA");
    cart = [];
    updateCartUI();
    toggleCart();
};

// --- DETECTOR DE CÓDIGO INVISIBLE ---
window.addEventListener('keydown', (e) => {
    inputKeys += e.key;
    if (inputKeys.includes("0110")) {
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('admin-total-sales').innerText = `$${salesTotal}`;
        document.getElementById('admin-orders').innerText = ordersCount;
        inputKeys = ""; // reset
    }
    if (inputKeys.length > 10) inputKeys = ""; 
});

function closeAdmin() { document.getElementById('admin-panel').style.display = 'none'; }

init();
