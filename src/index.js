const { task1, task2, task3, task4 } = require("./tasks");

const makingAllPromise = async (tasks, time) => { //Fiz essa func pois no ultimo commit eu repetia as linhas nas 4 tasks, fiz bem ?
  /**
   * time = 1 = 1sec
   */
  await new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks())}, 1000*time) //*¹Tive que colocar a tasks com () isso é correto ?
  })
}

const synchronousExecution = async () => {
  await makingAllPromise(task1, 10) //Bem mais simples ficou, acho que até facilitou na hora de ler !
  await makingAllPromise(task2, 5)
  await makingAllPromise(task3, 4)//*¹Se colocasse os () aqui, ele executava o console.log da task antes do timeout -obivious
  await makingAllPromise(task4, 4)
}

const asynchronousExecution = () => { 
  setTimeout(task1, 1000*10);// setTimeout já funcina como async, por isso só utilizei ela, isso é correto ?
  setTimeout(task2, 1000*5);
  setTimeout(task3, 1000*4);
  setTimeout(task4, 1000*4); 
};

const arg = process.argv[2];

(arg === 'sync')? synchronousExecution(): -1;
(arg ==='async')? asynchronousExecution(): -1;
