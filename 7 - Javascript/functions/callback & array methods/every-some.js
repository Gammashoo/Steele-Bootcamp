const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]


// Returns true only if every element is true
exams.every(score => score >= 75)


// Returns true as long element is true
exams.some(score => score >= 75)

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
// True
movies.some(movie => movie.year > 2015)
// False
movies.every(movie => movie.year > 2015)