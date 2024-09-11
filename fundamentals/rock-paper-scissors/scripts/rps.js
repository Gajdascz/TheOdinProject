// The Odin Project: Rock Paper Scissors JavaScript Game
// Author: Nolan Gajdascz

// Randomly generate a number within the length of the choices choices array
// and return the value from the randomly generated index of the choices array.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random()*choices.length);
  return choices[computerChoice];
}

// Compare computer and player choice then return the result
function choiceCompare(playerChoice, computerChoice) {
  if(playerChoice == computerChoice){
    return `It's a Tie! You Both Chose ${playerChoice}`; } 
    else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "paper")
    ) { return `You Win! ${playerChoice} beats ${computerChoice}`; }
    else if (
      (computerChoice == "rock" && playerChoice == "scissors") ||
      (computerChoice == "paper" && playerChoice == "rock") ||
      (computerChoice == "scissors" && playerChoice == "paper")
    ) {return `You Lose! ${computerChoice} beats ${playerChoice}`;}
    else { console.log("ERROR! Something wrong in choiceCompare() logic");}
}

// Prepend result of round to round result section of game UI
function displayRoundResult(roundResult) {
  const roundResultContainer = document.querySelector(`.round-results-container`);
  const roundResultString = document.createElement(`div`);
  roundResultString.textContent = roundResult;
  roundResultContainer.prepend(roundResultString);
}

// Tracks player and computer round score, updates game UI, checks the winner, and
// asks if the player would like to start a new game.
function trackRoundScore(roundResult) {
  const playerRoundScore = document.querySelector(`.player-score`);
  const computerRoundScore = document.querySelector(`.computer-score`);
  let playerRoundScoreValue = +(playerRoundScore.textContent);
  let computerRoundScoreValue = +(computerRoundScore.textContent);
  if(roundResult.includes(`You Win!`)){
    playerRoundScoreValue++;
    playerRoundScore.textContent = playerRoundScoreValue;
  } else if (roundResult.includes(`You Lose!`)){
    computerRoundScoreValue++;
    computerRoundScore.textContent = computerRoundScoreValue;
  } else {}
  if (playerRoundScoreValue == 5 || computerRoundScoreValue == 5) { 
    checkWinner(playerRoundScoreValue,computerRoundScoreValue);
    newGame();
  }
}

// Clears round results container, enables players buttons, and calls resetRoundScore()
function newGame() {
  const roundResultContainer = document.querySelector(`.round-results-container`);
  const newGameButton = document.createElement(`button`);
  newGameButton.textContent = `New Game`;
  newGameButton.classList.toggle(`new-game-button`);
  roundResultContainer.prepend(newGameButton);
  newGameButton.addEventListener(`click`, () => {
    let roundResultContainer = document.querySelectorAll(`.round-results-container > *`);
    roundResultContainer.forEach((Node) =>{
      Node.remove();
    });
    playerChoiceButtons.forEach((button) => {
      button.disabled = false;
    });
    resetRoundScore();
  });
}

// Resets player and computer's round score
function resetRoundScore() {
  const playerRoundScore = document.querySelector(`.player-score`);
  const computerRoundScore = document.querySelector(`.computer-score`);
  playerRoundScore.textContent = 0;
  computerRoundScore.textContent = 0;
}

// Append result of game to round result container in game UI
function displayGameResult(gameResult) {
  const roundResultContainer = document.querySelector(`.round-results-container`);
  const gameResultString = document.createElement(`div`);
  gameResultString.textContent = gameResult;
  if(gameResultString.textContent.includes(`Player Wins!`)){
    gameResultString.classList.toggle(`player-wins-game-result`);
  } else if(gameResultString.textContent.includes(`Computer Wins!`)){
    gameResultString.classList.toggle(`computer-wins-game-result`);
  }
  roundResultContainer.prepend(gameResultString);
}

// Checks the winner when there's a score of 5 and passes it to helper function
// displayGameResult() and disables player's buttons.
function checkWinner(playerRoundScoreValue, computerRoundScoreValue) {
  const playerGameScore = document.querySelector(`.player-game-score`);
  const computerGameScore = document.querySelector(`.computer-game-score`);
  let playerGameScoreValue = +(playerGameScore.textContent);
  let computerGameScoreValue = +(computerGameScore.textContent);
  if(playerRoundScoreValue > computerRoundScoreValue) {
    displayGameResult(`Player Wins! \nPlayer Score: ${playerRoundScoreValue} \nComputer Score: ${computerRoundScoreValue}`);
    playerGameScoreValue++;
    playerGameScore.textContent = playerGameScoreValue;
  } else {
    displayGameResult(`Computer Wins! \nPlayer Score: ${playerRoundScoreValue} \nComputer Score: ${computerRoundScoreValue}`);
    computerGameScoreValue++;
    computerGameScore.textContent = computerGameScoreValue;
  }
  let playerChoiceButtons = document.querySelectorAll(`.player-button-container > button`);
  playerChoiceButtons.forEach((button) => {
    button.disabled = true;
  });
}

// get playerChoice from UI button selection and passes value to choiceCompare() which also calls getComputerChoice()
const playerChoiceButtons = document.querySelectorAll(`.player-button-container > button`);
playerChoiceButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    let roundResult = choiceCompare(button.value, getComputerChoice());
    displayRoundResult(roundResult);
    trackRoundScore(roundResult);
  });
});

