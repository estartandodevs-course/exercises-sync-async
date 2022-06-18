const colors = require("colors");

const oneSecond = 1000;

function timeSet(interval, taskNumber, color) {
  let counter = new Promise (async (resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(`Terminou a Task ${taskNumber} em ${interval} segundos`);
      }, interval * oneSecond);
    } catch (err) {
      reject (err);
    }
  })
  return counter;
}

/*
Para ficar mais parecido com o exemplo do README.md do projeto, 
use a libe *colors* para colorir as mensagens.

As cores usadas no exemplo foram: red, magenta, cyan e green.

Consulte a documentação da lib em https://github.com/Marak/colors.js
*/

// TODO 1: Essa Task deve retornar uma promise e com delay de 10 segundos
const task1 = async () => {
  // Deve retornar a mensagem: Terminou a Task 1 em 10 segundos
  let totalTime = await timeSet(10, 1);

  return totalTime.red;
};

// TODO 2: Essa Task deve retornar uma promise e com delay de 5 segundos
const task2 = async () => {
  // Deve retornar a mensagem: Terminou a Task 2 em 5 segundos
  let totalTime = await timeSet(5, 2);

  return totalTime.yellow;
};

// TODO 3: Essa Task deve retornar uma promise e com delay de 4 segundos
const task3 = async () => {
  // Deve retornar a mensagem: Terminou a Task 3 em 4 segundos
  let totalTime = await timeSet(4, 3);
  
  return totalTime.cyan;
};

// TODO 4: Essa Task deve retornar uma promise e com delay de 4 segundos
const task4 = async () => {
  // Deve retornar a mensagem: Terminou a Task 4 em 4 segundos
  let totalTime = await timeSet(4, 4);
  
  return totalTime.green;
};

module.exports = { task1, task2, task3, task4 };
