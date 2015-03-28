var UI = require('ui');
var V = require('vector2');

var face = new UI.Window();
var timeText = new UI.TimeText({
  position: new V(0, 25),
  size: new V(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'black',
  textAlign: 'center'
});

face.add(timeText);

face.show();
