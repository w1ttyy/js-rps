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
      return "Tie!";
    }
    if (computerChoice === "paper") {
      return "Computer wins!";
    }
    if (computerChoice === "scissors") {
      return "Human wins!";
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "Human wins!";
    }
    if (computerChoice === "paper") {
      return "Tie!";
    }
    if (computerChoice === "scissors") {
      return "Computer wins!";
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    }
    if (computerChoice === "paper") {
      return "Human wins!";
    }
    if (computerChoice === "scissors") {
      return "Tie!";
    }
  }
}

// function Playgame() {
//   let computerScore = 0;
//   let humanScore = 0;

//   while ((computerScore < 5 && humanScore < 5)) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);

//     if (result === true) {
//       humanScore++;
//     } else if(result === false) {
//       computerScore++;
//     }
//     console.log("Score -> HUMAN: " + humanScore + " Computer: " + computerScore)

//     if(computerScore === 5){
//         console.log("COMPUTER WINS!")
//     } else if(humanScore === 5){
//         console.log("HUMAN WINS!")
//     }
//   }
// }

// Playgame();

body = document.querySelector("body");

const buttonRock = document.createElement("button");
buttonRock.id = "rock";
const buttonPaper = document.createElement("button");
buttonPaper.id = "paper";
const buttonScissors = document.createElement("button");
buttonScissors.id = "scissors";
const resultDiv = document.createElement("div");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";
resultDiv.id = "result";

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);
body.appendChild(resultDiv);

buttonRock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  resultDiv.textContent = playRound("rock", computerChoice);
});
buttonPaper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  resultDiv.textContent = playRound("paper", computerChoice);
});
buttonScissors.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  resultDiv.textContent = playRound("scissors", computerChoice);
});
