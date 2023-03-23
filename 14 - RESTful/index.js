const { text } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const { toUnicode } = require('punycode')
const { v4: uuid } = require('uuid')
uuid()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [
    {
        id: uuid(),
        username: 'Gojo',
        comment: 'meow'
    },
    {
        id: uuid(),
        username: 'Sean',
        comment: 'deez nuts'
    },
    {
        id: uuid(),
        username: 'Jennifer',
        comment: 'sul sul'
    },
    {
        id: uuid(),
        username: 'Juniper',
        comment: 'borf'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    res.redirect('/comments')
})



app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos.`)
})

app.listen(3000, () => {
    console.log('On port 3000!')
})


// GET / comments - list all comments
// POST / comments - Create a new comment
// GET / comments /: id - Get one comment(using ID)
// PATCH / comments /: id - Destroy one comment
// DELETE / comments /: id - Desroy one comment

//  (req, res) REQ = Request, RES = Response
