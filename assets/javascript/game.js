// THINGS TO TRACK


// THINGS TODO
//TODO: randomize gem value every game
//TODO: set a winning score between 19-120
//TODO: reset game on win or loss
//TODO: increase win/loss accordingly
//TODO: when a gem is clicked, increase current score by the gems hidden value


var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var winningPoints = 0;
var currentScore = 0;
var winScore = 0;
var wins = 0;
var loss = 0;


function gemValue() {
    gem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    winningPoints = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    currentScore = 0;
    $("#winningScore").text(winningPoints);
    $("#currentScore").text(currentScore);
    $("#win").text(wins);
    $("#loss").text(loss);

}

gemValue();






$("#gem1").on("click", function () {
    currentScore = gem1 + currentScore;
    $("#currentScore").text(currentScore);

})

$("#gem2").on("click", function () {
    currentScore = gem2 + currentScore;
    $("#currentScore").text(currentScore);
})

$("#gem3").on("click", function () {
    currentScore = gem3 + currentScore;
    $("#currentScore").text(currentScore);
})

$("#gem4").on("click", function () {
    currentScore = gem4 + currentScore;
    $("#currentScore").text(currentScore);
})

$(".gemImg").on("click", function () {
    if (currentScore > winningPoints) {
        loss++;
        console.log(loss);
        gemValue();
    }
    else if (currentScore === winningPoints) {
        wins++;
        gemValue();
    }

})
