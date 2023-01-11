function getStudent(id, callback) {
    setTimeout(() => {
        console.log("Fetching student from database...");
        callback({ id: id, name: "Mehedi"});
    })
}

function getCourses(student, callback) {
    setTimeout(() => {
        console.log("Courses fetching from database...");
        callback({ id: student.id, name: student.name, courses: ['js', 'python']})
    })
}

function getMarks(courses, callback) {
    setTimeout(() => {
        console.log("Course Marks fetching from database...");
        callback({
            [courses[0]]: 10,
            [courses[1]]: 20
        })
    })
}


getStudent(1, (student) => {
    console.log(student);

    getCourses(student, (student) => {
        console.log(student.courses)

        getMarks(student.courses, (marks) => {
            console.log(marks)
        })
    })
})




