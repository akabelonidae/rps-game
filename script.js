// variables for cleaner code
const playerSelectRock = document.querySelector('.rock-img');
const playerSelectPaper = document.querySelector('.paper-img');
const playerSelectScissors = document.querySelector('.scissors-img');
const playerFrameImg = document.getElementById('player-img');
const computerFrameImg = document.getElementById('computer-img');

const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const middleText = document.querySelector('.middle-text');

// Score variables
let playerScore = 0;
let computerScore = 0;
let playerSelect;

// Functions for selecting rock paper and scissors
const rockSelected = function () {
  playerSelect = 1;
  playerFrameImg.src = 'img/rock.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelect);
};

const paperSelected = function () {
  playerSelect = 2;
  playerFrameImg.src = 'img/paper.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelect);
};

const scissorsSelected = function () {
  playerSelect = 3;

  playerFrameImg.src = 'img/scissors.png';
  playerFrameImg.style.height = '150px';
  computersTurn(playerSelect);
};

// AEL for rock paper scissors
playerSelectPaper.addEventListener('click', paperSelected);
playerSelectRock.addEventListener('click', rockSelected);
playerSelectScissors.addEventListener('click', scissorsSelected);

// Function for computer's turn (definitely not the cleanest solution)
const computersTurn = function (playerSelect) {
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
  if (playerSelect === computerSelect) {
    console.log('draw');
    middleText.textContent = 'Draw!';
  } else if (
    (playerSelect === 1 && computerSelect === 2) ||
    (playerSelect === 2 && computerSelect === 3) ||
    (playerSelect === 3 && computerSelect === 1)
  ) {
    console.log('lost');
    computerScore = computerScore + 1;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    middleText.textContent = 'You lost!';
  } else {
    console.log('win');
    playerScore = playerScore + 1;
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    middleText.textContent = 'You won!';
  }

  //   Implementation of win condition
  if (playerScore === 3) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('#title').textContent = 'You won!';
    document.querySelector('.main-section').style.display = 'none';
    document.querySelector('.img-selection').style.display = 'none';
    document.querySelector('.middle-text').style.display = 'none';
  } else if (computerScore === 3) {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('#title').textContent = 'You lost!';
    document.querySelector('.main-section').style.display = 'none';
    document.querySelector('.img-selection').style.display = 'none';
    document.querySelector('.middle-text').style.display = 'none';
  }
};
