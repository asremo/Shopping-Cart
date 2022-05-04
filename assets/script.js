//// to update quantity function
function updateQuantity(showQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = showQuantity
}

//// start quantity amount = 1 (product already in the cart)
let quantity = 1

//// Buttons
const quantityUp = document.querySelector('#quantity-up')
const quantityDown = document.querySelector('#quantity-down')
const itemRemove = document.querySelector('.remove')

//// + button adds to product quantity -> addEventListener
quantityUp.addEventListener('click', function() {
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

//// - button subtracts from product quantity -> addEventListener
quantityDown.addEventListener('click', function(e) {
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

//BONUS

////to remove item entirely 
itemRemove.addEventListener('click', function() {
    quantity = 0
    updateQuantity(`Quantity: ${quantity}`)
})