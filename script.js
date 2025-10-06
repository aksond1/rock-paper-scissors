function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  } else {
    return "Error";
  }
}

function getHumanChoice() {
  let input = prompt("Make your choice: ").toLowerCase();
  if (input === "rock") {
    return "rock";
  } else if (input === "paper") {
    return "paper";
  } else if (input === "scissors") {
    return "scissors";
  } else {
    return "Error";
  }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Computer lose! Paper beats Rock");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Human lose! Paper beats Rock");
    computerScore++;
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Human lose! Rock beats Scissors");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Computer lose! Rock beats Scissors");
    humanScore++;
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Human lose! Scissors beats Paper");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Computer lose! Scissors beats Paper");
    humanScore++;
  }

  if (humanChoice === computerChoice) {
    console.log("Hmm, it's a draw");
  }
}

function playGame() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log("Computer choice was: " + computerChoice);
  console.log("Human choice was: " + humanChoice);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log("Computer choice was: " + computerChoice);
  console.log("Human choice was: " + humanChoice);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log("Computer choice was: " + computerChoice);
  console.log("Human choice was: " + humanChoice);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log("Computer choice was: " + computerChoice);
  console.log("Human choice was: " + humanChoice);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log("Computer choice was: " + computerChoice);
  console.log("Human choice was: " + humanChoice);

  console.log("Final score:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
}

playGame();
