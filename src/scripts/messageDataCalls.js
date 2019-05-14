const messageDataCalls = {

    getAllMessages() {
        return fetch("http://localhost:8088/messages")
            .then(response => response.json());
    },

    getOneMessage(messageId) {
        return fetch(`http://localhost:8088/messages/${messageId}`)
            .then(response => response.json());
    },

    postNewMessage(newMessageToSave) {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessageToSave)
        })
    },

    patchEditedMessage(messageId, messageToEdit) {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToEdit)
        })
    }
}

export default messageDataCalls