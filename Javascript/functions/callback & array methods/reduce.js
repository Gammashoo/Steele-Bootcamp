
// .reduce - accumulator takes first element in array and currentValue takes second element in array.
// Funciton returns sum of accumulator and currentValue. accumulator now takes the property from the
// sum and currentValue is assigned the next element in the array.
//  etc - 3, 5, 7 - 3 + 5 = 8, 8 + 7 = 15
// shorthand - evens.reduce((sum, num) => sum + num
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

let total = 0;
for (let price of prices) {
    total += price
}
console.log(total)

let total2 = prices.reduce((total, price) => {
    return total + price
})

console.log(total2)

let total3 = prices.reduce((total, price) => total + price)


//Finds smallest number in array 
prices.reduce((min, price) => {
    if (price < min) {
        return price
    }
    return min
})



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 99,
        year: 1979
    },
    {
        title: 'Thor Ragnarok',
        score: 93,
        year: 2017
    },
    {
        title: 'Kingsmen',
        score: 75,
        year: 2014
    },
    {
        title: 'Harry Potter Goblet of Fire',
        score: 88,
        year: 2005
    },
    {
        title: 'Fellowship of the Ring',
        score: 91,
        year: 2001
    },
]

const highestRated = movies.reduce((best, current) => {
    if (current.score > best.score) {
        return current
    }
    return best
})


//Adds additional element - additional element takes priority
const evens = [2, 4, 6, 8]
evens.reduce((sum, num) => sum + num, 100)