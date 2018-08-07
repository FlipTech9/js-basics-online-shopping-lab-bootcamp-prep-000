var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var items = createCartItem(item)
<<<<<<< HEAD
 getCart().push(items)
 return `${items.itemName} has been added to your cart.` 
=======
 getCart().push(items);
 return `${items.itemName} has been added to your cart` ;
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
}

function viewCart() {
  // write your code here
<<<<<<< HEAD
  return getCart().length === 0 ? "Your shopping cart is empty.": cartDescription()
=======
  return getCart().length === 0 ? "Your shopping cart is empty.": cartDescription();
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
}

function total() {
  // write your code here
<<<<<<< HEAD
  var total = totalCost()
    
  return total
=======
  var total = totalCost();
    
  return total;
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
}

function removeFromCart(itemName) {
  // write your code here
<<<<<<< HEAD
  var itemRemoval = searchItemRemoval(itemName)
    return itemRemoval ? itemCartRemoval(itemName): itemNotInCart()
=======
  var itemRemoval = searchItemRemoval(item)
    return itemRemoval ? itemRemoval(item): itemNotInCart()
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
  
}

function placeOrder(ccNumber) {
  // write your code here
<<<<<<< HEAD
  if (arguments[0] == undefined){
=======
  if (arguments[0] === undefined){
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalCost = total()
    setCart ([])
<<<<<<< HEAD
    return `Your total cost is $${totalCost}, which will be charged to the card ${ccNumber}.`
=======
    return `Your total cost is $${totalCost}, which will be charged to the $${ccNumber}.`
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
  }
}

function getRandomInt(min, max){
<<<<<<< HEAD
  return Math.floor(Math.random() * (max - min + 1)) + min
=======
  return Math.floor(Math.random() * (max - min +1) + min);
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
}

function createCartItem (itemName){
  return{
    itemName:itemName, 
<<<<<<< HEAD
    itemPrice:getRandomInt(1, 100)
=======
    itemPrice:getRandomInt(1,100)
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
  }
}

function totalCost() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function cartDescription(){
  var cartDescription = 'In your cart, you have '
  if (getCart().length >=1) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2) {
    var cartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++){
      cartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${cartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartDescription}.`
}

function searchItemRemoval(itemName) {
  var itemToRemove 
  for (var i = 0; i < getCart().length; i++){
    if (getCart()[i].itemName === itemName) {itemToRemove = getCart()[i]}
  }
  return itemToRemove
}

function itemNotInCart (){
  return 'That item is not in your cart.'
}

<<<<<<< HEAD
function itemCartRemoval(itemToRemove){
  var itemToRemoveIndex = cart.indexOf(itemToRemove)
  getCart().splice(itemToRemoveIndex-1,1)
=======
function itemRemoval(itemToRemove){
  var itemToRemoveIndex = cart.indexOf(itemToRemove)
  getCart().splice(itemToRemoveIndex,1)
>>>>>>> 92b042263fa76a81e9b84b51e4fa0e9c86816878
}