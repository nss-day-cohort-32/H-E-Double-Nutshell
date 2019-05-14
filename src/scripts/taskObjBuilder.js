/*
    Author: Eliot Clarke
    Name: taskObjBuilder.js
    Purpose: function to build task object for use with database
*/

const taskObjBuilder = (userId, task, completionDate) => {

  let taskObject = {
    "userId": userId,
    "task": `${task}`,
    "completionDate": `${completionDate}`,
    "completed": false
  }

  return taskObject
}

export default taskObjBuilder