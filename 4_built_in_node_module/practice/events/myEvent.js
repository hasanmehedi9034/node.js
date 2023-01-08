const EventEmitter = require('events');

class MyEvent extends EventEmitter {
    event1 = () => {
        this.emit('event1');
    }
}

module.exports = MyEvent

