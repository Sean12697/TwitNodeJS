// Running on https://twitter.com/YearProgress_
var Twit = require('twit');
var Keys = require('./keys');
var T = new Twit(Keys);

test();
setInterval(test, 1000);

var current = 0;
var year = (new Date()).getFullYear();

function test() {
    var result = oneLinePercentage() * 100;
    
    if (parseInt(result.toString().substr(0,2)) == 0) newYearTweet();
    // MAIN TEST
    if (parseInt(result.toString().substr(0,2)) > current) {
        current = parseInt(result.toString().substr(0,2));
        if (year != (new Date()).getFullYear()) year = (new Date()).getFullYear();
        tweetIt();
    }
}

function newYearTweet() {
    tweet(year + ' is over, have a good ' + (year + 1) + '!');
}

function tweetIt() {
    tweet(year + ' is ' + current + '% Complete!');
}

function tweet(status) {
    T.post('statuses/update', { status: status }, 
           function(err, data, response) {
        console.log(data)
    });
}

function oneLinePercentage() {
    return ((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999) - new Date(new Date().getFullYear(), 0, 1)));
}