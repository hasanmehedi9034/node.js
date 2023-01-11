// promises

// getStudent(3)
//     .then(student => getCourses(student))
//     .then(student => getQuizmarks(student.courses))
//     .then(marks => console.log(marks))
//     .catch(error => console.log(error))

// async await

async function studentData() {
    try {
        const student = await getStudent(4);
        const courses = await getCourses(student);
        const marks = await getQuizmarks(student.courses);
        console.log(marks)
    }
    catch(error) {
        console.log(error)
    }
}
studentData()



function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching from database...');
            const student = {id: id, name: 'Mehedi'}
            resolve(student);
        })
    })
}

function getCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student courses from database");
            student.courses = ['js', 'python'];
            resolve(student);
        }) 
    })
}

function getQuizmarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Student quizes');
            const marks = { 
                [courses[0]]: 5,
                [courses[1]]: 10,
            }
            resolve(marks)
        })        
    })
}
