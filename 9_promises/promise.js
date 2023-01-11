const p = new Promise((resolve, reject) => {
    // async operation -> result
    resolve("The promise is successful");
    // reject("The promise is failure");

})

p
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

console.log("After");



