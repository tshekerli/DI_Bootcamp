const fileManager = require('./fileManager.js');

fileManager.writeFile('helloWorld.txt', 'this is hello world!')

fileManager.readFile('helloWorld.txt')