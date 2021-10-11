import { nuts } from './products.js';


const renderButton = document.getElementById('render-button');
const listOfNuts = document.getElementById('list-of-nuts');


renderButton.addEventListener('click', ()=>{

    for (let allnuts of nuts){
    
        const nutContainer = document.createElement('div.');
        const nutName = document.createElement('h2');
        const img = document.createElement('img');
    
        nutContainer.classList.add('nut-container');
        
        // console.log(nuts.name);
    
        nutName.textContent = allnuts.name;
        img.src = allnuts.img;
    
        nutContainer.append(nutName, img);
        
        
        listOfNuts.append(nutContainer);

        
        
    }
      


  
  
});
  





//<div class="nut-container">
//<h2>Almonds</h2>
//<img src="./assets/almonds.jpeg" alt="picture of an almond">
//<p>$10 per lbs.</p>
//</div> 

