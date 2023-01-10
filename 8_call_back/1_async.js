console.log('Line 1');

const students = getStudent(1);
console.log(students);

console.log('Line 2');

function getStudent(id) {
    setTimeout(() => {
        console.log('fetching from database');
        return {id: id, name: 'Rahim'};
    }, 2000)
}

