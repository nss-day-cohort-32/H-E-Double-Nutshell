import taskObjBuilder from "./taskObjBuilder";
import taskCalls from "./taskFetch";

/*
    Author: Eliot Clarke
    Name: taskDOM.js
    Purpose: functions to build DOM elements and post to DOM
*/

//variables for use with the DOM
const taskButton = document.querySelector("#submit__task");
const taskOutput = document.querySelector("#task__output");


//function to update the task section of the DOM
const update = () => {
  taskCalls.postTask(tasks => {
    tasks.forEach(taskObj => {
      taskElementBuilder(taskObj);
    })
  })
}

const taskElementBuilder = (taskObj) => {

}


const buttonListener = taskButton.addEventListener("click", () => {
  let newTask = document.querySelector("#new__task").value;
  let newDate = document.querySelector("#task__date").value;

  let newObject = taskObjBuilder(newTask, newDate);

  taskCalls.postTask(newObject);
})

export default buttonListener