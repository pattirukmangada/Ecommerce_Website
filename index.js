document.addEventListener('DOMContentLoaded', () => { fetchProducts(); updateCartDisplay(); });
document.getElementById('all').addEventListener('click', () => fetchProducts());
document.getElementById('menBtn').addEventListener('click', () => fetchProducts('men\'s clothing'));
document.getElementById('womenBtn').addEventListener('click', () => fetchProducts('women\'s clothing'));
document.getElementById('electronicsBtn').addEventListener('click', () => fetchProducts('electronics'));
document.getElementById('jeweleryBtn').addEventListener('click', () => fetchProducts('jewelery'));

let cartCount = 0;

async function fetchProducts(category) 
    {
        let response = await fetch(`https://fakestoreapi.com/products${category ? '/category/' + category : ''}`);
        let products = await response.json();
        displayProducts(products);
    }

function displayProducts(products) {
    let productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
                <div class="item">
                    <div class="card">
                        <img src="${product.image}">
                        <h6 class=title>${product.title.substring(0,12)+"..."}</h6>
                        <p class=desc>${product.description.substring(0,140)+"..."}</p>
                        <span class=rate><i class="fa-thin fa-dollar-sign"></i> ${product.price}</span>
                        <h2><button>Details</button> <button onclick='addToCart()'>Add to Cart</button></h2>
                    </div>
                </div>`;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart() { cartCount++; updateCartDisplay(); } 
function updateCartDisplay()
{
    document.getElementById('cart').innerText = `Cart (${cartCount})`

};