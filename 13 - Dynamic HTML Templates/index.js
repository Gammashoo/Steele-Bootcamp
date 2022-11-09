const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
// Joining current directory where index.js located and joining the path
// with /views
// tells it to use current directory when running express


app.get('/', (req, res) => {
    res.render('home')
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})