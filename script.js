console.log("Hello, World!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return choice = "ROCK";
    } else if (choice === 1) {
        return choice = "PAPER";
    } else if (choice === 2) {
        return choice = "SCISSORS";
    }
}

// 0 === ROCK
// 1 === PAPER
// 2 === SCISSORS

function getHumanChoice() {
    let choice = prompt("Choose wisely:\n0 - ROCK\n1 - PAPER\n2 - SCISSORS");
    if (choice === "0") {
        return choice = "ROCK";
    } else if (choice === "1") {
        return choice = "PAPER";
    } else if (choice === "2") {
        return choice = "SCISSORS";
    } else {
        console.log("That's not an option, try again!");
        console.log(getHumanChoice());
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("TIE!");
        humanScore += 1;
        computerScore += 1;
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("WIN!");
        return humanScore += 2;
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER" || humanChoice === "SCISSORS" && computerChoice === "ROCK" || humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("LOSE!");
        return computerScore += 2;
    }
}

function playGame() {
    for (i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("YOUR CHOICE: " + humanSelection);
        console.log("COMPUTER'S CHOICE: " + computerSelection);

        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore) {
        console.log("YOUR SCORE: " + humanScore);
        console.log("COMPUTER'S SCORE: " + computerScore);
        console.log("IT'S A TIE!")
    } else if (humanScore < computerScore) {
        console.log("YOUR SCORE: " + humanScore);
        console.log("COMPUTER'S SCORE: " + computerScore);
        console.log("DEFEAT!");
    } else if (humanScore < computerScore) {
        console.log("YOUR SCORE: " + humanScore);
        console.log("COMPUTER'S SCORE: " + computerScore);
        console.log("VICTORY!");
    }
}

playGame();