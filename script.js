let playerWin = 0;
let computerWin = 0;
function game(){
    for(let i=1; i<=5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        let caseInsensitivePlayerSelection = playerSelection.toUpperCase(); //always take the result and make it uppercase for case insensitivity when rock, paper, scissors game is played
        playRound(caseInsensitivePlayerSelection, getComputerChoice());
    }
    if(playerWin>computerWin){
        console.log(playerWin);
        console.log(computerWin);
        alert("You are the overall winner");
    }
    else if(playerWin==computerWin){
        console.log(playerWin);
        console.log(computerWin);
        alert("You are tied overall")
    }
    else{
        console.log(playerWin);
        console.log(computerWin);
        alert("You are the overall loser");
    }
}
function playRound(playerSelection, computerSelection){                     //Determines the winner of rock, paper, scissors
    if(playerSelection !=="ROCK" && playerSelection !=="PAPER" && playerSelection !=="SCISSORS"){   //Make sure user entered case insensitive rock, paper, or scissors
        console.log("Invalid Selection")
        alert("Invalid Selection");
        return
    }
    else if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
        playerWin++;
        console.log("You Won. "+playerSelection+" beats "+computerSelection);
        return playerWin
    }
    else if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        playerWin++;
        console.log("You Won. "+playerSelection+" beats "+computerSelection);
        return playerWin
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
        playerWin++;
        console.log("You Won. "+playerSelection+" beats "+computerSelection);
        return playerWin
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="ROCK"){
        computerWin++;
        console.log("You Lost. "+computerSelection+" beats "+playerSelection);
        return computerWin
    }
    else if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        computerWin++;
        console.log("You Lost. "+computerSelection+" beats "+playerSelection);
        return computerWin
    }
    else if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
        computerWin++;
        console.log("You Lost. "+computerSelection+" beats "+playerSelection);
        return computerWin
    }
    else{
        console.log("There was a tie. You chose "+playerSelection+". The computer chose "+computerSelection);
        alert("Tie");
        return
    }
}    
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3+1); //Generate random computer choice via a number 1 through 3
    switch(choice){             //Takes the choices from 1 through 3 and ties it to Rock, Paper, or Scissors and returns the new choice
        case 1:
            return "ROCK";
        case 2:
            return "SCISSORS";
        case 3:
            return "PAPER";
    }
}
game();