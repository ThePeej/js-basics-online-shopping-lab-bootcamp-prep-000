var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var addeditems = {[item]: Math.floor(Math.random()*(100)+1) }
  cart.push(addeditems)
  console.log(`${item} has been added to your cart.`)
  console.log(cart.length)
  return cart
}

function viewCart() {
  var n = cart.length
  if (n === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for( i = 0, i < cart.length, i++) {

    }
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
