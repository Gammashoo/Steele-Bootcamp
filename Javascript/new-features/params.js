function rollDie(numSides) {
    if (numSides === undefinded) {
        numSides = 6
    }
}

return Math.floor(Math.random() * numSides) + 1

function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg = "", person) {
    console.log(`${msg}, ${person}!`)
}


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