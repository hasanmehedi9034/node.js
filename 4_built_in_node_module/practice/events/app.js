// const EventEmitter = require('events');
// const emmiter = new EventEmitter();

// emmiter.on('event1', (e) => {
//     console.log(e)
// })

// emmiter.on('event2', (e) => {
//     console.log(e)
// })

// emmiter.emit('event1', {name: 'mehedi'})

const MyEvent = require('./myEvent')
const myEvent = new MyEvent();

myEvent.on('event1', () => {
    console.log('hello from event 1')
})
myEvent.event1()