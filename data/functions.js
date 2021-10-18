

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function renderLineItems(itemObject, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdprice = document.createElement('td');
    const tdqty = document.createElement('td');
    const tdTotal = document.createElement('td');
    
    tdName.textContent = itemObject.name;
    tdprice.textContent = `$ ${itemObject.price} per lbs `;
    tdqty.textContent = cartItem.qty ;
    tdTotal.textContent = itemObject.price * cartItem.qty;
    
    tr.append(tdName, tdprice, tdqty, tdTotal);
    return tr;
}

export function calOrderTotal(nuts, cartItems){
    let totalPrice = 0;
    for (let cartItem of cartItems){

        const itemObject = findById(cartItem.id, nuts);
        totalPrice += itemObject.price * cartItem.qty;
    }
    return totalPrice;
}

export function getCart(){
    const cart = JSON.parse(localStorage.getItem('CART') || '[]');
    
    return cart;
}

export function addItem(id) {

    const currentCart = getCart(); 

    const itemToAdd = findById(id, currentCart);

    if (itemToAdd){
        itemToAdd.qty++;

    } else {
        const newCartItem = { 'id': id, 'qty': 1 };
        currentCart.push(newCartItem);
    }
    
    localStorage.setItem('CART', JSON.stringify(currentCart));

    return currentCart;
}

export function clearCart(){
    let currentCart = getCart();
    currentCart = '[]';
    localStorage.removeItem('CART');
    return currentCart;
}
