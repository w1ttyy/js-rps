function getComputerChoice() {
  let computer = Math.random();
  if (computer <= 0.33) {
    console.log("Computer chose: Rock");
    return "rock";
  } else if (computer > 0.33 && computer < 0.66) {
    console.log("Computer chose: Paper");
    return "paper";
  } else if (computer >= 0.66) {
    console.log("Computer chose: Scissors");
    return "scissors";
  }
  console.log("Computer chose: Scissors");
}

function getHumanChoice() {
  let human = prompt("Choose between Rock/Paper/Scissors");
  console.log("Human chose: " + human);
  return human.toLowerCase();
}

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Tie!");
      return null;
    }
    if (computerChoice === "paper") {
      console.log("Computer wins! Paper beats Rock.");
      return false;
    }
    if (computerChoice === "scissors") {
      console.log("Human wins! Rock beats Scissors.");
      return true;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Human wins! Paper beats Rock.");
      return true;
    }
    if (computerChoice === "paper") {
      console.log("Tie!");
      return null;
    }
    if (computerChoice === "scissors") {
      console.log("Computer wins! Scissors beats Paper.");
      return false;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer wins! Rock beats Scissors.");
      return false;
    }
    if (computerChoice === "paper") {
      console.log("Human wins!Scissors beats paper.");
      return true;
    }
    if (computerChoice === "scissors") {
      console.log("Tie!");
      return null;
    }
  }
}

function Playgame() {
  let computerScore = 0;
  let humanScore = 0;

  while ((computerScore < 5 && humanScore < 5)) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === true) {
      humanScore++;
    } else if(result === false) {
      computerScore++;
    }
    console.log("Score -> HUMAN: " + humanScore + " Computer: " + computerScore)

    if(computerScore === 5){
        console.log("COMPUTER WINS!")
    } else if(humanScore === 5){
        console.log("HUMAN WINS!")
    }
  }
}

Playgame();
