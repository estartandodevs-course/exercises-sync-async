const colors = require("colors/safe");


const task1 = () => {
  return console.log(colors.yellow('Terminou a'), colors.brightRed.bold('Task'), colors.yellow.bold('1'), colors.yellow('em 10 segundos'))
};

const task2 = () => {
  return console.log(colors.blue('Terminou a'), colors.brightRed.bold('Task'), colors.blue.bold('2'), colors.blue('em 5 segundos'))
};

const task3 = () => {
  return console.log(colors.magenta('Terminou a'), colors.brightRed.bold('Task'), colors.magenta.bold('3'), colors.magenta('em 4 segundos'))
};

const task4 = () => {
  return console.log(colors.green('Terminou a'), colors.brightRed.bold('Task'), colors.green.bold('4'), colors.green('em 4 segundos'))
};

module.exports = { task1, task2, task3, task4 };
