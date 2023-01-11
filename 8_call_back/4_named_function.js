// callback function

console.log('Line 1');

getStudent(2, (student) => { 
    console.log(student);
    getCourses(student, (courses) => {
        console.log(courses);
        getQuizmarks(courses.courses, showMarks)
    })  
});


console.log('Line 2');

function showMarks(marks) {
    console.log(marks);
}
function showCourses(courses) {
    console.log(courses);
    getQuizmarks(courses.courses, showMarks)
}

function getStudent(id, cb) {
    setTimeout(() => {
        console.log('fetching from database...');
        cb({ id: id, name: 'Rahim' });
    }, 2000)
}

function getCourses(student, cb) {
    setTimeout(() => {
        console.log("Student courses from database");
        cb({
            id: student.id, 
            name: student.name,
            courses: ['js', 'python']
        });
    }, 1500)
}

function getQuizmarks(courses, cb) {
    setTimeout(() => {
        console.log('Student quizes');
        cb({ 
            [courses[0]]: 5,
            [courses[1]]: 10,
        })
    }, 1000)
}

