
console.log('Hello - time to roll dice!')

setTimeout(() => {
    console.log('...are we having fun?')
}, 10000)



const id = setInterval(() => {
    console.log(Math.floor(Math.random() * 20) + 1)

}, 1000)

