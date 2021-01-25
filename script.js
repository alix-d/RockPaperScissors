//initial score values
let userScore = 0;
let compScore = 0;
let compChoice;

//add 1 point for user
function userWon () {
  userScore += 1;
}

//get user score
function getUserScore () {
  return userScore;
}

//add 1 point for computer
function compWon () {
  compScore += 1;
  return compScore;
}

//get computer score
function getCompScore () {
  return compScore;
}

//set computer's choice 
function setCompChoice() {
    let compChoices = ['rock', 'paper', 'scissors'];
    return compChoices[Math.floor(Math.random()*compChoices.length)];
  }

//highlight computer's choice
function highlightCompChoice() {
  if (compChoice =='rock')
    document.getElementById('cc1').classList.add('finalChoice');
  else if (compChoice == 'paper')
    document.getElementById('cc2').classList.add('finalChoice');
  else
    document.getElementById('cc3').classList.add('finalChoice');
}

//display score and result string
function result() {
  document.getElementById('result').style.visibility = 'visible';
  document.getElementById('playerScoreValue').textContent = getUserScore();
  document.getElementById('computerScoreValue').textContent = getCompScore();
}

//game draw
function draw () {
  document.getElementById('result').textContent = 'It\'s a draw!';
  result();
}

//user wins
function win () {
  userWon();
  document.getElementById('result').textContent = 'You won!';
  result();
}

//user loses
function lose() {
  compWon();
  document.getElementById('result').textContent = 'You lose!';
  result();
}

//enable buttons
function enableButtons () {
  document.getElementById('pc1').disabled = false;
  document.getElementById('pc2').disabled = false;
  document.getElementById('pc3').disabled = false;
}

//disable buttons
function disableButtons () {
  document.getElementById('pc1').disabled = true;
  document.getElementById('pc2').disabled = true;
  document.getElementById('pc3').disabled = true;
}

//if user clicks rock
function userClicksRock() {
  compChoice = setCompChoice();
  if (compChoice == 'rock')
    draw();
  else if (compChoice == 'paper')
    lose();
  else
    win();
  highlightCompChoice();
  disableButtons();
}

//if user clicks paper
function userClicksPaper() {
  compChoice = setCompChoice();
  if (compChoice == 'rock')
    win();
  else if (compChoice == 'paper')
    draw();
  else
    lose();
  highlightCompChoice();
  disableButtons();
}

//if user clicks scissors
function userClicksScissors() {
  compChoice = setCompChoice();
  if (compChoice == 'rock')
    lose();
  else if (compChoice == 'paper')
    win();
  else
    draw();
  highlightCompChoice();
  disableButtons();
}

//disable transition
function removeTransition () {
  document.getElementById('cc1').classList.remove('finalChoice');
  document.getElementById('cc2').classList.remove('finalChoice');
  document.getElementById('cc3').classList.remove('finalChoice');
}

//next round
function nextRound() {
  document.getElementById('result').style.visibility = 'hidden';
  removeTransition();
  enableButtons();
}

//reset game
function resetGame() {
  userScore = 0;
  compScore = 0;
  result();
  nextRound();
}