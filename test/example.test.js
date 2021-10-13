// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { nuts } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { findById, calOrderTotal, getCart, addItem, clearCart} from '../data/functions.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
 
    const expected = true;
    
    const actual = true;

    expect.equal(actual, expected);
});
test('check if imput id returns the correct item values', (expect) =>{
    const expected = {
        id:'1', 
        name: 'Almonds',
        img: './assets/almonds.jpeg',
        description:'Almonds can be characterized by three flavor phenotypes: sweet (non-bitter), slightly bitter (or semi-bitter), and bitter.',
        catagory:'nuts',
        price: 10,

    };
    const actual = findById('1', nuts);
    expect.deepEqual(actual, expected); 


});
test('chekcing to make sure the total number is accuret', (expect) =>{
    const expected = 7.1;

    const actual = calOrderTotal(nuts, cartItems);
    expect.deepEqual(actual, expected);

});


test('making sure the get cart function is working properly', (expect)=>{

    const mockCart = [
        { id: 1, qty :3 }, 
        { id: 3, qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(mockCart));

    const actual = getCart();

    expect.deepEqual(mockCart, actual);


});

test('making sure the addItem funciton is working proper;y', (expect)=>{

    localStorage.removeItem('CART');

    const mockCart = [
        { id: 1, qty :3 }, 
        { id: 3, qty: 1 }
    ];

    const mockCartString = [
        { 'id':1, 'qty':3 }, 
        { 'id':3, 'qty': 2 }
    ];
    localStorage.setItem('CART', JSON.stringify(mockCart));

    const actual = addItem(3);

    expect.deepEqual(actual, mockCartString); 

});

test('making sure the clear cart function', (expect) =>{

    const expected = '[]';

    const actual = clearCart();

    expect.deepEqual(actual, expected);


});