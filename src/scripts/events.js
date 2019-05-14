let eventsDOMBuild = require('./eventsDOMBuild');

const eventsAPI = {
  getAllEvents() {
    return fetch("http://localhost:8088/events").then(function(response) {
      return response.json();
    });
  },
  getAllFriendEvents(userId) {
    fetch(`http://localhost:8088/events?userId=${userId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  },
  postNewEvent(newEventObj) {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      body: JSON.stringify(newEventObj), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(newEventEntry) {
        console.log("new event", JSON.stringify(newEventEntry));
      });
  },
  putEvent(eventObj, id) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(eventObj), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(newEventEntry) {
        console.log("updated event", JSON.stringify(newEventEntry));
        eventsDOMBuild.updateDOM();
      });
  },
  updateEventOnClick(userId, id) {
        const eventObj = {
          date: document.querySelector("#event__date").value,
          title: document.querySelector("#event__title").value,
          location: document.querySelector("#event__location").value,
          userId: userId
        };
        return eventsAPI.putEvent(eventObj, id)
  },
  createNewEventOnClick(userId) {
    document
      .getElementById("submit__event")
      .addEventListener("click", function() {
        const newEventObj = {
          date: document.querySelector("#event__date").value,
          title: document.querySelector("#event__title").value,
          location: document.querySelector("#event__location").value,
          userId: userId
        };
        return eventsAPI.postNewEvent(newEventObj)
        // .then(eventsDOMBuild.updateDOM());
      });
  },
  eventsToDom() {
    eventsAPI.getAllEvents().then(allEvents => {
      let eventsDocFragment = document.createDocumentFragment();
      //sorts events by date
      allEvents = allEvents.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a < b ? -1 : a > b ? 1 : 0;
      });
      //displays events past current date
      allEvents.forEach(eventObj => {
        let now = new Date();
        let eventDate = new Date(eventObj.date);
        if (eventDate >= now) {
          let eventHTML = eventsDOMBuild.eventsBuilder(eventObj)
          eventsDocFragment.appendChild(eventHTML);
        }
        let eventsOutputArticle = document.querySelector("#events__output");
        eventsOutputArticle.appendChild(eventsDocFragment);
      });
    });
  }
};

export default eventsAPI;
