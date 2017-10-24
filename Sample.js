var Twit = require('twit');
var Keys = require('./keys'); //Remember to have a keys file in the same directory
var T = new Twit(Keys); 

//-----------------------POST--------------------------

//T.post('statuses/update', { status: 'hello world!' }, //function(err, data, response) {
//  console.log(data)
//});

//-----------------------INTERVAL--------------------------

//tweetIt();
//setInterval(tweetIt, 5*1000);

//function tweetIt() {
//T.post('statuses/update', { status: 'Have a random number: ' + Math.floor(Math.random()*100) }, function(err, data, response) {
//  console.log(data)
//});
//}

//-----------------------GET--------------------------

//T.get('search/tweets', { q: '#CodingRainbow', count: 10 }, function(err, data, response) {
//  console.log(data)
//});

//-----------------------FAV--------------------------

//var stream = T.stream('statuses/filter', { track: '#MMUNodeJSDemo' });
//stream.on('tweet', favIt);

//function favIt(tweet) {
//    console.log(tweet.id_str + ": " + tweet.text);
//    T.post('favorites/create', {id: tweet.id_str });
//    T.post('statuses/retweet', {id: tweet.id_str });
//}

//----------------------FOLLOW-------------------------

//var stream = T.stream('user');
//stream.on('follow', followed);
//
//function followed(eventMsg) {
//    var screenName = eventMsg.source.screen_name;
//    T.post('statuses/update', { status: 'Thank you @' + screenName + " for the follow!" }, function(err, data, response) {
//  console.log(data)
//});
//}