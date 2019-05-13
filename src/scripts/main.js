import messageForm from "./messageForm"
import messageDataCalls from "./messageDataCalls"
import messageList from "./messageList"

messageForm.createAndAppendForm();
messageList.appendMessagesToDom()
messageDataCalls.getAllMessages()
    .then(parsedMessages => {
        console.log(parsedMessages)
    })

