// Run this when the button is clicked
$("#button").click(function() {
    // generate random array position for joke
let jokePosition = Math.floor(Math.random() * jokes.length);
// empty html elements first
$("#joke").html("");
$("#answer").html("");
// then populate them with the jokes
$("#joke").html(jokes[jokePosition].joke);
$("#answer").html(jokes[jokePosition].answer);
})
