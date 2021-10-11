import { nuts } from './products.js';
import { renderProducts } from './render-products.js';


const renderButton = document.getElementById('render-button');
const listOfNuts = document.getElementById('list-of-nuts');


renderButton.addEventListener('click', ()=>{

    for (let allnuts of nuts){

        const nutItem = renderProducts(allnuts);
        
        listOfNuts.append(nutItem);
        
        
    }
});
  





//<div class="nut-container">
//<h2>Almonds</h2>
//<img src="./assets/almonds.jpeg" alt="picture of an almond">
//<p>$10 per lbs.</p>
//</div> 

