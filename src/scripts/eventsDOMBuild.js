import eventsAPI from "./events.js";

const eventsDOMBuild = {
  eventsBuilder(eventsObj) {
    let closestEvent = eventsAPI.findClosestEvent()
    console.log("closest event", closestEvent);
    console.log("events obj", eventsObj);
    let eventsContainer = document.createElement("div");
    eventsContainer.setAttribute("id", `events__${eventsObj.id}`);
    if (eventsObj.date === closestEvent) {
      eventsContainer.setAttribute("class", "nearest__event");
      console.log("it worked!!!!!!!");
    }
    let eventNames = document.createElement("h3");
    eventNames.textContent = eventsObj.title;
    let eventDates = document.createElement("p");
    eventDates.textContent = eventsObj.date;
    let eventLocations = document.createElement("p");
    eventLocations.textContent = eventsObj.location;

    let outputEventsArticle = document.querySelector("#events__output");
    eventsContainer.appendChild(eventNames);
    eventsContainer.appendChild(eventDates);
    eventsContainer.appendChild(eventLocations);
    outputEventsArticle.appendChild(eventsContainer);

    return eventsContainer;
  }
};

export default eventsDOMBuild;
