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

function game() {
	
	//let playerWins;
	{let numberOfPlayerWins = 0;
	let numberOfComputerWins = 0;
	let score = 'The score is: \nYou - ' + numberOfPlayerWins + ', Computer - ' + numberOfComputerWins;
for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
	console.log('ROUND '+ roundNumber);
	
	if (playRound() === true) {
		numberOfPlayerWins += 1;
		console.log(score);
	}
	else {
		numberOfComputerWins += 1;
		console.log(score);}
	
}

	//console.log('The score is: \nYou - ' + numberOfPlayerWins + ' Computer - ' + numberOfComputerWins);

if (numberOfPlayerWins > numberOfComputerWins) {console.log('You won the game!!')}
else if (numberOfPlayerWins < numberOfComputerWins) {console.log('You did not win the game :(')}}}


//function to play one round and declare winner of round
function playRound(playerSelection, computerSelection) {
	//to avoid "already declared" error in console, wrap in brackets to change scope
	{let playerSelection = playerChoice();
	let computerSelection = computerPlay();
	//let playerWins;
if ((playerSelection === 'rock' && computerSelection === 'scissors')
|| (playerSelection === 'paper' && computerSelection === 'rock') 
|| (playerSelection === 'scissors' && computerSelection === 'paper')) {
	console.log('You win this round!');
	return true;
	}

else if (playerSelection === computerSelection) {
	return "It's a tie. No winner this round.";}

else {
	console.log('Dang. The computer wins this round.')
	return false;
	}
}}

console.log(game());
