// promises

getStudent(3)
    .then(student => {
        console.log(student);
        return getCourses(student);
    })
    .then(student => {
        console.log(student);
        return getQuizmarks(student.courses)
    })
    .then(marks => {
        console.log(marks);
    })


function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching from database...');
            resolve({ id: id, name: 'Rahim' });
        })
    })
}

function getCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student courses from database");
            resolve({
                id: student.id, 
                name: student.name,
                courses: ['js', 'python']
            });
        }) 
    })
}

function getQuizmarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Student quizes');
            resolve({ 
                [courses[0]]: 5,
                [courses[1]]: 10,
            })
        })        
    })
}
