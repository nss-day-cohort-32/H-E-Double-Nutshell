// import articleAPI from "./articles";
// articleAPI.working();
// articleAPI.getAllArticles(1);
// articleAPI.articlesToDom();

//burak's login import
import login from "./login"

login.loginActivate()
login.registerUser()

// login.registerUser()

import eventsAPI from "./events";
// eventsAPI.getAllEvents();
eventsAPI.createNewEventOnClick(2);
// eventsAPI.getEventToUpdate(1);
eventsAPI.eventsToDom();
eventsAPI.findClosestEvent();

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