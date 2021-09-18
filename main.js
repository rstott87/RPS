let computerPlay = () => 
{
let x = Math.floor(Math.random ()*3);

if (x == 0) 
{
    x = "rock";
}
else if (x == 1) 
{
    x = "paper";
}
else    
{
    x = "scissors";
}
return x;
}

let computerSelection = computerPlay();
let playerSelection = prompt ("Pick rock, paper, or scissors: ".toLowerCase());

let game = (computerSelection, playerSelection) => 
{
    let c = computerSelection;
    let p = playerSelection;
   
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let winner = "You win!"
    let loser = "You lose!"

    if (c == "rock" && p == "scissors")
        { 
        return (loser);
        }
    else if (c == "rock" && p == "paper")
        { 
        return (winner);
        }
     else if (c == "paper" && p == "rock")
        { 
        return (loser);
        }
    else if (c == "paper" && p == "scissors")
        { 
        return (winner);
        }
    else if (c == "scissors" && p == "paper")
        { 
        return (loser);
        }
    else if (c == "scissors" && p == "rock")
        { 
        return (winner);
        }
    else {
        return "It's a tie!";
    }    
    }


    
    console.log (`${game(computerSelection, playerSelection)} The computer chose ${computerSelection} and you chose ${playerSelection} .`);