 import eventsAPI from "./events.js";
/*
    Author: Dan Storm
    Name: eventsDOMBuild.js
    Purpose: function to build DOM elements
*/
let booleanVar = true;
//creating DOM elements

const updateDOM = () => {
  let eventTitleInput = document.getElementById("event__title");
  let eventDateInput = document.getElementById("event__date");
  let eventLocationInput = document.getElementById("event__location");
  let eventsOutput = document.querySelector("#events__output")
  eventsOutput.innerHTML = "";
  eventTitleInput.value = "";
  eventDateInput.value = "";
  eventLocationInput.value = "";
  eventDateInput = new Date();
  booleanVar = true;
  eventsAPI.eventsToDom();
}

const eventsBuilder = (eventsObj) => {
  let eventsContainer = document.createElement("div");
  let eventNames = document.createElement("h3");
  let eventDates = document.createElement("p");
  let eventLocations = document.createElement("p");
  let eventUpdateButton = document.createElement("button");
  let eventTitleInput = document.getElementById("event__title");
  let eventDateInput = document.getElementById("event__date");
  let eventLocationInput = document.getElementById("event__location");
  let outputEventsArticle = document.querySelector("#events__output");
  console.log("events object", eventsObj);
    //set attributes
    eventsContainer.setAttribute("id", `events__${eventsObj.id}`);
    eventUpdateButton.setAttribute("id", `events__button__${eventsObj.id}`);
    if(booleanVar === true){
      booleanVar = false;
      eventsContainer.setAttribute("class", "nearest__event");
      console.log("it worked!!!");
    }
    //updating DOM element content
    eventNames.textContent = eventsObj.title;
    eventDates.textContent = eventsObj.date;
    eventLocations.textContent = eventsObj.location;
    eventUpdateButton.textContent = "update event";


    //update event functionality on click
    eventUpdateButton.addEventListener("click", function() {
      console.log(eventsObj.id);


      //variables to store input field content
      eventTitleInput = document.getElementById("event__title");
      eventDateInput = document.getElementById("event__date");
      eventLocationInput = document.getElementById("event__location");


      //variables to store object content
      let selectedEventTitle = eventsObj.title;
      let selectedEventDate = eventsObj.date;
      let selectedEventLocation = eventsObj.location;
      // let eventId = eventsObj.id;


      //set input field content equal to object content
      eventTitleInput.value = selectedEventTitle;
      eventDateInput.value = selectedEventDate;
      eventLocationInput.value = selectedEventLocation;


      //toggle create event button
      let createEventButton = document.getElementById("submit__event");
      let replaceUpdateButton = document.createElement("button")
      replaceUpdateButton.setAttribute("id", "submit_updated_event")
      replaceUpdateButton.textContent = "Submit Updated Event"
      createEventButton.replaceWith(replaceUpdateButton);
      replaceUpdateButton.addEventListener("click", function() {
      eventsAPI.updateEventOnClick(2, eventsObj.id)
      .then(updateDOM);
      replaceUpdateButton.replaceWith(createEventButton);
      });
    });


    //append to DOM
    eventsContainer.appendChild(eventNames);
    eventsContainer.appendChild(eventDates);
    eventsContainer.appendChild(eventLocations);
    eventsContainer.appendChild(eventUpdateButton);
    outputEventsArticle.appendChild(eventsContainer);


    //return DOM element
    return eventsContainer;
  };


  exports.updateDOM = updateDOM;
  exports.eventsBuilder = eventsBuilder;