let humanScore = 0;
let ComputerScore = 0;



function playRound(){
	let humanChoice = getHumanChoice();
	let ComputerChoice = getComputerChoice();
	console.log(humanChoice);
	console.log(ComputerChoice);
	let checkString = String(humanChoice)+ String(ComputerChoice);
	switch(checkString){
		case "rockscissors":{
			alert("Rock beats scissors, Human win");
			humanScore++;
			break;
		}
		case "scissorspaper":{
			alert("Scissors beats paper, Human win");
			humanScore++;
			break;
		}
		case "paperrock":{
			alert("Paper beats rock, Human win");
			humanScore++;
			break;
		}
		case "scissorsrock":{
			alert("Rock beats scissors, Computer win");
			humanScore++;
			break;
		}
		case "paperscissors":{
			alert("Scissors beats paper, Computer win");
			humanScore++;
			break;
		}
		case "rockpaper":{
			alert("Paper beats rock, Computer win");
			humanScore++;
			break;
		}
		case "rockrock":
		case "scissorsscissors":
		case "paperpaper":
		{
			alert("It's draw");
			break;
		}
		case"undefinedrock":
		case"undefinedscissors":
		case"undefinedpaper":{
			alert("Computer wins");
			ComputerScore++;
		}
	}
	
}

function getComputerChoice(){
	let arr = ["rock", "paper", "scissors"];
	return arr[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
	let choice = prompt("Enter your choice: (R)ock, (P)aper or (S)cissors").toLowerCase();
	switch(choice){
		case "rock":
		case "r": 
		{
			return "rock";
			break;
		}
		case "paper":
		case "p":
		{
			return "paper";
			break;
		}
		case "scissors":
		case "s":
		{
			return "scissors";
			break;
		}
		default:
		{
			alert("Wrong choice");
			break;
		}
	}
}

for(let i = 0; i < 5; ++i){
	playRound();
}

if(ComputerScore > humanScore){
	alert("Computer win");
}
else if(ComputerScore < humanScore){
	alert("You win!");
}
else{
	alert("It's draw");
}