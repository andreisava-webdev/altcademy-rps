const choices = ["rock", "paper", "scissors"];

var playerScore = 0;
var computerScore = 0;
var maxScore = 0;
var winner = "";
var round = 1;

function getPlayerChoice() {
  const choice = window.prompt("Enter your choice (rock, paper, scissors): ");

  return choice.toLowerCase();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getRoundWinner(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "tie";
    } else if (computerSelection === "paper") {
      return "computer";
    } else {
      return "player";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else if (computerSelection === "paper") {
      return "tie";
    } else {
      return "computer";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "computer";
    } else if (computerSelection === "paper") {
      return "player";
    } else {
      return "tie";
    }
  }

  return "Invalid input!";
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const result = getRoundWinner(playerChoice, computerChoice);

  if (result === "player") {
    playerScore++;
    window.alert(
      `Round ${round} (Player - ${playerChoice}, Computer: ${computerChoice}): Player wins this round! (Player: ${playerScore}, Computer: ${computerScore})`
    );
  } else if (result === "computer") {
    computerScore++;
    window.alert(
      `Round ${round} (Player - ${playerChoice}, Computer: ${computerChoice}): Computer wins this round! (Player: ${playerScore}, Computer: ${computerScore})`
    );
  } else {
    window.alert(
      `Round ${round} (Player - ${playerChoice}, Computer: ${computerChoice}): This round is a draw! Go again! (Player: ${playerScore}, Computer: ${computerScore})`
    );
  }

  checkGameWinner();
}

function checkGameWinner() {
  if (playerScore === maxScore || computerScore === maxScore) {
    winner = playerScore === maxScore ? "Player" : "Computer";
  }
}

function playGame() {
  playerScore = 0;
  computerScore = 0;
  maxScore = 0;
  winner = "";

  var mode = window.prompt(`Select game mode (single or bestof3)`);

  if (mode.toLowerCase() !== "single" && mode.toLowerCase() !== "bestof3") {
    mode = "single";
  }

  mode = mode.toLowerCase();

  if (mode === "single") {
    maxScore = 1;
  } else if (mode === "bestof3") {
    maxScore = 2;
  }

  while (winner === "") {
    playRound();
  }

  window.alert(
    `${winner} wins the game! (Player: ${playerScore}, Computer: ${computerScore})`
  );

  const confirm = window.confirm("Do you want to play again?");

  if (!confirm) {
    return;
  }

  playGame();
}

playGame();
