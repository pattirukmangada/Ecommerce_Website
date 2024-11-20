document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function updateCartCount() {
    const savedCart = localStorage.getItem('cart');
    let cartCount = 0;
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    }
    document.getElementById('count-cart').innerText = cartCount;
}
