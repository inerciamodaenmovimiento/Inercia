const products = [
    { id: 1, name: "Vestido Minimal", price: 120, img: "https://unsplash.com" },
    { id: 2, name: "Saco Sastre", price: 210, img: "https://unsplash.com" },
    { id: 3, name: "Top Lino", price: 85, img: "https://unsplash.com" },
    { id: 4, name: "Botas Cuero", price: 150, img: "https://unsplash.com" }
];

let cart = [], sales = 0, orders = 0, inputStr = "";

// Cargar catálogo
const grid = document.getElementById('catalog');
grid.innerHTML = products.map(p => `
    <div class="product-card">
        <img src="${p.img}?w=400">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="add(${p.id})" style="width:100%; cursor:pointer; background:none; border:1px solid #000; font-size:10px; padding:5px;">ADD</button>
    </div>
`).join('');

function add(id) {
    cart.push(products.find(p => p.id === id));
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart() {
    const m = document.getElementById('cart-modal');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
    renderCart();
}

function renderCart() {
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('total').innerText = total;
    document.getElementById('items').innerHTML = cart.map(i => `<p>${i.name} - $${i.price}</p>`).join('');
}

document.getElementById('checkout').onsubmit = (e) => {
    e.preventDefault();
    sales += cart.reduce((s, i) => s + i.price, 0);
    orders++;
    alert("COMPRA EXITOSA");
    cart = []; toggleCart();
};

// --- CÓDIGO INVISIBLE 0110 ---
window.addEventListener('keydown', (e) => {
    inputStr += e.key;
    if (inputStr.endsWith("0110")) {
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('sales').innerText = sales;
        document.getElementById('orders').innerText = orders;
    }
});
