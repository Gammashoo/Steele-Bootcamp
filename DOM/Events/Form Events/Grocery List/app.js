const form = document.querySelector('form');
const list = document.querySelector('#list');
const product = document.querySelector('#product')
const quantity = document.querySelector('#qty')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const newLI = document.createElement('LI')
    newLI.innerText = `${product.value} - ${quantity.value} `
    list.appendChild(newLI)
    product.value = ''
    quantity.value = ''

})