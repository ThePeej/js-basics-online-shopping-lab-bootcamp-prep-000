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
console.log(cart)
console.log(cart[i])
console.log(Object.keys(cart[i])[i])
console.log(cart[i][Object.keys(cart[i])])
}
