// import { nuts } from '../data/products.js';
// import { cartItems } from '../data/cart-data.js';
import { findById, calOrderTotal, renderLineItems, getCart, getProducts } from '../data/functions.js';
// import { renderLineItems } from '../data/render-line-item.js';
const nuts = getProducts();
const cartItems = getCart();

const tableBody = document.getElementById('table-body');
const totalPriceContainer = document.getElementById('total-price-container');

for (let cartItem of cartItems){
    const itemObject = findById(cartItem.id, nuts);
    const renderedItems = renderLineItems(itemObject, cartItem); 
    tableBody.append(renderedItems);
}

const tdempty1 = document.createElement('td');
const tdempty2 = document.createElement('td');
const tdTotalText = document.createElement('td');
const tdTotalPriceContent = document.createElement('td');
    
tdTotalPriceContent.textContent = ` $ ${calOrderTotal(nuts, cartItems)}`;
tdTotalText.textContent = 'Your Total';

totalPriceContainer.append(tdempty1, tdempty2, tdTotalText, tdTotalPriceContent);
const placeOrderButton = document.getElementById('place-order');

placeOrderButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
    // localStorage.clear();
});
    





