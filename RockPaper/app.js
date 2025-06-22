function getComputerChoice(){
    const RandomNumber = Math.random();
    
    
    if (RandomNumber > 0 && RandomNumber <= 1/3)
    {
        return "rock"
    }    
    else if (RandomNumber > 1/3 && RandomNumber <= 2/3)
    {
        return "paper"
    }
    else if (RandomNumber > 2/3 && RandomNumber <= 1)
    {
        return "scissors"
    }
   
}

function getHumanChoice(){

    let choice = prompt("Your Choice:  ");
    return choice.toLowerCase();

}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice)
    {
        console.log(`It's a tie!! Both chose ${humanChoice}`);
        return;
    }
    const win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

    if(win)
    {
        humanScore++;
    }
    else
    {
        computerScore++;
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++)
    {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(human, computer);
    }

    if (humanScore > computerScore)
    {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore)
    {
        console.log("You Lost the game!!");
    }
    else{
        console.log("Tie!!");
    }
}

playGame();