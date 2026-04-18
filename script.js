// Base de datos de productos
const products = [
    { id: 1, name: "Blusa Minimal", price: 45000, stock: 5, img: "https://unsplash.com" },
    { id: 2, name: "Pantalón Sastre", price: 89000, stock: 0, img: "https://unsplash.com" },
    { id: 3, name: "Top Crop", price: 32000, stock: 2, img: "https://unsplash.com" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
        <div class="p-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>$${p.price.toLocaleString()}</p>
            ${p.stock > 0 
                ? `<button class="btn-add" onclick="addToCart(${p.id})">AÑADIR</button>` 
                : `<span class="out-of-stock">AGOTADO</span>`}
        </div>
    `).join('');
}

window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (product && product.stock > 0) {
        cart.push({...product, cartId: Date.now()});
        updateCart();
    }
};

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.length;
    renderCartItems();
}

function renderCartItems() {
    const list = document.getElementById('cart-items-list');
    list.innerHTML = cart.map((item, index) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${item.name}</span>
            <button onclick="removeFromCart(${index})" style="border:none; color:red; cursor:pointer">X</button>
        </div>
    `).join('');
    
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('total-price').innerText = `$${total.toLocaleString()}`;
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCart();
};

// Eventos de Modal
const modal = document.getElementById('cart-modal');
document.getElementById('cart-icon').onclick = () => modal.style.display = 'block';
document.querySelector('.close').onclick = () => modal.style.display = 'none';

// Inicio
renderProducts();
updateCart();
