function getComputerChoice() {
    let choice = ["rock", "scissors", "paper"]
    let number = Math.floor(Math.random() * 3)
    console.log(number)
    console.log(choice[number])
    return choice[number]
};

function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?");
    return playerChoice
};

let computerWin = 0
let playerWin = 0
  
function game() {
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    if (computer == player) {
        console.log(`You are ${player} and computer is ${computer}. It is a tie!!`)
    } else if ((computer == "rock" && player == "scissors") || (computer == "scissors" && player == "paper") || (computer == "paper" && player == "rock")) {
        console.log(`You are ${player} and computer is ${computer}. You lost!!`)
        computerWin += 1
    } else {
        console.log(`You are ${player} and computer is ${computer}. You won!!`)
        playerWin += 1
    }
};

while (playerWin <5 && computerWin <5) {
    game()
    console.log(`Player: ${playerWin} Computer: ${computerWin}`)
    if (playerWin == 5) {
        console.log("you won 5 times.")
    } else if (computerWin == 5) {
        console.log("You lost 5 times.")
    }
}


