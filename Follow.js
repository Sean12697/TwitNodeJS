var Twit = require('twit')
var Keys = require('./keys');
 
var T = new Twit(Keys);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow event!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
    T.post('statuses/update', { status: 'Thank you ' + '@' + screenName + ', for the follow!' }, tweeted);
    
    function tweeted(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success: ' + data.text);
        }
    }
}