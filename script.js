let playerWin = 0;
let computerWin = 0;
const div = document.createElement('div');
function game(){
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    rock.addEventListener('click', (e) => {
        playRound("ROCK", getComputerChoice());
    });
    paper.addEventListener('click', (e) => {
        playRound("PAPER", getComputerChoice());
    });
    scissors.addEventListener('click', (e) => {
        playRound("SCISSORS", getComputerChoice());
    });
}
function playRound(playerSelection, computerSelection){                     //Determines the winner of rock, paper, scissors
    if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
        playerWin++;
        if(playerWin==5){
                div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
                document.body.appendChild(div);
                playerWin = 0;
                computerWin = 0;
                return;
        }
        else if(computerWin==5){
                div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
                document.body.appendChild(div);
                playerWin = 0;
                computerWin = 0;
                return;
        }        
        div.textContent = "You Won. "+playerSelection+" beats "+computerSelection +'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return playerWin
    }
    else if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        playerWin++;
        if(playerWin==5){
            div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }
        else if(computerWin==5){
            div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }        
        div.textContent = "You Won. "+playerSelection+" beats "+computerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return playerWin
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
        playerWin++;
        if(playerWin==5){
            div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }
        else if(computerWin==5){
            div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }        
        div.textContent = "You Won. "+playerSelection+" beats "+computerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return playerWin
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="ROCK"){
        computerWin++;
        if(playerWin==5){
            div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }
        else if(computerWin==5){
            div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }        
        div.textContent = "You Lost. "+computerSelection+" beats "+playerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return computerWin
    }
    else if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        computerWin++;
        if(playerWin==5){
            div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }
        else if(computerWin==5){
            div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }        
        console.log("You Lost. "+computerSelection+" beats "+playerSelection);
        div.textContent = "You Lost. "+computerSelection+" beats "+playerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return computerWin
    }
    else if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
        computerWin++;
        if(playerWin==5){
            div.textContent = "You won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }
        else if(computerWin==5){
            div.textContent = "The computer won with 5 points"+" SCORE: Player-"+playerWin+" Computer-"+computerWin;;
            document.body.appendChild(div);
            playerWin = 0;
            computerWin = 0;
            return;
        }        
        div.textContent = "You Lost. "+computerSelection+" beats "+playerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
        return computerWin
    }
    else{
        div.textContent = "There was a tie. You chose "+playerSelection+". The computer chose "+computerSelection+'.'+" SCORE: Player-"+playerWin+" Computer-"+computerWin;
        document.body.appendChild(div);
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