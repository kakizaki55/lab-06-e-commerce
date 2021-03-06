// IMPORT MODULES under test here:
// import { example } from '../example.js';

// import { nuts } from '../data/products.js';
import { cartItems } from '../data/cart-data.js';
import { findById, calOrderTotal, getCart, addItem, clearCart, getProducts, addProduct } from '../data/functions.js';

const nuts = getProducts();
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
        { id: 3, qty: 5 }
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

test('making sure the getproducts function is wokring', (expect) =>{
    
    const expected = {
        id:'1', 
        name: 'Almonds',
        img: './assets/almonds.jpeg',
        description:'Almonds can be characterized by three flavor phenotypes: sweet (non-bitter), slightly bitter (or semi-bitter), and bitter.',
        catagory:'nuts',
        price: 10,

    };
    const actual = getProducts()[0];
    expect.deepEqual(actual, expected);
     

});

test('makeing sure adding the product is working and saving it to local storage', (expect)=>{

    const expected = 6;

    // let products = getProducts();

    const newProduct = {
        id: 6,
        name: 'coconut',
        img: './assets/coconut.jpeg',
        description:'just a tasty little treat from the tropics',
        catagory:'tropical nuts',
        price: 3,
    };
    addProduct(newProduct);

    const actual = getProducts();

    expect.deepEqual(actual.length, expected);

});