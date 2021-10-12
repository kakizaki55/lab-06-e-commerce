import { nuts } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { findById } from '../data/findbyid.js';

for (let cartItem of cartItems){{
    const itemObject = findById(cartItem.id, nuts);
    console.log(itemObject);
    console.log(itemObject.name);
    console.log(itemObject.price);
    console.log(cartItem.qty);

}}

