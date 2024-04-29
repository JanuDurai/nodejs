const chalk = require('chalk');

console.log(chalk.magenta('hi!'));

console.log(chalk.bgMagenta('hi!'));

console.log(chalk.inverse('hi!'));

console.log(chalk.strikethrough('hi!'));

console.log(chalk.dim('hi!'));
console.log(chalk.bold('hi!'));

console.log(chalk.bold.bgYellow.magenta('Janu'));

console.log(chalk.magenta.bgGreen.italic.underline('%s'),"Shree");
