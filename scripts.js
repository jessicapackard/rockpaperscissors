//write function called computerPlay:
	//randomly return rock, paper, or scissors
	

function computerPlay(possiblePlays)
{return possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
}
let possiblePlays = ['rock', 'paper', 'scissors'];
//store in random selection in variable called ComputerSelection that can be accessed elsewhere
let computerSelection = computerPlay(possiblePlays);



//write a function that plays a single round of rock paper scissors:
	//take two paramenters - player Selection and computer Selection
function playRound(playerSelection, computerSelection) {
}

	//ask player to select rock paper or scissors - using prompt, store in playerInput
let playerInput = prompt('Type one of these three words: Rock, Paper, Scissors', '');
//make playerInput case-insensitive, store in playerSelection
let playerSelection = playerInput.toLowerCase();

	//take random computerPlay output and put as computer Selection parameter

	
	/*compare computerselection to playerSelection:
	if player selection is rock and computer selection is paper
		or if player selection is paper and computer selection is scissors
		or if player selection is scissors and computer selection is rock
			then print message you lose! <computer selection> beats <player selection>
	if player selection is rock and computer selection is scissors
		or if player selection is paper and computer selection is rock
		or if player selection is scissors and computer selections is paper
			then print message you win! <player selection> beats <computer selection>

	if player selection === computer selection
		then print message it's a tie.	
	return string that declares winner of the round

write function called game
	call previous function inside game function to play a 5 round game that keeps score and reports a winner or loser at the end
	if computer wins, increase computer score by 1
if player wins, increase player score by one
if tie, do not increase either score
after each round, show score
increment after each round until rounds played > 5
if games played is less or equal to 5 show rounds remaining
if rounds played > 5 
	if computer score > player score print message computer wins
	if player score > computer score print message you win */


	

