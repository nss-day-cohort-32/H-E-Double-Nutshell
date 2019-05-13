
// import articleAPI from "./articles";
// articleAPI.working();
// articleAPI.getAllArticles(1);
// articleAPI.articlesToDom();
//Dan's imports for Events

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

//tasks functions
taskDom.update();

//messages functions
messageForm.createAndAppendForm();
messageList.appendMessagesToDom()
messageDataCalls.getAllMessages()
  .then(parsedMessages => {
    console.log(parsedMessages)
  })

