const button = document.querySelector('#v2')

button.onlclick = function () {
    console.log('You clicked me!')
    console.log('Yahoo')
    alert('HELP')
}

function scream() {
    console.log('Ahh')
    console.log(Math.floor(Math.random() * 10) + 1)
}

button.onmouseenter = scream

document.querySelector('h1').onclick = function () {
    alert('you clicked the h1')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
    alert('Clicked')
})

function twist() {
    console.log('TWIST')
}

function shout() {
    console.log('SHOUT')
}

const tasButton = document.querySelector('#tas')


// Not recommended
// tasButton.onclick = twist
// tasButton.onclick = shout

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)








const sample1 = document.querySelector('#hello')

const sample2 = document.querySelector('#goodbye')

function hello() {
    console.log('hello')
}

function goodbye() {
    console.log('goodbye')
}
sample1.addEventListener('click', hello)
sample2.addEventListener('click', goodbye)