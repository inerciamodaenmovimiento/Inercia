// Lógica del Admin Oculto
let secretCode = "";
const targetCode = "0110";

document.addEventListener('keydown', (e) => {
    // Solo permitimos números para el código
    if (!isNaN(e.key)) {
        secretCode += e.key;

        // Mantener solo los últimos 4 caracteres
        if (secretCode.length > 4) {
            secretCode = secretCode.substring(secretCode.length - 4);
        }

        // Verificar código
        if (secretCode === targetCode) {
            document.getElementById('adminPanel').style.display = 'flex';
            secretCode = ""; // Resetear tras entrar
            console.log("Acceso concedido");
        }
    }
});

function closeAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
}

// Ejemplo de interactividad básica: Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.boxShadow = 'none';
    }
});
