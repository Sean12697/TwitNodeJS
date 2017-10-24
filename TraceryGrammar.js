var Twit = require('twit')
var tracery = require('tracery-grammar');
var Keys = require('./keys');

var T = new Twit(Keys);

var data = {
    "sentence": ["#once.capitalize# upon a midnight #dreary#, while I #pondered#, #weak# and #weary#"],
    "once": ["once", "formerly", "erstwhile", "previously", "bygone"],
    "dreary": ["dreary", "doleful", "lonesome", "sorrowful", "blah", "grey"],
    "pondered": ["pondered", "contemplate", "consider", "evaluate", "examine", "speculate"],
    "weak": ["weak", "anemic", "feeble", "fragile", "frail"],
    "weary": ["weary", "bored", "exhausted", "fatigued", "impatient", "jaded", "sleepy"],
};

var hashtags = " #TraceryGrammar #NodeJs #Poe #Bot";

var grammar = tracery.createGrammar(data);
grammar.addModifiers(tracery.baseEngModifiers);

function generate() {
    var status = grammar.flatten('#sentence#');
    return status;
}

tweeter();
setInterval(tweeter,1000*60*5);

function tweeter() {

    var tweet = generate() + hashtags;

    T.post('statuses/update', {
        status: tweet
    }, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success: ' + data.text);
        }
    };
}