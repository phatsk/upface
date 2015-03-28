var UI = require('ui');

var face = new UI.Window();
var time = new TimeText({text: '%a'});

face.add(time);

face.show();
