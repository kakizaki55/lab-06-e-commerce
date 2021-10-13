import { nuts } from '../data/products.js';
// import { cartItems } from '../data/cart-data.js';
import { findById, calOrderTotal, renderLineItems, getCart } from '../data/functions.js';
// import { renderLineItems } from '../data/render-line-item.js';

const cartItems = getCart();

const tableBody = document.getElementById('table-body');
const totalPriceContainer = document.getElementById('total-price-container');

    
for (let cartItem of cartItems){
        // console.log(itemObject);
        // console.log(itemObject.name);
        // console.log(itemObject.price);
        // console.log(cartItem.qty);
    
        
    const itemObject = findById(cartItem.id, nuts);
    const renderedItems = renderLineItems(itemObject, cartItem); 
    tableBody.append(renderedItems);
}

    
        
    // const tr = document.createElement('tr');
    // const tdName = document.createElement('td');
    // const tdprice = document.createElement('td');
    // const tdqty = document.createElement('td');
    // const tdTotal = document.createElement('td');
        
    // tdName.textContent = itemObject.name;
    // tdprice.textContent = `$ ${itemObject.price} per lbs `;
    // tdqty.textContent = cartItem.qty ;
    // tdTotal.textContent = itemObject.price * cartItem.qty;
        
    // tr.append(tdName, tdprice, tdqty, tdTotal);
        


const tdempty1 = document.createElement('td');
const tdempty2 = document.createElement('td');
const tdTotalText = document.createElement('td');
const tdTotalPriceContent = document.createElement('td');
    
tdTotalPriceContent.textContent = ` $ ${calOrderTotal(nuts, cartItems)}`;
tdTotalText.textContent = 'Your Total';

totalPriceContainer.append(tdempty1, tdempty2, tdTotalText, tdTotalPriceContent);
    





