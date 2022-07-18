const CHOICES = ["rock", "paper", "scissor"];
let playerChoice = '';

let playerWins = 0;
let computerWins = 0;

const pageContainer = document.querySelector("#pageContent");
const winnerDiv = document.createElement("div");
//player and comp scores
const scoreDiv = document.createElement("div");
//player and comp current choices
const choices  = document.createElement("p")
pageContainer.appendChild(choices)


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return CHOICES[random];
}

function renderPage() {
    // container div
    const content = document.createElement("div");
    //buttons container
    const buttons = document.createElement("div");
    //render player and computer scores
    const playersScore = document.createElement("p");
    //create 3 choices 
    const btnRock = document.createElement("button");
    btnRock.innerText = "Rock";
    btnRock.addEventListener('click', (e) => setPlayerChoice (e));
    pageContainer.appendChild(btnRock);

    const btnPaper = document.createElement("button");
    btnPaper.innerText = "Paper";
    btnPaper.addEventListener('click', (e) => setPlayerChoice (e));
    pageContainer.appendChild(btnPaper);

    const btnScissor = document.createElement("button");
    btnScissor.innerText = "Scissor";
    btnScissor.addEventListener('click', (e) => setPlayerChoice (e));
    pageContainer.appendChild(btnScissor);
}

function setPlayerChoice(event) {
    let compChoice = getComputerChoice();
    playerChoice = event.target.innerText;
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice)
    console.log(compChoice)
    //render player and computer choices
    choices.innerHTML = `
        Player choice: ${playerChoice}
        <br>Computer chice: ${compChoice}
        `;
    getRoundWinner(playerChoice, compChoice);
    getGlobalWinner();
}

function getRoundWinner(player, computer) {
    let draw = false;
    if (player === computer) draw = true;
    else if (player === "rock") {
        computer === "paper" ? computerWins++ : playerWins++;   
    }
    else if(player === "paper") {
        computer === "scissor" ? computerWins++ : playerWins++;
    }
    else if(player === "scissor") {
        computer === "rock" ? computerWins++ : playerWins++;
    }

    if(draw && computerWins === 0 && playerWins === 0) {
        scoreDiv.innerHTML = "<p>It's a draw</p>"
    } else {
        scoreDiv.innerHTML = `
        Player score: ${playerWins}
        <br>Computer score: ${computerWins}
    `;
    }

    pageContainer.appendChild(scoreDiv);
}

function getGlobalWinner() {
    let winner = "";
    if (playerWins == 5) winner = "Player";
    else if(computerWins == 5) winner = "Computer";
    pageContainer.appendChild(winnerDiv)

    //do we have a winner?
    if(winner !== "") {
        winnerDiv.innerText = `${winner} won the game!`;
        //render new btn to start new game
        const restart = document.createElement("button");
        restart.innerText = "Start New Game";
        restart.addEventListener("click", startNewGame);
        pageContainer.appendChild(restart);
    }
    
}
function startNewGame() {
    playerChoice = '';
    playerWins = 0;
    computerWins = 0;
    //clear the UI
    while(pageContainer.firstChild) {
        pageContainer.removeChild(pageContainer.firstChild);
    }
    renderPage();
}

startNewGame();
