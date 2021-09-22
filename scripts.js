//function to get random computer play from array and return in 'computerSelection' var

function computerPlay() {
	let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
	console.log('The computer chose ' + computerSelection);
	return computerSelection;
}
let possiblePlays = ['rock', 'paper', 'scissors'];

//function to get playerInput and return case insensitive 'playerSelection'

function playerChoice() {
let playerInput = prompt('Type one of three options: rock, paper, scissors', '');
let playerSelection = playerInput.toLowerCase();
	if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
		alert('Invalid input. Refresh page and try again');	
	}
	else {
	console.log('You chose '+ playerSelection);
		return playerSelection;	
	}
}
		

//function to play one round and declare winner of round
function playRound(playerSelection, computerSelection) {
	playerChoice();
	computerPlay();
if ((playerSelection === 'rock' && computerSelection === 'scissors')
|| (playerSelection === 'paper' && computerSelection === 'rock') 
|| (playerSelection === 'scissors' && computerSelection === 'paper')) {
	return 'You win! ' + playerSelection + ' beats ' + computerSelection;
}
//else if (playerSelection === computerSelection) {
	//return "It's a Tie. No winner this round.";
//}
//else {return 'You lose! ' + computerSelection + ' beats ' + playerSelection;}
}		
console.log(playRound());