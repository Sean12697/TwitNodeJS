var Twit = require('twit')
var Keys = require('./keys');
 
var T = new Twit(Keys);

var stream = T.stream('statuses/filter', { track: '#MMUNodeJSDemo' })
stream.on('tweet', gotTweet);

function gotTweet(tweet) {
  
    console.log('Retweeting ' + tweet.id_str + ": " + tweet.text);

    T.post('favorites/create', { id: tweet.id_str }, retweeted); //Likes
    T.post('statuses/retweet', { id: tweet.id_str }, retweeted); //Retweets

    function retweeted(err, data, response) {
      if (err) { console.log("Error: " + err.message); } else { console.log('Retweeted: ' + tweet.id); }
    }
}