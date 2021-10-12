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
    price.textContent = allnuts.price;
    button.value = allnuts.id;
    button.textContent = 'add to cart';


    description.textContent = allnuts.description;
   
    
    nutContainer.append(nutName, img);
    displayText.append(description, price, button);
    nutContainer.append(displayText);
    
    return nutContainer;
}
{/* <div class="nut-container">
                
                
                <h2>Almonds</h2>
                <img src="./assets/almonds.jpeg" alt="picture of an almond">
                
                <div class="text">
                <p class= "description"> Sunflower seeds have a mild, nutty flavor and a firm but tender texture.</p>
                <p class ="price">$10 per lbs.</p>
                </div>
                    

        </div> */}
