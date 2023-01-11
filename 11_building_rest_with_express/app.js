// Express

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("Hello world");
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listening on port 300...')

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send("Hello from express js!");
})

app.get('/another', (request, response) => {
    response.send("I am another response")
})

app.get('/student', (request, response) => {
    response.send(JSON.stringify(['Mehedi', 'Hasan']))
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

