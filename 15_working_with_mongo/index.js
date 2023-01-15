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

