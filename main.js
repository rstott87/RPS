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
};


let playerSelection = "paper";


let computerTotal = 0; 
let playerTotal = 0;


 let game = (computerSelection, playerSelection) => 
    {   

        let c = computerSelection;
        let p = playerSelection;
       
        let rock = "rock";
        let paper = "paper";
        let scissors = "scissors";
    
        let winner = "You win this round!"
        let loser = "You lose this round!"
        
        if (computerTotal == 5)
        {
            alert("THE COMPUTER HAS WON THE GAME BY WINNING 5 ROUNDS. REFRESH TO PLAY AGAIN")
            return;
        }
        else if (playerTotal == 5)
        {
            alert("YOU HAVE WON THE GAME BY WINNING 5 ROUNDS")
            return;
        }

        if (c == "rock" && p == "scissors")
            { 
            console.log (`Computer total is ${++computerTotal}`);  
            return (loser);
            }
        else if (c == "rock" && p == "paper")
            {
            console.log (`Player total is ${++playerTotal}`);
            return (winner);
            }
         else if (c == "paper" && p == "rock")
            {
            console.log (`Computer total is ${++computerTotal}`); 
            return (loser);
            }
        else if (c == "paper" && p == "scissors")
            {
            console.log (`Player total is ${++playerTotal}`);
            return (winner);
            }
        else if (c == "scissors" && p == "paper")
            {
            console.log (`Computer total is ${computerTotal ++}`);       
            return (loser);
            }
        else if (c == "scissors" && p == "rock")
            {
            console.log (`Player total is ${++playerTotal}`);
            return (winner);
            }
        else {
            return "It's a tie!";
        }    
    };

  

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
    
    computerSelection = computerPlay();
    playerSelection = button.id;
    


    const resultsContainer = document.querySelector('#resultsContainer');
    const resultsDiv = document.createElement('p');

    resultsDiv.classList.add('resultsDiv');
    resultsDiv.textContent = `${game(computerSelection, playerSelection)} The computer chose ${computerSelection} and you chose ${playerSelection}. 
             The current score is YOUR SCORE: ${playerTotal} to COMPUTER SCORE: ${computerTotal}`;
        
    resultsContainer.appendChild(resultsDiv);
    


  });
});

    
    