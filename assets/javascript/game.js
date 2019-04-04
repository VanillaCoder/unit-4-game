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
var currentPoints = 0;
var winScore = 0;
var wins = 0;
var wins = 0;


function gemValue(){
    gem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gem4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    currentPoints = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

}

gemValue();
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);
console.log(currentPoints);