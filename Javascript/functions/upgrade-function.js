// function collectEggs() {
//     let totalEggs = 6
// }

// let bird = 'Raven'
// function birdWatch() {
//     let bird = 'Great Blue Heron'
// }

// console.log(bird)


// function callTwice(func) {
//     func()
//     func()
// }

// function rollDice() {
//     const roll = Math.floor(Math.random() * 20) + 1
//     if (roll === 20) {
//         console.log(`${roll} - NATURAL CRIT!!!`)
//     } else if (roll === 1) {
//         console.log(`${roll} - NATURAL MISS!!!`)
//     } else {
//         console.log(roll)
//     }
// }


// callTwice(rollDice)


function makeMysteryFunc() {
    const rand = Math.random()
    if (rand > 0.5) {
        return function () {
            console.log('Congrats!')
        }
    } else {
        return function () {
            alert('YOU HAVE BEEN INFECTED')
        }
    }
}

// const mystery = makeMysteryFunc()
// console.log(mystery)

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

const isChild = makeBetweenFunc(0, 18)
const isAdult = makeBetweenFunc(19, 64)

// makeBetweenFunc(5, 10) =>

// function isBetween(n){
//     return n >=50 && n <= 100
// }

const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num
    },
    cube: function (num) {
        return num ** 3
    }
}
