/*
    Author: Eliot Clarke
    Name: taskFetch.js
    Purpose: functions for communication with the database for the task section
*/

const apiurl = "http://localhost:8088/tasks";

const taskCalls = {
  getTasks: function () {
    return fetch(`${apiurl}`)
      .then(results => results.json())
  },
  getSingleTask: function (taskID) {
    return fetch(`${apiurl}/${taskID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
  },
  postTask: function (taskObj) {
    return fetch(`${apiurl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObj)
    }).then(response => response.json())
  },
  patchTask: function (id, obj) {
    return fetch(`${apiurl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json())
  },
  editTask: function (id, obj) {
    return fetch(`${apiurl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json())
  },
  deleteTask: function (id) {
    return fetch(`${apiurl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
  }
}


export default taskCalls