import { nuts } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { findById } from '../data/findbyid.js';

const tableBody = document.getElementById('table-body');
let totalPrice = 0;
const totalPriceContainer = document.getElementById('total-price-container');


    
for (let cartItem of cartItems){
        // console.log(itemObject);
        // console.log(itemObject.name);
        // console.log(itemObject.price);
        // console.log(cartItem.qty);
        
    const itemObject = findById(cartItem.id, nuts);
        
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdprice = document.createElement('td');
    const tdqty = document.createElement('td');
    const tdTotal = document.createElement('td');
        
    tdName.textContent = itemObject.name;
    tdprice.textContent = `$ ${itemObject.price} per lbs `;
    tdqty.textContent = cartItem.qty ;
    tdTotal.textContent = itemObject.price * cartItem.qty;
        
    tr.append(tdName, tdprice, tdqty, tdTotal);
        
    tableBody.append(tr);


        
        
        // console.log(totalPrice += Number(tdTotal.textContent));
        
    totalPrice += Number(tdTotal.textContent);
    console.log(totalPrice);

}
    
const tdempty1 = document.createElement('td');
const tdempty2 = document.createElement('td');
const tdTotalText = document.createElement('td');
const tdTotalPriceContent = document.createElement('td');
    
tdTotalPriceContent.textContent = ` $ ${totalPrice}`;
tdTotalText.textContent = 'Your Total';
    
    
    
    
    
totalPriceContainer.append(tdempty1, tdempty2, tdTotalText, tdTotalPriceContent);
    





