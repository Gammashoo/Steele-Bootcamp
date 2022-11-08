//  ... is the spread syntax that allows methods to access arrays by seperating them into
// individual arguments.
// SPREAD ARRAY LITERALS
const nums = [13, 4, 5, 21, 3, 1, 2, 7, 6, 4, 2, 540]

Math.max(nums)
// Returns NaN

Math.max(...nums)
// Returns correctly the biggest number

console.log(nums)
console.log(...nums)

let greet = 'hello'

console.log(greet)
console.log(...greet)
console.log([...greet])


// SPREAD IN OBJECT LITERALS
const cats = ['Nova', 'Boots', 'Aly', 'Gojo']
const dogs = ['Anubis', 'Apollo', 'Juniper', 'Penelope']

const allPets = [...cats, ...dogs]
console.log(allPets)

const feline = { legs: 4, family: 'Felidae' }
const canine = { isFurry: true, family: 'Canine' }

const catDog = { ...feline, ...canine }
// Two matching propertings under 'family'. Canine will win due to it coming last in order.

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// REST PARAMETERS - as in 'the rest...'

function sum() {
    return arguments.reduce((total, el) => total + el)
}

function sum2(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO; ${gold}`)
    console.log(`SILVER MEDAL GOES TO; ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE; ${everyoneElse}`)
}