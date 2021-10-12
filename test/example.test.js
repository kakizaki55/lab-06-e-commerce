// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { nuts } from '../data/products.js';
// import { cartItems } from '../data/cart-data.js';
import { findById } from '../data/findbyid.js';


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
        price: '$10 per lbs',

    };
    const actual = findById('1', nuts);
    expect.deepEqual(actual, expected); 


});