import messageList from "./messageList"
import messageDataCalls from "./messageDataCalls";

const messageForm = {

    clearInputForm() {
        document.querySelector(".message__input").value = "";
        document.querySelector(".message__input").removeAttribute("id")
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

        saveButton.addEventListener("click", this.handleAddNewMessage);

        messageField.appendChild(saveButton);

        let messageFormFrag = document.createDocumentFragment();

        messageFormFrag.appendChild(messageField);

        let formArticle = document.querySelector(".message__input__div");
        formArticle.appendChild(messageFormFrag);
    },

    getTimeStamp() {
        let now = new Date();
        return ((now.getMonth() + 1) + "/" +
            (now.getDate()) + "/" +
            now.getFullYear() + " " +
            now.getHours() + ":" +
            ((now.getMinutes() < 10)
                ? ("0" + now.getMinutes())
                : (now.getMinutes())) + ":" +
            ((now.getSeconds() < 10)
                ? ("0" + now.getSeconds())
                : (now.getSeconds())))
    },

    handleAddNewMessage() {

        // let inputMessageName = document.querySelector("#messageName");
        let inputMessageContent = document.querySelector(".message__input");
        let inputMessageDate = messageForm.getTimeStamp();

        let newMessage = {
            // userId: inputMessageName.value,
            message: inputMessageContent.value,
            date: inputMessageDate
        }

        messageDataCalls.postNewMessage(newMessage)
            .then(response => {
                messageList.appendMessagesToDom()

                messageForm.clearInputForm()
            })
    }
}

export default messageForm

