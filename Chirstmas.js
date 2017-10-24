var Twit = require('twit');
var Keys = require('./keys');
var date = new Date();
var delay = 1000 * 60;

//@BotMimir
var T = new Twit(Keys);

tweeter();
setInterval(tweeter,delay);

function tweeter() {
    
    var december24th = date.getMonth() == 12 && date.getDate() == 24 && date.getHours() == 23;
    
    if (december24th && date.getMinutes() % 5 == 0) {
        T.post('statuses/update', {status: "Only " + (60 - date.getMinutes()) + " minutes until Christmas!"}, tweeted);
    }
    
    if (december24th && date.getMinutes() == 59 && (date.getSeconds() == 30 || date.getSeconds() > 55)) {
        delay = 1000;
        T.post('statuses/update', {status: "Only " + (Math.floor(60 - date.getSeconds())) + " seconds until Christmas!"}, tweeted);
    }
    
    if (date.getMonth() == 12 && date.getDate() == 25 && date.getHours() == 0 && date.getMinutes() == 0) {
        delay = 1000 * 60;
        var tweet = {status: "Merry Christmas! From @Sean12697 #CodingRainbow"};
        T.post('statuses/update', tweet, tweeted);
    }
    
    function tweeted(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success: ' + data.text);
        }
    };
}