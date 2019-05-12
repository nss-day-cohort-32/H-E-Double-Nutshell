import messageDataCalls from "./messageDataCalls";
import messageForm from "./messageForm";
import messageList from "./messageList";


const messages = {

    messageBuilder(messageObj) {
        const messageEdit = document.querySelector(".message__input")
        let messageDiv = document.createElement("div");

        messageDiv.setAttribute("id", `message--${messageObj.id}`);
        messageDiv.setAttribute("class", "message__article");

        let messageName = document.createElement("h3");
        messageName.textContent = messageObj.userId;

        let messageContent = document.createElement("section");
        messageContent.textContent = messageObj.message;

        let date = document.createElement("section");
        date.textContent = messageObj.date;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit Message";

        editButton.addEventListener("click", () => {
            let newMess = messageObj.message
            messageEdit.value = newMess;
            let articleId = event.target.parentNode.id
            let messageId = articleId.split("--")[1]
            messageEdit.setAttribute("id", articleId);
            console.log(articleId)

            if (messageEdit.getAttribute("id") === true) {
                console.log("I dont have an id")
                messageList.appendMessagesToDom(newMessage)
            } else {
                console.log("I have an id, I can drink")
                messageDataCalls.putEditedMessage(messageId)
            }
        })


        messageDiv.appendChild(messageName);
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(date);
        messageDiv.appendChild(editButton);

        return messageDiv
    }
}

export default messages