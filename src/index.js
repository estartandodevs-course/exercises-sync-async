const { task1, task2, task3, task4 } = require("./tasks");
const process = require('node:process')

const synchronousExecution = async() => {
  // TODO 1: Implemente aqui o código para executar as tarefas de forma SÍNCRONA
  console.log(await task1());
  console.log(await task2());
  console.log(await task3());
  console.log(await task4());
};

const asynchronousExecution = async() => {
  // TODO 2: Implemente aqui o código para executar as tarefas de forma ASSÍNCRONA
  task1().then((res)=>{console.log(res)});
  task2().then((res)=>{console.log(res)});
  task3().then((res)=>{console.log(res)});
  task4().then((res)=>{console.log(res)});

};

/*
    TODO 3: Agora esse arquivo deve ter a capacidade de receber parâmetros
    de entrada. 
    
    Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution()
    Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution()

    Dica: O Node tem uma api nativa para tratar os parâmetros de entrada
    consulte https://nodejs.org/docs/latest/api/process.html


*/

const arg = process.argv[2];

(arg === 'sync')? synchronousExecution(): -1;
(arg ==='async')? asynchronousExecution(): -1;