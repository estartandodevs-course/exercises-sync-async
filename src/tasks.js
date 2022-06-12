const colors = require("colors");
/*
Para ficar mais parecido com o exemplo do README.md do projeto, 
use a libe *colors* para colorir as mensagens.

As cores usadas no exemplo foram: red, magenta, cyan e green.

Consulte a documentação da lib em https://github.com/Marak/colors.js
*/

// TODO 1: Essa Task deve retornar uma promise e com delay de 10 segundos
 

const task1 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Terminou a Task 1 em 10 segundos".red));
    }, 10000);
  });
}; 

// TODO 2: Essa Task deve retornar uma promise e com delay de 5 segundos
 

const task2 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Terminou a Task 2 em 5 segundos".magenta));
    }, 5000);
  });
}; 

// TODO 3: Essa Task deve retornar uma promise e com delay de 3 segundos
 

const task3 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Terminou a Task 3 em 4 segundos".cyan));
    }, 4000);
  });
}; 

// TODO 4: Essa Task deve retornar uma promise e com delay de 1 segundo
 

const task4 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Terminou a Task 4 em 4 segundos".green));
    }, 4000);
  });
}; 


module.exports = { task1, task2, task3, task4 };