const user = document.getElementById("user");
const computer = document.getElementById("computer");
const results = document.getElementById("result");
const moves = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

moves.forEach(move => move.addEventListener("click", (event) => {
    userChoice = event.target.id;
    user.innerHTML = userChoice;
    generateComputerChoice();
    gameResults();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"
    }
    computer.innerHTML = computerChoice;
}

function gameResults(){
    if(computerChoice === userChoice){
        result = "Tie!";
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!"
    }
    else if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lose!"
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You Lose!"
    }
    else if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You Win!"
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        result = "You Lose!"
    }
    else if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win!"
    }
    results.innerHTML = result;
}