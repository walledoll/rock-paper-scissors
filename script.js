let humanScore = 0;
let ComputerScore = 0;

function playRound(choice) {
  let humanChoice = choice;
  let ComputerChoice = getComputerChoice();
  console.log(humanChoice);
  console.log(ComputerChoice);
  let checkString = String(humanChoice) + String(ComputerChoice);
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  ul.id = "results";
  switch (checkString) {
    case "rockscissors": {
      li.textContent = "Rock beats scissors, Human win";
      humanScore++;
      break;
    }
    case "scissorspaper": {
      li.textContent = "Scissors beats paper, Human win";
      humanScore++;
      break;
    }
    case "paperrock": {
      li.textContent = "Paper beats rock, Human win";
      humanScore++;
      break;
    }
    case "scissorsrock": {
      li.textContent = "Rock beats scissors, Computer win";
      ComputerScore++;
      break;
    }
    case "paperscissors": {
      li.textContent = "Scissors beats paper, Computer win";
      ComputerScore++;
      break;
    }
    case "rockpaper": {
      li.textContent = "Paper beats rock, Computer win";
      ComputerScore++;
      break;
    }
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper": {
      li.textContent = "It's draw";
      break;
    }
  }
  if(document.querySelector("#cong")){
    document.querySelector("#cong").remove();
  }
  if(document.querySelector("#results")){
    document.querySelector("#results").remove();
  }
  
  ul.appendChild(li);
  document.body.append(document.createElement("p"));
  document.body.appendChild(ul);
 
  const score = document.querySelector("p");
  score.textContent = `Current Score: Human(${humanScore}), Computer(${ComputerScore})`;

  const congrats = document.createElement("h2");
  congrats.id = "cong";
  console.log(humanScore);
  if (humanScore === 5) {
    congrats.textContent = "Human win";
    document.body.appendChild(congrats);
    
    humanScore = 0;
    ComputerScore = 0;
  }
  else if(ComputerScore === 5){
    congrats.textContent = "Computer wins";
    document.body.appendChild(congrats);

    humanScore = 0;
    ComputerScore = 0;

  }
  
}

function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}


const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";
rock.addEventListener("click", () => {
  let humanChoice = "rock";
  playRound(humanChoice);
});
paper.addEventListener("click", () => {
  let humanChoice = "paper";
  playRound(humanChoice);
});
scissors.addEventListener("click", () => {
  let humanChoice = "scissors";
  playRound(humanChoice);
});
document.body.append(rock, paper, scissors);

