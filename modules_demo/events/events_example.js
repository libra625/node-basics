const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`Привіт, ${name}!`);
});

emitter.emit('greet', 'Ніно');
