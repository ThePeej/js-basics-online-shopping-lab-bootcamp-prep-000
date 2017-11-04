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
  } else if (n === 1) {
    var food = Object.keys(cart[1])[0]
    var cost = cart[i][Object.keys(cart[1])[0]]
    console.log(`In your cart, you have ${food} at $${cost}.`)
  } else {
    for ( let i = 0; i < cart.length; i++) {
      var food = Object.keys(cart[i])[0]
      var cost = cart[i][Object.keys(cart[i])[0]]
    }
  }
}


function total() {
  var totalcost = 0
  for ( let i = 0; i < cart.length; i++ ) {
    totalcost = totalcost + cart[i][Object.keys(cart[i])[0]]
  }
  return totalcost
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var totalcost = 0
    for ( let i = 0; i < cart.length; i++ ) {
      totalcost = totalcost + cart[i][Object.keys(cart[i])[0]]
    }
    console.log(`Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`)
    return cart = []
  }
}
