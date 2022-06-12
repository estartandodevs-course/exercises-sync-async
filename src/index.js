const { task1, task2, task3, task4 } = require("./tasks");

const synchronousExecution = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve(task1())}, 1000*10)    
  });
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve(task2())}, 1000*5)    
  });
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve(task3())}, 1000*4)    
  });
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve(task4())}, 1000*4)    
  });
};

const asynchronousExecution = () => {
  setTimeout(task1, 1000*10);
  setTimeout(task2, 1000*5);
  setTimeout(task3, 1000*4);
  setTimeout(task4, 1000*4);
};

const arg = process.argv[2];

(arg === 'sync')? synchronousExecution(): -1;
(arg ==='async')? asynchronousExecution(): -1;
/*
    TODO 3: Agora esse arquivo deve ter a capacidade de receber parâmetros
    de entrada. 
    
    Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution()
    Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution()

    Dica: O Node tem uma api nativa para tratar os parâmetros de entrada
    consulte https://nodejs.org/docs/latest/api/process.html


*/