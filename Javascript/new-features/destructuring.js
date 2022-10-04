// DESTRUCTURING ARRAYS
const scores = [92349, 872347, 2348875, 23432, 234556, 2342345,]

const highScore = scores[0]
const secondHighScore = scores[1]

const [gold, silver, bronze, ...everyoneElse] = scores

// DESTRUCTURING OBJECTS

const user = {
    email: 'harvey@gmail.com',
    password: 'scott1984smith',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const firstName1 = user.firstName
const lastName1 = user.lastName


// const { email, firstName, lastName, city, bio } = user

const { born: birthYear, died: deathYear } = user


const { city, state, died = 'N/A' } = user2



// DESTRUCTURING PARAMS

function fullName1(user) {
    return `${user.firstName} ${user.lastName}`
}

function fullName2(user) {
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
}

function fullName3({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

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

movies.filter((movie) => movie.score >= 90)
movies.filter(({ score }) => score >= 90)

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
