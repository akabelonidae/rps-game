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
  //   Win lose implementation
  if (playerSelection === computerSelect) {
    middleText.textContent = 'Draw!';
  } else if (
    (playerSelection === 1 && computerSelect === 2) ||
    (playerSelection === 2 && computerSelect === 3) ||
    (playerSelection === 3 && computerSelect === 1)
  ) {
    computerScore = computerScore + 1;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    middleText.textContent = 'You lost!';
  } else {
    playerScore = playerScore + 1;
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    middleText.textContent = 'You won!';
  }

  //   Implementation of win/lose
  const winLostMessage = function (message, backgroundColor) {
    document.querySelector('#main-section').style.display = 'none';
    document.querySelector('.img-selection').style.display = 'none';
    document.querySelector('.middle-text').style.display = 'none';

    document.querySelector('#title').textContent = message;
    document.querySelector('body').style.backgroundColor = backgroundColor;
  };

  if (playerScore === 3) {
    winLostMessage('You won!', 'green');
  } else if (computerScore === 3) {
    winLostMessage('You lost!', 'red');
  }
};
