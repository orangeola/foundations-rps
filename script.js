const writeToLog = document.querySelector('.log');
let playerWin = 0;
let compWin = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(playerWin !== 5 && compWin !== 5)
    {
        game(button.id);
    }
    else
    {
        writeToLog.textContent = results(playerWin, compWin);
    }
  });
});

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
        return "You win! " + playerWin + " against " + compWin;
    } else if(compWin > playerWin){
        return "You lose... " + playerWin + " against " + compWin;
    } else {
        return "Tie! " + playerWin + " against " + compWin;
    }
}

function game(userChoice){

    if(playerWin === 5 || compWin === 5)
    {
        writeToLog = results(playerWin, compWin);
        return;
    }

    let answer = playRound(userChoice, computerPlay());
    console.log(answer);
    writeToLog.textContent = answer;

    if(answer.includes("win")){
        ++playerWin;
    } else if(answer.includes("lose")){
        ++compWin;
    }
}
