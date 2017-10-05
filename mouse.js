var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
// 	y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(278, 371);
// }

//robot.moveMouse(72 + (100), 413 - (80));

const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org');

ws.on('open', function open() {
    console.log('ws connected');
});

ws.on('message', function incoming(data) {
    let json
    try {
        json = JSON.parse(data)

        console.log(json)

        if (json.type == 'mouse-move') {
            robot.moveMouse(json.x, json.y);
        }

        if (json.type == 'mouse-click') {
            robot.mouseClick();
        }

    } catch(err) {
        console.log(err.message)
    }
});