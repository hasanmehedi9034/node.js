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
const student = new Student({
    firstName: 'Karim',
    lastName: 'Khan',
    dob: new Date("27 April 1995"),
    passed: true,
    hobbies: ["Swiming", "Singing"],
    parents: {
        father: "A",
        mother: "B",
    },
    subjects: [{ name: 'Math', marks: 80 } , { name: 'English', marks: 90 }]
});

student.save()
    .then(data => console.log(data))
    .catch(err => console.error(err))


