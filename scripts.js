//function to get random computer play from array and return in 'computerSelection' var

function computerPlay() {
	let computerChoice = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
	console.log('The computer chose ' + computerChoice);
	return computerChoice;
}
let possiblePlays = ['rock', 'paper', 'scissors'];

//function to get playerInput and return case insensitive 'playerSelection'

function playerChoice() {
let playerInput = prompt('Type one of three options: rock, paper, scissors', '');
let playerPick = playerInput.toLowerCase();
	if (playerPick !== 'rock' && playerPick !== 'paper' && playerPick !== 'scissors') {
		alert('Invalid input. Refresh page and try again');	
	}
	else {
	console.log('You chose '+ playerPick);
		return playerPick;	
	}
}
		

//function to play one round and declare winner of round
function playRound(playerSelection, computerSelection) {
	//to avoid "already declared" error in console, wrap in brackets to change scope
	{let playerSelection = playerChoice();
	let computerSelection = computerPlay();
		var playerWins = 0;
		var computerWins = 0;
if ((playerSelection === 'rock' && computerSelection === 'scissors')
|| (playerSelection === 'paper' && computerSelection === 'rock') 
|| (playerSelection === 'scissors' && computerSelection === 'paper')) {
	playerWins++;
	return 'You win! ' + playerSelection + ' beats ' + computerSelection + ". The score is: You - " + playerWins + " Computer - " + computerWins;}

else if (playerSelection === computerSelection) {
	return "It's a tie. No winner this round. The score is: You - " + playerWins + " Computer - " + computerWins;}

else {
	computerWins++;
	return 'You lose! ' + computerSelection + ' beats ' + playerSelection + ". The score is: You - " + playerWins + " Computer - " + computerWins;}
}}
console.log(playRound());