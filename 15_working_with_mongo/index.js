const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/my-students')
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch(err => console.log('Connection failed'))



