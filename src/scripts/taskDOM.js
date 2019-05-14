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
const listButton = document.querySelector("#update__list");
const taskInput = document.querySelector("#new__task");
const dateInput = document.querySelector("#task__date");


//function to update the task section of the DOM
const update = () => {
  taskOutput.innerHTML = "";
  dateInput.valueAsDate = new Date();
  taskCalls.getTasks()
    .then(tasks => {
      tasks.forEach(taskObj => {

        //send elelemt to be created
        let taskDOMObj = taskElementBuilder(taskObj);

        //appends element to the DOM
        taskOutput.appendChild(taskDOMObj);
      })
    })
}

const taskElementBuilder = (taskObj) => {

  //create single task div and set attributes
  let taskDiv = document.createElement("div");
  setAttributes(taskDiv, {
    id: `task__${taskObj.id}`,
    class: "single__task__div"
  })

  //create checkbox and set attributes
  let taskCheckbox = document.createElement("input");
  setAttributes(taskCheckbox, {
    type: "checkbox",
    id: `task__checkbox__${taskObj.id}`,
    class: "task__checkbox__unchecked"
  })

  //create task checkbox eventlistener to change attribute
  taskCheckbox.addEventListener("change", () => {
    if (taskCheckbox.checked) {
      setAttributes(taskCheckbox.parentElement, {
        class: "single__task__div__checked"
      })
      let newObj = {
        completed: true
      }

      taskCalls.patchTask(taskObj.id, newObj);

    } else {

      setAttributes(taskCheckbox.parentElement, {
        class: "single__task__div"
      })

      let newObj = {
        completed: false
      }

      taskCalls.patchTask(taskObj.id, newObj);
    }
  })

  //append checkbox to div
  taskDiv.appendChild(taskCheckbox);

  //create task body and set attributes
  let firstH4 = document.createElement("h4");
  setAttributes(firstH4, {
    class: "task__name"
  })
  firstH4.textContent = "Task:";

  let taskText = document.createElement("p");
  setAttributes(taskText, {
    class: "task__name"
  })
  taskText.textContent = `${taskObj.task}`

  let secondh4 = document.createElement("h4");
  setAttributes(secondh4, {
    class: "task__name"
  })
  secondh4.textContent = "Expected Completion Date:"

  let taskDate = document.createElement("p");
  setAttributes(taskDate, {
    class: "task__name"
  })
  taskDate.textContent = `${taskObj.completionDate}`

  let editTaskButton = document.createElement("button");
  setAttributes(editTaskButton, {
    id: `task__edit__button__${taskObj.id}`,
    class: "task__edit__button"
  })
  editTaskButton.textContent = "Edit";

  editTaskButton.addEventListener("click", () => {
    let editTaskContent = taskObj.task;
    let editTaskDate = taskObj.completionDate;

    let dateArray = editTaskDate.split("/");
    let newDate = `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;

    taskInput.value = editTaskContent;
    dateInput.value = newDate;

    let saveTaskButton = document.createElement("button");
    setAttributes(saveTaskButton, {
      id: "save__task__button",
      class: "task__button"
    })
    saveTaskButton.textContent = "Change Task";
    saveTaskButton.addEventListener("click", () => {
      let newTaskContent = taskInput.value;
      let dateArray = dateInput.value.split("-");

      let newDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;

      let editedTask = taskObjBuilder(newTaskContent, newDate)

      taskCalls.editTask(taskObj.id, editedTask)
        .then(update);

      taskInput.value = "";
      dateInput.value = "";
      saveTaskButton.replaceWith(taskButton);
    })

    taskButton.replaceWith(saveTaskButton);
  })

  //append body to div
  taskDiv.appendChild(firstH4)
  taskDiv.appendChild(taskText)
  taskDiv.appendChild(secondh4)
  taskDiv.appendChild(taskDate)
  taskDiv.appendChild(editTaskButton)

  //return DOM element
  return taskDiv;
}


//this function allows the user to add a task to the task list
const addTaskListener = taskButton.addEventListener("click", () => {
  //turns date input into the americanized version of listing a date
  let dateArray = dateInput.value.split("-");
  let newDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;

  let newTask = taskInput.value;

  let userId = sessionStorage.getItem("userId");
  let numberId = Number(userId);

  if (taskFormValidator(newTask, newDate)) {

    let newObject = taskObjBuilder(numberId, newTask, newDate);

    taskInput.value = "";
    dateInput.valueAsDate = new Date();

    taskCalls.postTask(newObject)
      .then(update);
  }
})


const listUpdateListener = listButton.addEventListener("click", () => {

  //this button will go through the task database and remove any tasks that are complete: true
  taskCalls.getTasks()
    .then(tasks => {

      //toDelete becomes an array filled with the tasks that are completed === true
      let toDelete = tasks.filter(task => {
        let deleteMe = false;

        if (task.completed === true) {
          deleteMe = true;
          return deleteMe;
        }
      })

      //we take the toDelete array and use map to turn it into an array of promises given to us from the taskCalls.deleteTask function
      let promisedDeletes = toDelete.map(item => {
        return taskCalls.deleteTask(item.id)
      })

      //then once we have that array of promises, we ask javascript to complete all of them with Promise.all before moving on to update the entire page
      //if this weren't here, it would randomly update somewhere in the array of promises, and while it would complete all those deletions is might not look that way on the DOM until you refresh
      Promise.all(promisedDeletes)
        .then(update);
    })
})

//funciton to validate the form
const taskFormValidator = (task, date) => {
  if (task.length >= 5 && task.length <= 50) {
    if (date != undefined && date != "") {
      return true;
    } else {
      alert("Sorry, looks like your date isn't a valid entry");
    };
  } else {
    alert("Sorry, looks like your task is either tooooo long or too short");
  }
}

const setAttributes = (element, attributes) => {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

module.exports = {
  update,
  taskElementBuilder,
  addTaskListener,
  listUpdateListener
}