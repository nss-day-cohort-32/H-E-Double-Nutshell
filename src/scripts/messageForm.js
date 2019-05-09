import messageList from "./messageList"

const messageForm = {

    clearInputForm() {
        document.querySelector("#messageContent").value = "";
    },

    createAndAppendForm() {

        let messageField = document.createElement("fieldset");

        let messageFieldLabel = document.createElement("label");
        messageFieldLabel.textContent = "Message";

        let messageInput = document.createElement("textarea");
        messageInput.setAttribute("id", "message__input");
        messageInput.setAttribute("name", "message__input");

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "save__message");

        let messageFormFrag = document.createDocumentFragment();

        messageFormFrag.appendChild(messageField);
        messageFormFrag.appendChild(messageInput);
        messageFormFrag.appendChild(saveButton);

        let formArticle = document.querySelector("#messages__div");
        formArticle.appendChild(messageFormFrag);
    }
}

export default messageForm

