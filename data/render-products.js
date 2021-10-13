import { addItem, findById, getCart } from './functions.js';


export function renderProducts(allnuts){

    
    const nutContainer = document.createElement('div.');
    const nutName = document.createElement('h2');
    const img = document.createElement('img');
    const price = document.createElement('p');
    const description = document.createElement('p');
    const displayText = document.createElement('p');
    const button = document.createElement('button');

    
    price.classList.add('price');
    nutContainer.classList.add('nut-container');
    description.classList.add('description');
    displayText.classList.add('text');
    
    // console.log(nuts.name)
    
    nutName.textContent = allnuts.name;
    img.src = allnuts.img;
    price.textContent = ` $ ${allnuts.price}`;
    button.value = allnuts.id;
    button.textContent = 'add to cart';
    
    
    const cartNumDisplay = document.createElement('div');

    button.addEventListener('click', ()=> {
        // console.log(button.value);
        addItem(button.value);
       
        // console.log(getCart(button.value));
        let cart = getCart(button.value);
        cartNumDisplay.textContent = findById(button.value, cart).qty;
        return cartNumDisplay;
    });
    




    description.textContent = allnuts.description;
    nutContainer.append(nutName, img, cartNumDisplay, price, button,);
    displayText.append(description);
    nutContainer.append(displayText);
    
    return nutContainer;
}