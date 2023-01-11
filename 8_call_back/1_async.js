// callback function

console.log('Line 1');

getStudent(2, (student) => { 
    console.log(student);
});


console.log('Line 2');

function getStudent(id, cb) {
    setTimeout(() => {
        console.log('fetching from database...');
        cb({ id: id, name: 'Rahim' });
    }, 2000)
}

