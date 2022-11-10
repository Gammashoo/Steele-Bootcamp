const { publicDecrypt } = require('crypto')
const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./views/data.json')

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
// Joining current directory where index.js located and joining the path
// with /views
// tells it to use current directory when running express


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats, name: 'cats' })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('notfound', { subreddit })
    }

})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: num, name: 'random' })
    console.log(`Someone is accessing the random page and got the number ${num}`)
})
// {rand : num} creating varible rand and giving it the value of num 
// num can now be accessed using rand in pages

app.listen(3000, () => {
    console.log('Listening on port 3000')
})