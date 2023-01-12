const express = require('express');
const fs = require('fs');
const db = require('./db');

const app = express();
app.use(express.json())



const studentList = (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students)
        })
}

const newStudent = (req, res) => {
    const student = req.body;
    console.log(student)
    db.getDbStudents()
        .then(students => {
            students.push(student)
            db.insertDbStudent(students)
                .then(msg => {
                    res.send(msg)
                })
        })
}

const studentDetail = (req, res) => {
    const id = parseInt(req.params.id);
    
    db.getDbStudents()
    .then(students => {
        const student = students.find(s => s.id === id);
        if (!student) res.status(404).send('No student found');
        else res.send(student)
    })
}

const studentUpdate = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    console.log(updatedData)

    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            console.log(student);
            if (!student) res.status(404).send('No student found');
            else {
                const i = students.findIndex(s => s.id === id);
                students[i] = updatedData;
                db.insertDbStudent(students)
                    .then(msg => res.send(updatedData))
            }
        })
}

const studentDelete =  (req, res) => {
    const id = req.params.id;

    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            
            if (!student) res.status(404).send("Student Not founded")
            
            const updated_students = students.filter(s => s.id != id);

            db.insertDbStudent(updated_students)
                .then(msg => {
                    res.send("hello")
                })
        })
}

const showStudents = (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students)
        })
}

app.get('/', showStudents)

app.route('/api/students')
    .get(studentList)
    .post(newStudent)


app.route('/api/students/:id')
    .get(studentDetail)
    .put(studentUpdate)
    .delete(studentDelete)


const port = 3000;


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

