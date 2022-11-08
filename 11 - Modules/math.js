const add = (x, y) => x + y

const PI = 3.14159

const square = x => x * x

// module.exports.square = x => x * x
// Can use this method instead of saving to a variable


const math = {
    add: add,
    PI: PI,
    square: square
}

// exports.square = square
// Exports is a variable for module.exports - can be reassigned a value

module.exports = math

// module.exports.add = add
// module.exports.PI = PI
// module.exports.square = square
