// async function hello() {

// }

// const sing = async () => {
//     throw 'OH NO, PROBLEM!'
//     return 'LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log('PROMISE RESOLVED WITH:', data)
//     })
//     .catch(err => {
//         console.log('OH NO, PROMISE REJECTED')
//         console.log(err)
//     })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('akjsdhsa', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged In')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })