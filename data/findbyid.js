// import { cartItems } from './cart-data.js';
// import { nuts } from './products.js';

export function findById(id, items){
    
    for (let item of items){
        if (item.id === id){
            return item;
        }

    }
}