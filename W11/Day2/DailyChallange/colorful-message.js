const chalk = require('chalk');

function colorfulMessage(message) {
    console.log(chalk.blue(message));
}


module.exports = colorfulMessage;