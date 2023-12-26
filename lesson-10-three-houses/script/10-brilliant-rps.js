let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  return computerMove;
}  

function playGame(playerMove) {
  const computerMove = pickComputerMove()
  let result;

  if(playerMove === 'Rock') {
      if (computerMove === 'Rock'){
      result = 'Tie.'
    } else if (computerMove === 'Paper'){
      result = 'You lose.'
    } else if (computerMove === 'Scissors'){
      result = 'You win!'
    }
  } else if (playerMove === 'Paper'){
      if (computerMove === 'Rock'){
      result = 'You win!'
    } else if (computerMove === 'Paper'){
      result = 'Tie.'
    } else if (computerMove === 'Scissors'){
      result = 'You lose.'
    }
  } else if (playerMove === 'Scissors'){
      if (computerMove === 'Rock'){
      result = 'You lose.'
    } else if (computerMove === 'Paper'){
      result = 'You win!'
    } else if (computerMove === 'Scissors'){
      result = 'Tie.'
    }
  };

  if (result === 'You win!') {
    score.wins ++
  } else if (result === 'You lose.') {
    score.losses ++
  } else if (result === 'Tie.') {
    score.ties ++
  };
  localStorage.setItem('score', JSON.stringify (score));

  document.querySelector('.js-moves')
    .innerHTML = 
      `You 
        <img src = "../assets/${playerMove}.png" 
        class = "moves-icon">
        <img src = "../assets/${computerMove}.png"
        class = "moves-icon">
      Computer`;
  document.querySelector('.js-result')
    .innerHTML = `${result}`;
  updateScoreLm();
};

  function updateScoreLm() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
};
