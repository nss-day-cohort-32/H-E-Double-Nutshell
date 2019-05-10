const eventsDOMBuild = {
    eventsBuilder(eventsObj) {
        let eventsContainer = document.createElement("div")
        eventsContainer.setAttribute("id", `Events--${eventsObj.id}`)
        let eventNames = document.createElement("h3")
        eventNames.textContent = eventsItem.title
        let eventDates = document.createElement("p")
        eventDates.textContent = eventsItem.date
        let eventLocations = document.createElement("p")
        eventLocations.textContent = eventsItem.location

        let outputEventsArticle = document.querySelector(".output__events")
        eventsContainer.appendChild(eventNames)
        eventsContainer.appendChild(eventDates)
        eventsContainer.appendChild(eventLocations)
        outputEventsArticle.appendChild(eventsContainer)

return eventsContainer
    }
}

export default eventsDOMBuild;