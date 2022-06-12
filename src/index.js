const { task1, task2, task3, task4 } = require("./tasks");
const fs = require("fs");

const synchronousExecution = async () => {
  (await task1());
  (await task2());
  (await task3());
  (await task4());
};

  // TODO 2: Implemente aqui o código para executar as tarefas de forma ASSÍNCRONA
  const asynchronousExecution = () => { 
    task1() 
    task2()
    task3()
    task4() 
  }; 

  //Agora esse arquivo deve ter a capacidade de receber parâmetros de entrada. Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution() Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution().
  if (process.argv[2] === "sync") {
    synchronousExecution();
  } else {
    asynchronousExecution();
  }  


