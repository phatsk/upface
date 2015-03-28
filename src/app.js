var UI = require('ui');
var V = require('vector2');

var face = new UI.Window();

var bg = new UI.Rect({
    position: new V(10, 20),
    size: new V(124, 60),
    backgroundColor: 'white'
});

face.add(bg);

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
