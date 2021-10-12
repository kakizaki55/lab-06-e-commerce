

export function findById(id, items){
    
    for (let item of items){
        if (item.id === id){
            return item;
        }

    }
}

export function calOrderTotal(nuts, cartItems){
    let totalPrice = 0;
    for (let cartItem of cartItems){

        const itemObject = findById(cartItem.id, nuts);
        totalPrice += itemObject.price * cartItem.qty;
        
    }
    return totalPrice;

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
