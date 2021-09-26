//function to get random computer play from array and return in 'computerSelection' var

function getComputerPlay() {
	let computerChoice = 
		possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
	console.log('The computer chose ' + computerChoice);
	return computerChoice;
}
let possiblePlays = ['rock', 'paper', 'scissors'];

//function to get playerInput and return case insensitive 'playerSelection'

function getPlayerChoice() {
let playerInput = prompt('Type one of three options: rock, paper, scissors', '');
let playerPick = playerInput.toLowerCase();
	if (playerPick !== 'rock' &&
		playerPick !== 'paper' &&
		playerPick !== 'scissors') {
			alert('Invalid input. Refresh page and try again');	
	}
	else {
		console.log('You chose '+ playerPick);
		return playerPick;	
	}
}

function playGame() {

{let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;
let score;
	
	//function to play one round and declare winner of round
	let playRound = function(playerSelection, computerSelection) {
		//to avoid "already declared" error in console, wrap in brackets to change scope
		{let playerSelection = getPlayerChoice();
		let computerSelection = getComputerPlay();

		if ((playerSelection === 'rock' && computerSelection === 'scissors')
			|| (playerSelection === 'paper' && computerSelection === 'rock') 
			|| (playerSelection === 'scissors' && computerSelection === 'paper')) {
			console.log('You win this round! ' + playerSelection + ' beats ' + 
				computerSelection);

			return score = 'The score is: \nYou - ' + (++numberOfPlayerWins) +
				', Computer - ' + numberOfComputerWins;
		}

		else if (playerSelection === computerSelection) {
				console.log("It's a tie. No winner this round.");
			return score = 'The score is: \nYou - ' + numberOfPlayerWins +
				', Computer - ' + numberOfComputerWins;
		}
		else {
				console.log('Dang. ' + computerSelection + ' beats ' + playerSelection +
				'. The computer wins this round.')
			return score = 'The score is: \nYou - ' + numberOfPlayerWins +
				', Computer - ' + (++numberOfComputerWins);
	}
}};
//one game = 5 rounds; declare winner
for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
	console.log('ROUND '+ roundNumber);
	console.log(playRound());
}
if (numberOfPlayerWins > numberOfComputerWins) {
		console.log('GAME OVER: You won the game!! Refresh page to play again.')
}
else if (numberOfPlayerWins < numberOfComputerWins) {
		console.log('GAME OVER: You did not win the game :( Refresh page to play again.')
}
else if (numberOfComputerWins == numberOfPlayerWins) {
	console.log('GAME OVER: You tied with the computer! Refresh page to play again.')
}
}}

playGame();
