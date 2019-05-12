import eventsDOMBuild from "./eventsDOMBuild";

const eventsAPI = {
  working() {
    console.log("it's working");
  },
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
    fetch("http://localhost:8088/events", {
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
        eventsAPI.postNewEvent(newEventObj);
        eventsAPI.eventsToDom();
      });
  },
  getEventToUpdate(eventId) {
    fetch(`http://localhost:8088/events?id=${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(newEventEntry) {
        console.log("upadte event", JSON.stringify(newEventEntry));
      });
  },
  updateEvent(eventId) {
    fetch(`http://localhost:8088/events?id=${eventId}`, {
      method: "PUT",
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
  eventsToDom() {
    eventsAPI.getAllEvents().then(allEvents => {
      let eventsDocFragment = document.createDocumentFragment();
      //sorts events by date
      allEvents = allEvents.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      allEvents.forEach(eventObj => {
        if (eventsAPI.findClosestEvent() === eventObj) {
          eventObj.classList.add("nextEvent");
        }
        let eventHTML = eventsDOMBuild.eventsBuilder(eventObj);
        eventsDocFragment.appendChild(eventHTML);
      });

      let eventsOutputArticle = document.querySelector("#events__output");
      while (eventsOutputArticle.firstChild) {
        eventsOutputArticle.removeChild(eventsOutputArticle.firstChild);
      }
      eventsOutputArticle.appendChild(eventsDocFragment);
    });
  },
  findClosestEvent() {
    //find the event nearest to current date
    //get all events
    return eventsAPI.getAllEvents().then(allEvents => {
      var now = new Date();
      var closest = Infinity;
      //establishes current date
      // console.log("date", allEvents)
      /*forEach date (d) in events,
        if the event date is greater than (farther away)
        or equal to the current date, AND (the event date
        is less than infinity or next closest date)
        then the event date is the nearest upcoming event
        HUZZAH!
        */
      allEvents.forEach(function(d) {
        var date = new Date(d.date);
        if (date >= now && (date < new Date(closest) || date < closest)) {
          closest = d;
        }
      });
      return closest;
    });
  }
};

export default eventsAPI;
