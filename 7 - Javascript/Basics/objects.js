const person = { firstName: 'Eren', lastName: 'Jager' }

const kitchenSink = {
    favNum: 23456,
    isFunny: true,
    colors: ['red', 'orange']
}
console.log(person["firstName"])
console.log(person.lastName)
console.log(kitchenSink)

const years = { 1999: 'GOOD', 2020: 'BAD' }

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`
console.log(fullAddress)

const midterms = { danielle: 96, thomas: 78 }
midterms.thomas = 79
console.log(midterms.thomas)
midterms.jennifer = 23
midterms.mike = 45
console.log(midterms)

const comments = [
    { username: 'deeznuts', text: 'got em', votes: 69 },
    { username: 'batboy', text: 'im starting a band', votes: 1000 },
]

console.log(comments[1].text)