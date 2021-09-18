let computerPlay = () => 
{
let x = Math.floor(Math.random ()*3);

if (x == 0) 
{
    x = "Rock";
}
else if (x == 1) 
{
    x = "Paper";
}
else    
{
    x = "Scissors";
}
return x;
}