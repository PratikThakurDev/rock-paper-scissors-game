const roundNumberElement = document.querySelector(".round") ;
const rockButton = document.querySelector('#rock-choice');
const paperButton = document.querySelector('#paper-choice');
const scissorsButton = document.querySelector('#scissors-choice');
const compChoice = document.querySelector('.compChoice') ;
const result = document.querySelector('.result') ;
const roundNumber = document.querySelector('.roundNo');
const humanscore =document.querySelector('.humanScore') ;
const computerscore = document.querySelector('.computerScore')
let currentRound = 1 ;
let humanScore = 0 ;
let computerScore = 0 ;

function updateRoundNumber () {
    const newRoundNo = document.createElement("p");
    newRoundNo.textContent = `${currentRound}`-1 ;
    roundNumber.append(newRoundNo) ;
}

function updateRound(){
    roundNumberElement.textContent = `Round : ${currentRound}`
}

function getComputerChoice(){
    comp_ch=Math.floor(Math.random()*3)
    if (comp_ch===0) {   
        return "rock"
    }
    else if (comp_ch===1){
        return "paper"
    }
    else if (comp_ch===2){
        return "scissors"
    }
}

function updatecomputerScore() {
    const newCompScore = document.createElement("p") ;
    newCompScore.textContent = `${computerScore}` ;
    newCompScore.style.textAlign = "center";
    computerscore.append(newCompScore) ;
}

function updatehumanScore() {
    const newHumanScore = document.createElement("p") ;
    newHumanScore.textContent = `${humanScore}` ;
    newHumanScore.style.textAlign = "center";
    humanscore.append(newHumanScore) ;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice() ;
    compChoice.textContent = `Computer Choice - ${computerChoice}` ;
    let roundResult = '';
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundResult = 'You win this round!';
        humanScore++;
    } else {
        roundResult = 'Computer wins this round!';
        computerScore++;
    }
    result.textContent = `Round Result : ${roundResult}` ;

    currentRound++;
    updateRound()
    updateRoundNumber()
    updatecomputerScore()
    updatehumanScore()

    if (humanScore >= 5 || computerScore >= 5) {
        let winnerMessage = '';
        if (humanScore >= 5) {
            winnerMessage = 'Congratulations! You won the game!';
        } else {
            winnerMessage = 'Game Over! The Computer won!';
        }
        console.log(winnerMessage);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        const winnermessage = document.querySelector(".round") ;
        winnermessage.textContent = winnerMessage ;
    }
    
}

function handleChoiceClick(event) {
    const buttonId = event.currentTarget.id;
    let humanChoice = buttonId.replace('-choice', '');
    playRound(humanChoice) ;
}
rockButton.addEventListener('click', handleChoiceClick);
paperButton.addEventListener('click', handleChoiceClick);
scissorsButton.addEventListener('click', handleChoiceClick);
