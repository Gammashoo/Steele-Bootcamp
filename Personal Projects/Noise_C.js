const OnButton = document.querySelector('#OnButton')
const OffButton = document.querySelector('#OffButton')
const h2 = document.querySelector('h2')
const body = document.querySelector('body')



OnButton.addEventListener('click', function (e) {

    h2.innerText = 'ON'
    h2.style.color = 'White'
    body.style.backgroundColor = '#D52941'
})

OffButton.addEventListener('click', function (e) {

    h2.innerText = 'OFF'
    h2.style.color = 'White'
    body.style.backgroundColor = '#629677'
})