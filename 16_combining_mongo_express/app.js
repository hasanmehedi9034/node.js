const express = require('express');
const studentRouter = require('./routers/studentRouter')
const morgan = require('morgan')

const app = express();

app.use(express.json()) // POST-> json object -> req.body
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static('public'));

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('I am middleware 1!');
    next()
})

app.use((req, res, next) => {
    console.log('I am middleware 2!')
    next();
})

app.use('/api/students', studentRouter)

app.get('/about', () => {

})

app.route('/')
    .get((req, res) => {
        console.log('I am get request Middleware')
        res.send('Hello')
    })

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

/*

1. Mongoose -> Model -> Collection
2. Import Model
3. Connect Database


*/

