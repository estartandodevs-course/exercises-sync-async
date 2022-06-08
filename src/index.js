const { task1, task2, task3, task4 } = require("./tasks");
const process = require('node:process') 
// import { argv } from 'node:process';

const synchronousExecution = () => {
  // TODO 1: Implemente aqui o código para executar as tarefas de forma SÍNCRONA
  task1().then((data) => {

    console.log(data)
    task2().then((data) => {

      console.log(data)
      task3().then((data) => {

        console.log(data)
        task4().then((data) => {

          console.log(data)
        })
      })
    })
  })

  
};


const asynchronousExecution = () => {
  // TODO 2: Implemente aqui o código para executar as tarefas de forma ASSÍNCRONA
  task1().then((data)=>{
    console.log(data)
  });
  task2().then((data)=>{
    console.log(data)
  });
  task3().then((data)=>{
    console.log(data)
  });
  task4().then((data)=>{
    console.log(data)
  });
};
// asynchronousExecution()
/*
    TODO 3: Agora esse arquivo deve ter a capacidade de receber parâmetros
    de entrada. 
    
    Caso o parâmetro de entrada seja "sync" e chamará a função synchronousExecution()
    Caso o parâmetro de entrada seja "async" e chamará a função asynchronousExecution()

    Dica: O Node tem uma api nativa para tratar os parâmetros de entrada
    consulte https://nodejs.org/docs/latest/api/process.html


*/
process.argv.filter((el) => {
  if (el == 'sync') {
    synchronousExecution()
  } else if (el == 'async'){
    asynchronousExecution()
  }
})

// console.log(process.argv)