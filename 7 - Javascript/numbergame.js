let maximum = parseInt(prompt("Enter the maximum number!"))
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1


let guess = parseInt(prompt("Enter your first guess!"))
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break
    attempts++
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess:")
    } else {
        guess = prompt("Too Low! Enter a new guess:")
    }
}
if (guess === "quit") {
    console.log("Ok, you gave up!")
} else {
    console.log(`You got it! It took you ${attempts} tries!`)
}
