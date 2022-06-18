const { task1, task2, task3, task4 } = require("./tasks");
const process = require ('process');

const synchronousExecution = async () => {
  // TODO 1: Implemente aqui o código para executar as tarefas de forma SÍNCRONA
  await task1().then(totalTime => {
    console.log(totalTime);
  });
  await task2().then(totalTime => {
    console.log(totalTime);
  });
  await task3().then(totalTime => {
    console.log(totalTime);
  });
  await task4().then(totalTime => {
    console.log(totalTime);
  });
};

const asynchronousExecution = () => {
  // TODO 2: Implemente aqui o código para executar as tarefas de forma ASSÍNCRONA
  task1().then(totalTime => {
    console.log(totalTime);
  });
  task2().then(totalTime => {
    console.log(totalTime);
  });
  task3().then(totalTime => {
    console.log(totalTime);
  });
  task4().then(totalTime => {
    console.log(totalTime);
  });
};

process.argv[2] === 'sync' ? synchronousExecution() : asynchronousExecution();

/*
    TODO 3: Agora esse arquivo deve ter a capacidade de receber parâmetros
    de entrada. 
    
    Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution()
    Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution()

    Dica: O Node tem uma api nativa para tratar os parâmetros de entrada
    consulte https://nodejs.org/docs/latest/api/process.html


*/
