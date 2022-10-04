function ork() {
    console.log('dakka dakka')
    console.log('ya git')
    console.log('you wat')

}

function greet(firstName, lastName) {
    console.log(`Hey there ${firstName} ${lastName[0]}`)
}

greet('Harry', 'Potter')

function repeat(str, numTimes) {
    let result = ' '
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(`${result}` + ' ')
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum
}

function random(x) {
    let randomNum = x * Math.random()
    return randomNum
}

function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    else {
        return array[array.length - 1];
    }
}
let str = 'hello'
console.log(str[0].toUpperCase() + str.slice(1))

// ------------------------------------------------------------------
const numbers = [3, 5, 7]

function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]

    }
    return sum
}

console.log(sumArray(numbers))
// ---------------------------------------------------------------------

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (num < 1 || num > 7) {
        return null
    } else {
        return days[num - 1]
    }
}
