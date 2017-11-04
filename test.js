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
var item = "watermelon"
console.log(Object.assign({}, cart, {[item]: Math.floor(Math.random()*(100)+1)}))
