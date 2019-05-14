
// import articleAPI from "./articles";
// articleAPI.working();
// articleAPI.getAllArticles(1);
// articleAPI.articlesToDom();
//Dan's imports for Events

//burak's login import
import login from "./login"

const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", () => {
  login.ActivateUser()
});

// login.registerUser()

import eventsAPI from "./events";
eventsAPI.createNewEventOnClick(2);
eventsAPI.eventsToDom();

//eliot's imports for tasks
let taskDom = require("./taskDOM");

//Ricky's imports for messages
import messageForm from "./messageForm"
import messageDataCalls from "./messageDataCalls"
import messageList from "./messageList"

//eliot's task functions
taskDom.update();

//eliot's user search import
import userSearch from "./userSearch"

userSearch.fetchUsers();


//messages functions
messageForm.createAndAppendForm();
messageList.appendMessagesToDom()
messageDataCalls.getAllMessages()


