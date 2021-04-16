const EventEmitter = require('events');
const emitter = new EventEmitter();
// Resister a listener
emitter.on('messageLogged', (arrg)=>{
    console.log('Listener called', arrg);
});
//Raise an event
emitter.emit('messageLogged',{id: 1 , url:'http/'});    //making a noise , produce /signaling