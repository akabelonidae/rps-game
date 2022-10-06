const playerSelectRock = document.querySelector('.rock-img');
const playerSelectPaper = document.querySelector('.paper-img');
const playerSelectScissors = document.querySelector('.scissors-img');
const playerFrameImg = document.getElementById('player-img');
const computerFrameImg = document.getElementById('computer-img');
// Function for computer's turn

// Computer's turn implemented (definitely not the cleanest solution)
const computersTurn = function () {
  const computerRandom = Math.trunc(Math.random() * 3) + 1;
  if (computerRandom === 1) {
    computerFrameImg.src = 'img/rock-rotated.png';
    computerFrameImg.style.height = '150px';
  } else if (computerRandom === 2) {
    computerFrameImg.src = 'img/paper-rotated.png';
    computerFrameImg.style.height = '150px';
  } else {
    computerFrameImg.src = 'img/scissors-rotated.png';
    computerFrameImg.style.height = '150px';
  }
};

// Functions for selecting rock paper and scissors

const rockSelected = function () {
  playerFrameImg.src = 'img/rock.png';
  playerFrameImg.style.height = '150px';
  computersTurn();
};

const paperSelected = function () {
  playerFrameImg.src = 'img/paper.png';
  playerFrameImg.style.height = '150px';
  computersTurn();
};

const scissorsSelected = function () {
  playerFrameImg.src = 'img/scissors.png';
  playerFrameImg.style.height = '150px';
  computersTurn();
};

// AEL for rock paper scissors
playerSelectPaper.addEventListener('click', paperSelected);
playerSelectRock.addEventListener('click', rockSelected);
playerSelectScissors.addEventListener('click', scissorsSelected);
