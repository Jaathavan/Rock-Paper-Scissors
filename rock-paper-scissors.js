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
        const score = document.querySelector('#computerScore');
        let points = Number(score.textContent);
        points++;
        score.textContent = points;
        if (points === 5) {
            return "RIP!!! You lost to the computer!!!"
        }
        else {
            return "You Lose! You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " while the computer selected " + computerSelection + "!"; 
        }
    }
    else {
        const score = document.querySelector('#playerScore');
        let points = Number(score.textContent);
        points++;
        score.textContent = points;
        if (points === 5) {
           return "Congratulations!!! You Won The Game!!!" 
        }
        else {
            return "You Won! You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " while the computer selected " + computerSelection + "!";
        }
    }
}

//function that plays the number of games specified by the user
function game(choice) {
    const results = document.querySelector('#results');
    results.textContent = playRound(choice, computerPlay());
}

const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore.textContent === '5' || computerScore.textContent === '5') {
            button.removeEventListener('click');
        }
        else {
            game(button.id);
        }
    })
});