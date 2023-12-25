// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display");
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ChoiceDisplay = document.getElementById("player2-choice-display");
const player2ScoreDisplay = document.getElementById("player2-score");

const gameStatusDisplay = document.getElementById("game-status");
const resetGameButton = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");


let player1Score = 0;
let player2Score = 0;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    playGame("rock");
});

paperBtn.addEventListener("click", function () {
    playGame("paper");
});

scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
});

resetGameButton.addEventListener("click", function () {
    resetGame();
});

// Step 4: Define helper functions that will be the actions of the game
function playGame(player1Choice) {
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    player1ChoiceDisplay.textContent = player1Choice;
    player2ChoiceDisplay.textContent = player2Choice;

    if (player1Choice === player2Choice) {
        gameStatusDisplay.textContent = "It's a tie!";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper")
    ) {
        gameStatusDisplay.textContent = "Player 1 wins!";
        player1Score++;
    } else {
        gameStatusDisplay.textContent = "Player 2 wins!";
        player2Score++;
    }

    updateScores();
}

function updateScores() {
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ChoiceDisplay.textContent = "";
    player2ChoiceDisplay.textContent = "";
    gameStatusDisplay.textContent = "Game was reset!";
    updateScores();
}

// I added an autoPlay feature to continuously play games with random options without pressing an option

const autoplayBtn = document.getElementById("autoplay-btn");

let autoplayInterval;
let autoplayInProgress = false;

autoplayBtn.addEventListener("click", function () {
    if (autoplayInProgress) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

function startAutoplay() {
    autoplayInProgress = true;
    autoplayBtn.textContent = "STOP AUTOPLAY";
    autoplayInterval = setInterval(function () {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        playGame(randomChoice);
    }, 1000); 
}

function stopAutoplay() {
    autoplayInProgress = false;
    autoplayBtn.textContent = "CONTINUE AUTOPLAY";
    clearInterval(autoplayInterval);
}

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new wonders in the world of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!
