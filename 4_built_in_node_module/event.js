// event module

const MyEvent = require('./myEvent');
const myEvent = new MyEvent();

// create event and there work
// emmiter.on('event1', (e) => {
//     console.log(e)
// })

// create event and there work
// emmiter.on('event2', () => {
//     console.log('Event 2 Called')
// })

// call event
// emmiter.emit('event1', { name: 'Mehedi', id: 1 })

myEvent.on('event1', () => {
    console.log('Event 1 Triggered');
})

myEvent.function1()


