class Events {
  constructor (events) {
    events = events || []
    events.filter((e) => { return e.date >= reformatDate(new Date().toLocaleDateString()) })

    this.eventArray = events.map(function(eventPlan) {
      { return new EventPlan(eventPlan.content, eventPlan.date, eventPlan.time) }
    })

  }

  add (eventPlan) {
    this.eventArray.push(eventPlan);
  }

  convertEvents () {
    var ul = document.createElement('ul')
    var arrayLength = this.eventArray.length
    //refactor to remove the sort from this method
    this.eventArray.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)

   for (let i = 0; i < arrayLength; i++) {
      ul.appendChild(this.eventArray[i].convertEventPlan());
    }

    return ul;
  }
}
