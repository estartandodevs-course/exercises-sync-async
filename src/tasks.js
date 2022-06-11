const colors = require("colors");

const baseTask = (mensagem, tempo) => {
  return new Promise((resolve) =>
  setTimeout(() => {
  resolve(mensagem)
}, tempo * 1000));
}

const task1 = () => baseTask('Finished first task in ten seconds'.red, 10)
const task2 = () => baseTask('Finished second task in five seconds'.magenta, 5)
const task3 = () => baseTask('Finished third task in four seconds'.cyan, 4)
const task4 = () => baseTask('Finished fourth task in four seconds'.green, 4)

module.exports = { task1, task2, task3, task4 };
