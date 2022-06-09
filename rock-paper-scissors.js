//function that picks either rock, paper, or scissors
function computerPlay() {
    let computerChoice;
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        computerChoice = "Rock";
    } else if (num == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

//function that tells who wins
function playRound(playerSelection, computerSelection) {
    let rockRegex = /rock/i;
    let paperRegex = /paper/i;
    let scissorsRegex = /scissors/i;
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie! Both of you selected " + computerSelection + "!";
    }
    else if ((playerSelection.match(rockRegex) && computerSelection.match(paperRegex)) || (playerSelection.match(paperRegex) && computerSelection.match(scissorsRegex)) || (playerSelection.match(scissorsRegex) && computerSelection.match(rockRegex)) ) {
        return "You Lose! You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " while the computer selected " + computerSelection + "!"; 
    }
    else {
        return "You Won! You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " while the computer selected " + computerSelection + "!";
    }
}

//function that plays the number of games specified by the user
function game() {
    let numberOfGames = prompt("Enter the number of games you want to play: ")
    for (let i=0; i < numberOfGames; i++) {
        let player = prompt("Enter your choice of Rock, Paper, or Scissors")
        console.log(playRound(player, computerPlay()));
    }
}


console.log(game());