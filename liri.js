var fs = require('fs');
var random = 'random.txt'

require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2]
var title = process.argv[3]

switch(action) {
case "my-tweets" :
var client = new Twitter({
  consumer_key: 's80V41sRjg0o1ufFD8YK7yAF2',
  consumer_secret: 'vfZMubxXipQIBn5zls1AICpexvlvlcjIieJHMucuhC8YceBnUc',
  access_token_key: '983876719437275136-IEoJLaAk3aIG7ueSwlm0Z7sT1yr1V2N',
  access_token_secret: 'aI8q1eGztw4K77WrLWSdLKNiHHrz00pXJdKSNtYKTBNE2'
});
 
var params = {screen_name: 'twittuhman'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
break;

case "spotify-this-song" :
    spotify.search({ type: 'track', query: title }).then(function(err, response) {
      var artist = response.tracks.items[0].artists[0].name;
      var songName = response.tracks.items[0].artists[0].name;
      var previewURL = response.tracks.items[0].artists[0].preview_url;
      var album = response.tracks.items[0].artists[0].album.name;
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(artist + '\n' + songName + '\n' + previewURL + '\n' + album); 
  })

break;

case "movie-this" :
        var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var title = response.Title;
            var year = response.Year;
            var imdbRating = response.imdbRating;
            var rottenTomatoesRating = response.Ratings.Value[1];
            var country = response.Country;
            var language = response.Language;
            var plot = response.Plot;
            var actors = response.Actors;
            console.log(title + '\n' + year + '\n' + imdbRating + '\n' + rottenTomatoesRating + '\n' + country + '\n' + language + '\n' + plot + '\n' + actors)
        })

        if (title === "") {
            $.ajax({
                url: "https://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy",
                method: "GET"
            }).then(function(response) {
                var title = response.Title;
                var year = response.Year;
                var imdbRating = response.imdbRating;
                var rottenTomatoesRating = response.Ratings.Value[1];
                var country = response.Country;
                var language = response.Language;
                var plot = response.Plot;
                var actors = response.Actors;
                console.log(title + '\n' + year + '\n' + imdbRating + '\n' + rottenTomatoesRating + '\n' + country + '\n' + language + '\n' + plot + '\n' + actors)
        })
        }
break;

case "do-what-it-says" :
function total () {
  fs.readFile(random, 'utf8', function (e, data) {
    if (e) { console.log(e) }

    var title = data.split(',')[1]

    spotify.search({ type: 'track', query: title }).then(function(err, response) {
      var artist = response.tracks.items[0].artists[0].name;
      var songName = response.tracks.items[0].artists[0].name;
      var previewURL = response.tracks.items[0].artists[0].preview_url;
      var album = response.tracks.items[0].artists[0].album.name;
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(artist + '\n' + songName + '\n' + previewURL + '\n' + album); 
  })
})
}
break;
}