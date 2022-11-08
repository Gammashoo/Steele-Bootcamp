let pills = ['vitamin d', 'centra', 'finestride']

pills[2] = 'vitamin c'

pills.push('fish oil')

console.log(pills[2])
console.log(pills)
console.log(pills.join())

pills.pop()

console.log(pills.pop())

pills.shift()
console.log(pills)

pills.unshift('happy pills')
console.log(pills)

let nextPill = pills.shift()
console.log(nextPill)

pills.push('lexapro')

function removePill(pills) {
    return pills.pop()
}

console.log(removePill)


let cats = ['Aly', 'Gojo']
let dogs = ['Penelope', 'Juniper']

let raining = dogs.concat(cats)
console.log(raining)

// Push- adds
// Pop - removes from end
// Shift - remove from start
// Unshift - add to start

// Concat - merge arrays
// Includes - look for a value
// indexOf - just like string.indexOf
// join - creates a string from an array
// Reverse - reverses an array
// Slice - copies a portion on an array
// ex - pills.slice(2)
// ex- pills.slice(1,4)
// Splice - removes/replaces elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Sort - Sorts an array

const gameBoard = [['X', 'O', 'X'], ['O', 'null', 'X'], ['O', 'O', 'X']]
console.log(gameBoard)

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3].splice(1, 1, "Hugo")

// or

airplaneSeats[3][1] = 'Hugo';