var UI = require('ui');
var V = require('vector2');
var Settings = require('settings');

var face = new UI.Window();

var bg = new UI.Rect({
    position: new V(0, 0),
    size: new V(144, 168),
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

if(Settings.option('access_token'))
{
    console.log(Settings.option('access_token'));
}

Settings.config({
    url: 'https://api-phatsk.rhcloud.com/up.php'
},function(e) {
    var response = JSON.parse(e.response);

    if(response.failed)
    {
    
    }
    else
    {
        Settings.option('access_token', response.access_token);
    }
})
