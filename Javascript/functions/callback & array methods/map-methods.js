const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const doubles = numbers.map(function (num) {
    return num * 2
})
console.log(doubles)



function print(element) {
    console.log(element + ' Method 1')
}
numbers.forEach(print)

numbers.forEach(function (num) {
    console.log(num + ' Method 2')
})

for (let num of numbers) {
    console.log(num + ' Method 3')
}

numbers.forEach(function (num) {
    if (num % 2 === 0) {
        console.log(num)
    }
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 99
    },
]

'Alien - 90/100'

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase()
})
console.log(titles)

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score} / 10`
})

const newMovies2 = movies.map(movie => (
    `${movie.title} - ${movie.score} / 10`
))