// event module

const EventEmitter = require('events');
const emmiter = new EventEmitter();

// create event and there work
emmiter.on('event1', (e) => {
    console.log(e)
})

// create event and there work
emmiter.on('event2', () => {
    console.log('Event 2 Called')
})

// call event
emmiter.emit('event1', { name: 'Mehedi', id: 1 })


