document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function updateCartCount() {
    const savedCart = localStorage.getItem('cart');
    let cart = [];
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('count-cart').innerText = cartCount;
}
