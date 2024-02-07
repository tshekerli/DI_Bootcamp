const fs = require('fs');
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) throw err;
fs.writeFile('destionation.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });});

