const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.filter(n => {
    return n === 4

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
]

const greatMovies = movies.filter(m => m.score > 90)
const goodMovies = movies.filter(m => m.score < 89)
const greatTitles = greatMovies.map(m => m.title)
const recentMovies = movies.filter(m => m.year > 1990)
const oldMovies = movies.filter(m => m.year < 1991)