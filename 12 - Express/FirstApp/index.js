const express = require("express")
const app = express()

// app.use((req, res) => {
//     console.log('We got a new request!')
//     // res.send('Hello we got your request, this is a response.')
//     res.send('<h1>This is my webpage.</h1>')
// })

app.get('/cats', (req, res) => {
    console.log('CAT REQUEST!')
    res.send('Meow')
})

app.get('/', (req, res) => {
    res.send('Welcome to the home page!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId/:new', (req, res) => {
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing New Posts on the ${subreddit} subreddit</h1>`)
})

app.get('/lol/:joke', (req, res) => {
    const { joke } = req.params
    res.send(`<h1>Did you know ${joke} is a fuckin nerd</h1>`)
})

app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST!')
    res.send('Woof')
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!')
})

app.get('/mike', (req, res) => {
    res.send('Mike is a no brained mp4 user')
})

app.post('/mike', (req, res) => {
    res.send('Git gud nerd')
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send('Nothing Found if Nothing Searched')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send('I dont know that path!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})