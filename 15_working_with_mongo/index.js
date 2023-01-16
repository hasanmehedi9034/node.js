const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/my-students')
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch(err => console.log('Connection failed'))



// Schema -> defines the shape documents
const studentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: String,
    dob: Date,
    entryDate: {type: Date, default: Date.now},
    passed: Boolean,
    hobbies: [String],
    parents: {
        father: String,
        mother: String
    },
    subjects: [{name: String, marks: {type: Number, min: 0, max: 100}}]
}); 

// Model
const Student = mongoose.model('Student', studentSchema); // class

// creat data
async function createStudent() {
    const student = new Student({
        firstName: 'Fahad',
        lastName: 'Rahat',
        dob: new Date("27 April 1995"),
        passed: true,
        hobbies: ["Swiming", "Singing"],
        parents: {
            father: "A",
            mother: "B",
        },
        subjects: [{ name: 'Math', marks: 80 } , { name: 'English', marks: 90 }]
    });

    try {
        const data = await student.save();
        console.log(data);
    }
    catch (err) {
        console.error(err._message);
    }
}
// createStudent();


// Read
async function readStudents() {
    // const studentData = await Student.find({ firstName: 'Karim' });

    // const studentData = await Student
    //     .find({ firstName: "Karim" })
    //     .limit(3)
    //     .sort({ firstName: 1 })
    //     .select({ firstName: 1, lastName: 1, hobbies: 1 })

    const studentData = await Student
        .find()
        .select({ firstName: 1, lastName: 1, passed: 1 })
        // .countDocuments()

    // const studentData = await Student.find();

    console.log(studentData);
}
readStudents();

async function updateStudent(id) {
    const student = await Student.updateOne({ __id: id }, {
        $set: { passed: false }
    })

    console.log(student);
}
//updateStudent('63c5050b8aea503ad121b22d')

async function deleteStudent(id) {
    const student = await Student.deleteOne({ _id: id })
    console.log(student);
}
// deleteStudent('63c503c4a5c9b7521a7b2542')

