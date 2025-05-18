const productButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartButton = document.getElementById('clear-cart');

let total = 0;

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement.querySelector('.product').textContent;
        const price = parseFloat(button.parentElement.querySelector('.price').textContent.replace('₱', ''));
        
        total += price;
        cartTotal.textContent = '₱' + total.toFixed(2);

        const cartItem = document.createElement('li');
        cartItem.textContent = `${product} - ₱${price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
});

clearCartButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
    total = 0;
    cartTotal.textContent = '₱' + total.toFixed(2);
});