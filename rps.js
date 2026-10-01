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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      return null;
    }
    if (computerChoice === "paper") {
      return false;
    }
    if (computerChoice === "scissors") {
      return true;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return true;
    }
    if (computerChoice === "paper") {
      return null;
    }
    if (computerChoice === "scissors") {
      return false;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      return false;
    }
    if (computerChoice === "paper") {
      return true;
    }
    if (computerChoice === "scissors") {
      return null;
    }
  }
}

body = document.querySelector("body");

const buttonRock = document.createElement("button");
buttonRock.id = "rock";
const buttonPaper = document.createElement("button");
buttonPaper.id = "paper";
const buttonScissors = document.createElement("button");
buttonScissors.id = "scissors";
const roundResultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";
roundResultDiv.id = "round-result";
scoreDiv.id = "score";

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);
body.appendChild(roundResultDiv);
body.appendChild(scoreDiv);

let humanScore = 0;
let computerScore = 0;

handleClick = (humanChoice) => {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  if (result === true) {
    roundResultDiv.textContent = "Human wins!";
    humanScore++;
  } else if (result === false) {
    roundResultDiv.textContent = "Computer wins!";
    computerScore++;
  } else {
    roundResultDiv.textContent = "It's a tie!";
  }
  scoreDiv.textContent =
    "Score -> HUMAN: " + humanScore + " Computer: " + computerScore;

  if (humanScore === 5) {
    roundResultDiv.textContent = "HUMAN WINS THE GAME!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    roundResultDiv.textContent = "COMPUTER WINS THE GAME!";
    humanScore = 0;
    computerScore = 0;
  }
};

buttonRock.addEventListener("click", () => handleClick("rock"));
buttonPaper.addEventListener("click", () => handleClick("paper"));
buttonScissors.addEventListener("click", () => handleClick("scissors"));