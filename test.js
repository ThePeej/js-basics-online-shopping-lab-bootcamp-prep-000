item = "apple"
console.log(item)
var cart = { [item]: Math.floor(Math.random()*(100)+1) }
console.log(cart)
console.log(`${item} has been added to your cart.`)

basket = []
function addtobasket(item) {
  basket.push(item)
  console.log(basket)
  console.log(basket.length)
}

addtobasket("pear")
addtobasket("orange")

var cart = []

/*
function addToCart(item) {
  cart[item] = Math.floor(Math.random()*(100)+1)
  console.log(`${item} has been added to your cart.`)
  console.log(cart)
  console.log(Object.keys(cart).length)
}
*/

function addToCart(item) {
  var addeditems = {[item]: Math.floor(Math.random()*(100)+1) }
  cart.push(addeditems)
  console.log(addeditems)
  console.log(`${item} has been added to your cart.`)
  console.log(cart)
  console.log(Object.keys(cart).length)
}

addToCart("Ice Cream")
addToCart("Cereal")
addToCart("Steak")

///viewCart testing
console.log('~~~ viewCart testing ~~~')
var n = cart.length
console.log(n)

for ( let i = 0; i < cart.length; i++) {
console.log(cart) ///cart is an array of objects (key-value pairs)
console.log(cart[i]) ///displays the element at index [i] which is a key-value pair OBJECT
console.log(Object.keys(cart[i])) ///displays the 1 element array of the key of object at index [i] (remember cart[i] is an OBJECT)
console.log(Object.keys(cart[i])[0]) ///Then gets value of said array at index [0] (basically converts object to value)
console.log(cart[i][Object.keys(cart[i])[0]]) ///Gets the corresponding value of key-value pair (in the form of obj[key] = value
console.log()
var food = Object.keys(cart[i])[0]
var cost = cart[i][Object.keys(cart[i])[0]]
console.log(`In your cart, you have ${food} at $${cost}.`)
}
console.log()


///total cost testing
console.log('~~~ total cost testing ~~~')
var totalcost = 0
console.log(totalcost)

for ( let i = 0; i < cart.length; i++) {
  ///totalcost = totalcost + 1
  totalcost = totalcost + cart[i][Object.keys(cart[i])[0]]
  console.log(totalcost)
}
console.log()


///placeorder testing
console.log('~~~ total cost testing ~~~')

function placeOrder(cardNumber) {

  console.log(cardNumber)
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    return cart = []
  }
}

placeOrder(123456789)
