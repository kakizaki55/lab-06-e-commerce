import { nuts } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { findById } from '../data/findbyid.js';

const tableBody = document.getElementById('table-body');

for (let cartItem of cartItems){{
    const itemObject = findById(cartItem.id, nuts);
    console.log(itemObject);
    console.log(itemObject.name);
    console.log(itemObject.price);
    console.log(cartItem.qty);


    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdprice = document.createElement('td');
    const tdqty = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdName.textContent = itemObject.name;
    tdprice.textContent = itemObject.price;
    tdqty.textContent = cartItem.qty;
    tdTotal.textContent = itemObject.price * cartItem.qty;

    tr.append(tdName, tdprice, tdqty, tdTotal);
    tableBody.append(tr);

}}

