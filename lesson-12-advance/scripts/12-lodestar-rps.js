// Upon load, retrieve scores from local storage or use default value. 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Then update scores element accordingly to current score. 
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

updateScoreElement();

// Event listeners for Reset Score and Auto-Play buttons, by KB and Mouse. 
document.body
  .addEventListener('keydown', event => {
    if (event.key === 'a') {
      autoPlay();
    } else if (event.key === 'Backspace') {
      confirmResetScore();
    };
  } );

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  } );

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    confirmResetScore();
  } );

// Set a variable isAutoPlaying indicating whether we are Auto Playing. Default is we are not Auto-Playing. We put this outside of the function because it will run back and forth inside the function. 
let isAutoPlaying;
// When setting up intervals, they actually result in an interval ID to mark which interval this is. (e.g setInterval() >> Interval 1)
let intervalID;

function autoPlay() {
  // If we are not Auto-Playing (!isAutoPlaying), then we turn on setInterval and switch isAutoPlaying to true.
  if (!isAutoPlaying) {
    intervalID = setInterval( () => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },
      1000
    );
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop playing';
  //Else, we stop the interval ID specified as the interval responsible for autoplay. And also turn isAutoPlaying to false. 
  } else {
    clearInterval(intervalID); //clearInterval is a built in function that takes interval ID to stop it. 
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
  };
};

// Confirm Reset and Reset Functions
function confirmResetScore() {
  const confirmResetLm = document.querySelector('.js-confirm-reset');
  confirmResetLm.innerHTML = `
      Are you sure you want to reset the score?
      <button class = "js-confirm"> Yes </button>
      <button class = "js-deny"> No </button>
    `
  document.querySelector('.js-confirm')
    .addEventListener('click', () => {
      resetScore();
      confirmResetLm.innerHTML = '';
    } );

  document.querySelector('.js-deny')
    .addEventListener('click', () => {
      confirmResetLm.innerHTML = '';
    } );
};

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
};


document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  } );

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  } );

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  } );

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  };
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="../assets/${playerMove}-emoji.png" class="move-icon">
<img src="../assets/${computerMove}-emoji.png" class="move-icon">
Computer`;
}


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
};