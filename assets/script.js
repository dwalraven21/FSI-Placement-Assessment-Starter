// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Danielle Walraven" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the elements
const credit = document.querySelector('#credit')
// Gingerbread
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const gbQty = document.querySelector('#qty-gb')
// Choc Chip
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const ccQty = document.querySelector('#qty-cc')
// Sugar Cookie
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarQty = document.querySelector('#qty-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    let newInt = parseInt(gbQty.innerHTML) + 1
    gbQty.innerHTML = newInt
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {

    console.log('Gingerbread - button was clicked!')

})

// Event listener for clicks on the "+" button for Choc Chip cookies
ccPlusBtn.addEventListener('click', function() {
    let newInt = parseInt(ccQty.innerHTML) + 1
    ccQty.innerHTML = newInt
})

// Event listener for clicks on the "-" button for Choc Chip cookies
ccMinusBtn.addEventListener('click', function() {

    console.log('Choc Chip - button was clicked!')

})

// Event listener for clicks on the "+" button for sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    let newInt = parseInt(sugarQty.innerHTML) + 1
    sugarQty.innerHTML = newInt
})

// Event listener for clicks on the "-" button for sugar cookies
sugarMinusBtn.addEventListener('click', function() {

    console.log('sugar - button was clicked!')

})


    