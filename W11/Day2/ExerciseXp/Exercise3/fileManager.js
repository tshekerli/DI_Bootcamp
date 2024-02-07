const fs = require('fs');

const readFile = (name,data) => {
    return new Promise((resolve, reject
    ) => {
        fs.readFile(name, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(console.log(data));
        });
    });
}
const writeFile = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(name, data, (err) => {
        if (err) {
            reject(err);
        }
        resolve('The file has been saved!');
        });
    });
    }

module.exports = { readFile, writeFile };