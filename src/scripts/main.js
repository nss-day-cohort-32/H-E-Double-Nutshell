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

