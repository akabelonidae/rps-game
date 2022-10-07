// variables for cleaner code
const playerSelectionRock = document.querySelector('.rock-img');
const playerSelectionPaper = document.querySelector('.paper-img');
const playerSelectionScissors = document.querySelector('.scissors-img');
const playerFrameImg = document.querySelector('.player-img');
const computerFrameImg = document.querySelector('.computer-img');

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
  playerFrameImg.src = 'img/blackrock.png';
  computersTurn(playerSelection);
};

const paperSelected = function () {
  playerSelection = 2;
  playerFrameImg.src = 'img/blackpaper.png';
  computersTurn(playerSelection);
};

const scissorsSelected = function () {
  playerSelection = 3;
  playerFrameImg.src = 'img/blackscissors.png';
  computersTurn(playerSelection);
};

// AEL for rock paper scissors
playerSelectionRock.addEventListener('click', rockSelected);
playerSelectionPaper.addEventListener('click', paperSelected);
playerSelectionScissors.addEventListener('click', scissorsSelected);

// Function for computer selection (probably not the cleanest solution)
const computersTurn = function (playerSelection) {
  // Computer's turn
  const computerSelect = Math.trunc(Math.random() * 3 + 1);

  if (computerSelect === 1) {
    computerFrameImg.src = 'img/blackrock-rotated.png';
  } else if (computerSelect === 2) {
    computerFrameImg.src = 'img/blackpaper-rotated.png';
  } else {
    computerFrameImg.src = 'img/blackscissors-rotated.png';
  }

  //   Score implementation

  // Draw
  if (playerSelection === computerSelect) {
    middleText.textContent = 'Draw!';
    middleText.style.color = 'white';
    document.querySelector('.player-score').style.color = 'white';
    document.querySelector('.computer-score').style.color = 'white';

    // Win
  } else if (
    (playerSelection === 1 && computerSelect === 3) ||
    (playerSelection === 2 && computerSelect === 1) ||
    (playerSelection === 3 && computerSelect === 2)
  ) {
    playerScore++;
    playerScoreText.textContent = playerScore;
    middleText.textContent = 'You won!';
    document.querySelector('.player-score').style.color = 'green';
    document.querySelector('.computer-score').style.color = 'white';

    // Lose
  } else {
    computerScore++;
    computerScoreText.textContent = computerScore;
    middleText.textContent = 'You lost!';
    document.querySelector('.computer-score').style.color = 'red';
    document.querySelector('.player-score').style.color = 'white';
  }

  //  Win/lose implementation
  const winLoseMessage = function (message, backgroundColor) {
    document.querySelector('#main-section').style.display = 'none';
    document.querySelector('.img-selection').style.display = 'none';
    document.querySelector('.middle-text').style.display = 'none';

    document.querySelector('#title').textContent = message;
    document.querySelector('#title').style.marginTop = '30vh';
    document.querySelector('#title').style.fontSize = '7rem';

    document.querySelector('body').style.backgroundColor = backgroundColor;
    document.getElementById('play-again').style.display = 'block';
  };

  if (playerScore === 5) {
    winLoseMessage(`You won! ${playerScore} to ${computerScore}`, 'green');
  } else if (computerScore === 5) {
    winLoseMessage(`You lost! ${playerScore} to ${computerScore}`, 'red');
  }
};

// Play again

document.getElementById('play-again').addEventListener('click', function () {
  window.location.reload();
});
