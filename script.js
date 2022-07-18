
const CHOICES = ["rock", "paper", "scissor"]; 

const ENUM = {
    rock: 1,
    paper: 2,
    scissor: 3
}

let userWinsCount = 0;
let computerWinsCount = 0;
let matchNo = 0;

const container = document.querySelector("#title");
const buttons = document.createElement("div");

function addButtons() {
    const rockButton = document.createElement("button");
    rockButton.innerText = "Rock";
    rockButton.addEventListener('click', (e) => playGame(e));

    const paperButton = document.createElement("button");
    paperButton.innerText = "Paper";
    paperButton.addEventListener('click', (e) => playGame(e));

    const scissorButton = document.createElement("button");
    scissorButton.innerText = "Scissor";
    scissorButton.addEventListener('click', (e) => playGame(e));

    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorButton);

    container.appendChild(buttons)
}

const playGame = (event) => {
    let playerChoose = event.target.innerText;
    playerChoose = playerChoose.toLowerCase();
    let computerChoice = getComputerChoice();
    matchNo ++;
    //print on display
    container.appendChild(printChoices(playerChoose, computerChoice, matchNo))
    playRound(playerChoose, computerChoice);
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return CHOICES[random];
}

function printChoices(user, computer, counter) {
    const result = document.createElement("div");
    const choices = document.createElement("p");
    choices.innerHTML = `Match number ${matchNo}: <br>User choice: <b>${user}</b><br>Computer choice: <b>${computer}</b>`;
    result.appendChild(choices);
    return result;
}

function playRound(userChoice, computerChoice) {
    let result = ENUM[userChoice] - ENUM[computerChoice];

    if (result === 1 || result === -2) {
        userWinsCount ++
    } else if (result === 2 || result === -1){
        computerWinsCount++;
    }
    if(userWinsCount == 5) {
        buttons.prepend(printFinalResult("user"));
    }
    else if(computerWinsCount == 5) {
        buttons.prepend(printFinalResult("PC"));
    }
}


function resetGame() {
    userWinsCount = 0;
    computerWinsCount = 0;
    matchNo = 0;
}

function printFinalResult(win) {
    const winner = document.createElement("p");
    winner.innerText = `Winner is ${win}`;
    return winner;
}

//render button choices
addButtons();