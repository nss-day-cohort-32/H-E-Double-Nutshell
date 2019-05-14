// import messageList from "./messageList"
import messageDataCalls from "./messageDataCalls";
// import messages from "./messages"

const messageForm = {

    clearInputForm() {
        document.querySelector(".message__input").value = "";
        document.querySelector(".message__input").removeAttribute("id")
    },

    createAndAppendForm() {

        let messageField = document.createElement("fieldset");
        messageField.setAttribute("class", "message__field")

        let messageEditId = document.createElement("input");
        messageEditId.setAttribute("type", "hidden");
        messageEditId.setAttribute("id", "messsage__edit__id")
        messageField.appendChild(messageEditId);


        let messageInput = document.createElement("textarea");
        messageInput.setAttribute("class", "message__input");
        messageInput.setAttribute("name", "message__input");
        messageInput.placeholder = "Enter message"
        messageField.appendChild(messageInput);

        let sendButton = document.createElement("button");
        sendButton.setAttribute("class", "send__button");
        sendButton.textContent = "Send"

        let updateButton = document.createElement("button");
        updateButton.setAttribute("class", "update__button");
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", () => {
            let inputMessageContent = document.querySelector(".message__input");
            let inputMessageId = document.querySelector("#messsage__edit__id").value;
            let inputMessageDate = messageForm.getTimeStamp();
            let editedMessage = {
                // id: inputMessageId.value,
                message: inputMessageContent.value,
                date: inputMessageDate
            }
            console.log("lol", editedMessage)

            // messageDataCalls.patchEditedMessage(inputMessageId, editedMessage)
            //     .then(response => {
            //         messageList.appendMessagesToDom()
            //     })
        })



        sendButton.addEventListener("click", this.handleAddNewMessage);


        messageField.appendChild(sendButton);
        messageField.appendChild(updateButton);

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

        let nameId = sessionStorage.getItem("userName")
        let inputMessageContent = document.querySelector(".message__input");
        let inputMessageDate = messageForm.getTimeStamp();

        let newMessage = {
            userId: nameId,
            message: inputMessageContent.value,
            date: inputMessageDate
        }

        messageDataCalls.postNewMessage(newMessage)
        // .then(response => {
        //     messageList.appendMessagesToDom()

        //     messageForm.clearInputForm()
        // })
    }
}

export default messageForm

