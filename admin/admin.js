import { addProduct, getProducts } from '../data/functions.js';



console.log(getProducts());

const form = document.getElementById('product-form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const newNut = {
        id: formData.get('id'),
        name: formData.get('name'),
        img: formData.get('img'),
        descriptioin: formData.get('description'),
        price: formData.get('price'),
        catagory: formData.get('catagory'),
    };
    addProduct(newNut); 
    form.reset();
});