const messageDataCalls = {

    getAllMessages() {
        return fetch("http://localhost:8088/messages")
            .then(response => response.json());
    }
}

export default messageDataCalls