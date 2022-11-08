const subreddits = ['cring', 'books', 'chickens', 'funny', 'pics', 'soccer',]

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let sub of subreddits) {
    console.log(sub)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]


// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

for (let char of "hello world") {
    console.log(char)
}

const testScores = {
    sean: 2,
    bryan: 4,
    jennifer: 17,
    omar: 12
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

for (let score of Object.values(testScores)) {
    console.log(score)
}

let total = 0;
let scores = Object.values(testScores)
for (let score of scores) {
    total += score
}

console.log(total / scores.length, "Hi")