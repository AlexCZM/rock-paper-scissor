
const CHOICES = ["rock", "paper", "scissor"]; 

const ENUM = {
    rock: 1,
    paper: 2,
    scissor: 3
}

let userWinsCount = 0;
let computerWinsCount = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return CHOICES[random];
}
function getUserChoice() {
    let userChoice ;
    while (!CHOICES.includes(userChoice)) {
        userChoice = prompt("Please insert a valid choice: rock, paper, scissor");
        userChoice = userChoice.toLowerCase();
    } 
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    console.log(`User choice: ${userChoice} \nComputer choice: ${computerChoice}`);
    // rock -> scissor -> paper -> again rock
    if(userChoice === computerChoice) {
        return "draw"
    }
    
    let result = ENUM[userChoice] - ENUM[computerChoice];
    console.log("result: ",result)
    if (result === 1) return "User won";
    else if(result === 2) return "Pc won";
    else if(result === -1) return "Pc won";
    else if(result === -2) return "User won";
    else return;
}

/**find the best out of 5 rounds */
function game() {
    for(let round = 0; round < 5; round ++) {
        console.log(`Round ${round}: `)
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        result  = playRound(userChoice, computerChoice)
        console.log(`${result} this round.`);

        if(result === "User won") {
            userWinsCount ++;
        } else if(result === "Pc won") {
            computerWinsCount++;
        }
    }
    if(userWinsCount > computerWinsCount) {
        console.log("User won the GAME");
    } else if(userWinsCount < computerWinsCount) {
        console.log("Pc won the GAME")
    } else console.log("It's a draw")
}

game();