// set variables
var goalNumber;
var winsCount = 0;
var lossesCount = 0;
var currentScore;
var crystalBlue;
var crystalGreen;
var crystalPurple;
var crystalRed;

// sets goal number to a number between 19 and 120 and crystals to a random number between 1 and 12
function resetGame() {
    goalNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    crystalBlue = Math.floor(Math.random() * 12 + 1);
    crystalGreen = Math.floor(Math.random() * 12 + 1);
    crystalPurple = Math.floor(Math.random() * 12 + 1);
    crystalRed = Math.floor(Math.random() * 12 + 1);
    currentScore = 0;
    $("#goal-number-span").html(goalNumber);
    $("#current-score").html(currentScore);
}

resetGame();
console.log(goalNumber);
console.log(crystalBlue);

function calculateScore() {
    $("#current-score").html(currentScore);

    if (currentScore === goalNumber) {
        winsCount++;
        alert("You Win!");
        resetGame();
    }

    if (currentScore > goalNumber) {
        lossesCount++;
        alert("You Lose!");
        resetGame();
    }

    $("#wins-count").html(winsCount);
    $("#losses-count").html(lossesCount);
}

$("#blue-gem").on("click", function () {
    currentScore = currentScore + crystalBlue;
    calculateScore();
});

$("#green-gem").on("click", function () {
    currentScore = currentScore + crystalGreen;
    calculateScore();
});

$("#purple-gem").on("click", function () {
    currentScore = currentScore + crystalPurple;
    calculateScore();
});

$("#red-gem").on("click", function () {
    currentScore = currentScore + crystalRed;
    calculateScore();
});