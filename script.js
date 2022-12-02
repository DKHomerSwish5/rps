let playerSelection = prompt("Choose Rock, Paper, or Scissors");
function playRound(playerSelection, computerSelection){
    
}
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3+1); //Generate random computer choice via a number 1 through 3
    switch(choice){             //Takes the choices from 1 through 3 and ties it to Rock, Paper, or Scissors and returns the new choice
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}
console.log(getComputerChoice()); //Displays on Console the randomly generated computer choice for rock, paper, scissors
