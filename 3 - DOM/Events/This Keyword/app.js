const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}








// Can be simpified into single function

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = randomColor()
//         button.style.color = randomColor()
//     })
// }

// const h1s = document.querySelectorAll('h1')
// for (let h1 of h1s) {
//     h1.addEventListener('click', function () {
//         h1.style.backgroundColor = randomColor()
//         h1.style.color = randomColor()
//     })
// }