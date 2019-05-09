const messageBuilder = (messageObj) => {

    let messageSection = document.createElement("section");

    messageSection.setAttribute("id", `message--${messageObj.id}`);
    messageSection.setAttribute("class", "message__article")
}