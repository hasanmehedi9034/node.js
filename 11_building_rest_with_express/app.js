// Express

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("Hello world");
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listening on port 300...')

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json())

app.get('/', (request, response) => {
    response.send("Hello from express js!");
})

app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        const students = JSON.parse(data).students;
        res.send(students);
    })
})

app.post('/api/students', (req, res) => {
    const student = req.body;
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        const students = JSON.parse(data)
        students.students.push(student);
       fs.writeFile('./db.json', JSON.stringify(students), (err) => {
            res.send(students);
       })
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

