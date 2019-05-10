import messageList from "./messageList"

const messageForm = {

    clearInputForm() {
        document.querySelector("#messageContent").value = "";
    },

    createAndAppendForm() {

        let messageField = document.createElement("fieldset");
        messageField.setAttribute("class", "message__field")

        let messageInput = document.createElement("textarea");
        messageInput.setAttribute("class", "message__input");
        messageInput.setAttribute("name", "message__input");
        messageInput.placeholder = "Enter message"
        messageField.appendChild(messageInput);

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "save__button");
        saveButton.textContent = "Send"
        messageField.appendChild(saveButton);

        let messageFormFrag = document.createDocumentFragment();

        messageFormFrag.appendChild(messageField);

        let formArticle = document.querySelector(".message__input__div");
        formArticle.appendChild(messageFormFrag);
    }
}

export default messageForm

