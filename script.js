function computerPlay()
{
    const moves = ["rock", "paper", "scissors"];
    return moves[random()];
}

function random()
{
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection){
        return "Tie!";
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors'){
                return "You win! Rock beats scissors!";
            } else {
                return "You lose...";
            }
        case 'scissors':
            if (computerSelection === 'paper'){
                return "You win! Scissors beats paper!";
            } else {
                return "You lose...";
            }
        case 'paper':
            if (computerSelection === 'rock'){
                return "You win! Paper beats rock!";
            } else {
                return "You lose...";
            }
        default:    
        return "Try again...";
    }   
}

function results(playerWin, compWin){
    if(playerWin > compWin){
        console.log("You win! " + playerWin + " against " + compWin);
    } else if(compWin > playerWin){
        console.log("You lose... " + playerWin + " against " + compWin);
    } else {
        console.log("Tie! " + playerWin + " against " + compWin);
    }
}

function game(){
    let playerWin = 0;
    let compWin = 0;

    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Enter move");

        if(userChoice === null){
            console.log("You quit.");
            break;
        }

        console.log(userChoice);
        if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
            console.log("Invalid input.");
            i--;
        }

        userChoice = userChoice.toLowerCase();
        let answer = playRound(userChoice, computerPlay());

        console.log(answer);
        if(answer.includes("win")){
            playerWin++;
        } else if(answer.includes("lose")){
            compWin++;
        }
     }
     
     results(playerWin, compWin);
}

game();
