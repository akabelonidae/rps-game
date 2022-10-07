// variables for cleaner code
const playerSelectionRock = document.querySelector('.rock-img');
const playerSelectionPaper = document.querySelector('.paper-img');
const playerSelectionScissors = document.querySelector('.scissors-img');
const playerFrameImg = document.getElementById('player-img');
const computerFrameImg = document.getElementById('computer-img');

const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const middleText = document.querySelector('.middle-text');

// Score variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;

// Functions for selecting rock paper and scissors
const rockSelected = function () {
  playerSelection = 1;
  playerFrameImg.src = 'img/rock.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelection);
};

const paperSelected = function () {
  playerSelection = 2;
  playerFrameImg.src = 'img/paper.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelection);
};

const scissorsSelected = function () {
  playerSelection = 3;

  playerFrameImg.src = 'img/scissors.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelection);
};

// AEL for rock paper scissors
playerSelectionPaper.addEventListener('click', paperSelected);
playerSelectionRock.addEventListener('click', rockSelected);
playerSelectionScissors.addEventListener('click', scissorsSelected);

// Function for computer's turn (definitely not the cleanest solution)
const computersTurn = function (playerSelection) {
  // Computer's turn
  const computerSelect = Math.trunc(Math.random() * 3) + 1;
  if (computerSelect === 1) {
    computerFrameImg.src = 'img/rock-rotated.png';
    computerFrameImg.style.height = '150px';
  } else if (computerSelect === 2) {
    computerFrameImg.src = 'img/paper-rotated.png';
    computerFrameImg.style.height = '150px';
  } else {
    computerFrameImg.src = 'img/scissors-rotated.png';
    computerFrameImg.style.height = '150px';
  }
  //   Score implementation

  // Draw
  if (playerSelection === computerSelect) {
    middleText.textContent = 'Draw!';
    middleText.style.color = 'white';
    document.querySelector('.player-frame').style.border = '10px solid white';
    document.querySelector('.player-score').style.color = 'white';
    document.querySelector('.computer-frame').style.border = '10px solid white';
    document.querySelector('.computer-score').style.color = 'white';

    // Win
  } else if (
    (playerSelection === 1 && computerSelect === 3) ||
    (playerSelection === 2 && computerSelect === 1) ||
    (playerSelection === 3 && computerSelect === 2)
  ) {
    playerScore = playerScore + 1;
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    middleText.textContent = 'You won!';
    middleText.style.color = 'green';
    document.querySelector('.player-frame').style.border = '10px solid green';
    document.querySelector('.player-score').style.color = 'green';
    document.querySelector('.computer-frame').style.border = '10px solid white';
    document.querySelector('.computer-score').style.color = 'white';

    // Lose
  } else {
    computerScore = computerScore + 1;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    middleText.textContent = 'You lost!';
    middleText.style.color = 'red';
    document.querySelector('.player-frame').style.border = '10px solid white';
    document.querySelector('.player-score').style.color = 'white';
    document.querySelector('.computer-frame').style.border = '10px solid red';
    document.querySelector('.computer-score').style.color = 'red';
  }

  //  Win/lose implementation
  const winLostMessage = function (message, backgroundColor) {
    document.querySelector('#main-section').style.display = 'none';
    document.querySelector('.img-selection').style.display = 'none';
    document.querySelector('.middle-text').style.display = 'none';

    document.querySelector('#title').textContent = message;
    document.querySelector('body').style.backgroundColor = backgroundColor;
  };

  if (playerScore === 3) {
    winLostMessage(`You won! ${playerScore} to ${computerScore}`, 'green');
  } else if (computerScore === 3) {
    winLostMessage(`You lost! ${playerScore} to ${computerScore}`, 'red');
  }
};
