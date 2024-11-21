document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});
function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart').innerText = `Cart (${cartCount})`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

loadCart();
updateCartDisplay();