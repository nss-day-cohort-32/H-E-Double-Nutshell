import eventsAPI from "./events.js";

const eventsDOMBuild = {
  eventsBuilder(eventsObj) {
    eventsAPI.findClosestEvent()
    .then(event => {
      // console.log("event",event)
      if (eventsObj.date === event.date) {
        eventsContainer.setAttribute("class", "nearest__event");
        // console.log("it worked!!!!!!!");
      }
    })
    // console.log("closest event", closestEvent);
    // console.log("events obj", eventsObj);
    let eventsContainer = document.createElement("div");
    eventsContainer.setAttribute("id", `events__${eventsObj.id}`);
    let eventNames = document.createElement("h3");
    eventNames.textContent = eventsObj.title;
    let eventDates = document.createElement("p");
    eventDates.textContent = eventsObj.date;
    let eventLocations = document.createElement("p");
    eventLocations.textContent = eventsObj.location;
    let eventUpdateButton = document.createElement("button");
    eventUpdateButton.innerHTML = "update event";
    eventUpdateButton.setAttribute("id", `events__button__${eventsObj.id}`);
    eventUpdateButton.addEventListener("click", function() {
      console.log(eventsObj.id);
      const eventTitleInput = document.getElementById("event__title");
      const eventDateInput = document.getElementById("event__date");
      const eventLocationInput = document.getElementById("event__location");

      let selectedEventTitle = eventsObj.title;
      let selectedEventDate = eventsObj.date;
      let selectedEventLocation = eventsObj.location;

      eventTitleInput.value = selectedEventTitle;
      eventDateInput.value = selectedEventDate;
      eventLocationInput.value = selectedEventLocation;

      let eventId = eventsObj.id
      console.log("eventId", eventId);

      eventsAPI.updateEvent(eventId)

    });
    let outputEventsArticle = document.querySelector("#events__output");
    eventsContainer.appendChild(eventNames);
    eventsContainer.appendChild(eventDates);
    eventsContainer.appendChild(eventLocations);
    outputEventsArticle.appendChild(eventsContainer);
    eventsContainer.appendChild(eventUpdateButton);

    return eventsContainer;
  }
};

export default eventsDOMBuild;
