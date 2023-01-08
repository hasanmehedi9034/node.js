const fs = require('fs');

// let text = fs.readFileSync('./files/input.txt', 'utf-8');

// text = `Copied Text: ${text}`;

// fs.writeFileSync('./files/output.txt', text);

fs.readFile('./files/input.txt', 'utf-8', (error, text) => {
    if (error) {
        console.log(error);
    }
    else {
        fs.writeFile('./files/output.txt', `${text} Mehedi`, 'utf-8', (error) => {
            if (error) {
                console.log(error);
            }
            
        });
    }
});

