const emitter = require('event-emitter');

emitter.on('click',()=>{
     console.log(`Event triggered`);
})

emitter.emit('click');


