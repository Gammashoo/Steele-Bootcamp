const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.addEventListener('change', function (e) {
    console.log('Change Event')
    alert('Finish what you started')
})


input.addEventListener('input', function (e) {
    console.log('Input Event')
    h1.innerText = input.value
})