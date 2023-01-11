const express = require('express');
const fs = require('fs');
const db = require('./db');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students)
        })
})

app.get('/api/students', (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students)
        })
})

app.post('/api/students', (req, res) => {
    const student = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(student)
            db.insertDbStudent(students)
                .then(data => {
                    res.send(student)
                })
        })
})

app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if (!student) res.status(404).send('No student found');
        else res.send(student)
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

