let events = [{"type": "mouse-move", "x":400, "y":350},
{"type": "mouse-click"},
{"type": "mouse-move", "x":900, "y":965},
{"type": "mouse-click"},
{"type": "keyboard-input", "text":"Oi, meu nome é Gabriel Angelus!"},
{"type": "mouse-move", "x":1650, "y":965},
{"type": "mouse-click"}]

const sleep = require('sleep');

const WebSocket = require('ws');
 
const ws = new WebSocket('ws://34.212.9.57:5000');
 
ws.on('open', function open() {
    console.log('conectou')
  sleep.sleep(3)
    for(let i=0; i<events.length; i++) {
        sleep.msleep(500)
        ws.send(JSON.stringify(events[i]))
    }
});
 
ws.on('message', function incoming(data) {
    
});