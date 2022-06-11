const colors = require("colors");
/*
Para ficar mais parecido com o exemplo do README.md do projeto, 
use a libe *colors* para colorir as mensagens.

As cores usadas no exemplo foram: red, magenta, cyan e green.

Consulte a documentação da lib em https://github.com/Marak/colors.js
*/
const style = colors.setTheme({
  tk1: "red",
  tk2: "magenta",
  tk3: "cyan",
  tk4: "green"
}) 
//opção pra deixar o código mais limpo
//pra funcionar tem que retornar a função em cada task ao invés de promises.
/*const baseTask = (message, time, color)=>{
  time = time*1000;
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(message.color);
    }, time);
  });
}*/ 

// TODO 1: Essa Task deve retornar uma promise e com delay de 10 segundos
const task1 = () => {
  // Deve retornar a mensagem: Terminou a Task 1 em 10 segundos
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Terminou a Task 1 em 10 segundos'.tk1);
    }, 10000);
  });
};

// TODO 2: Essa Task deve retornar uma promise e com delay de 5 segundos
const task2 = () => {
  // Deve retornar a mensagem: Terminou a Task 2 em 5 segundos
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Terminou a Task 2 em 5 segundos'.tk2);
    }, 5000);
  });
};

// TODO 3: Essa Task deve retornar uma promise e com delay de 4 segundos
const task3 = () => {
  // Deve retornar a mensagem: Terminou a Task 3 em 4 segundos
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Terminou a Task 3 em 4 segundos'.tk3);
    }, 4000);
  });
};

// TODO 4: Essa Task deve retornar uma promise e com delay de 4 segundos
const task4 = () => {
  // Deve retornar a mensagem: Terminou a Task 4 em 4 segundos
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Terminou a Task 4 em 4 segundos'.tk4);
    }, 4000);
  });
};

module.exports = { task1, task2, task3, task4 };
