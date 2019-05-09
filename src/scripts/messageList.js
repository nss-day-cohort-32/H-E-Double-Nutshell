import messageDataCalls from "./messageDataCalls"
import messages from "./messages"

const messageList = {

    appendMessagesToDom() {

        messageDataCalls.getAllMessages()
            .then(allMessages => {

                let messageDocFrag = document.createDocumentFragment();

                allMessages.forEach(message => {
                    let messageHtml = messages.messageBuilder(message)
                    messageDocFrag.appendChild(messageHtml);
                });

                let displayDiv = document.querySelector("#messages__div");
                while (displayDiv.firstChild) {
                    displayDiv.removeChild(displayDiv.firstChild);
                }

                displayDiv.appendChild(messageDocFrag)
            })
    }
}

export default messageList