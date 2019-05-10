const messages = {

    messageBuilder(messageObj) {
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

        messageDiv.appendChild(messageName);
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(date);
        messageDiv.appendChild(editButton);

        return messageDiv
    }
}

export default messages