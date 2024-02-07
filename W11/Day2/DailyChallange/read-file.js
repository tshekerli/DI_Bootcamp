const fs = require('fs');

function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log('File contents:', data);
        }
    });
}



module.exports = readFile;