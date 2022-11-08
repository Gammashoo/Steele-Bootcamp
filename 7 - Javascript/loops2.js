// let count = 0
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// while (gameOver) {
//     //player 1 move
//     //player 2 move
// }

// const secret = "i love you"

// let guess = prompt("Enter the secret code...")
// while (guess !== secret) {
//     guess = prompt("enter the secret code...")
// }
// console.log("You're right!")

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input)
    if (input === "stop") {
        break;
    }
}
console.log("FINE.")

