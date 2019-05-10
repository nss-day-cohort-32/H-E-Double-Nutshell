const eventsAPI = {
  working() {
    console.log("it's working");
  },
  getAllMyEvents(userId) {
    fetch(`http://localhost:8088/events?userId=${userId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
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
        return response.json()
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
    this.getAllMyEvents("events").then(allEvents => {
      let eventsDocFragment = document.createDocumentFragment();

      allEvents.forEach(eventObj => {
        let eventHTML = events__DOM.eventsBuilder(eventObj);
        eventsDocFragment.appendChild(eventHTML);
      });

      let eventsOutputArticle = document.querySelector(".output__events");

      while (eventsOutputArticle.firstChild) {
        eventsOutputArticle.removeChild(eventsOutputArticle.firstChild);
      }
      eventsOutputArticle.appendChild(eventsDocFragment);

    });
  }
};

export default eventsAPI;
