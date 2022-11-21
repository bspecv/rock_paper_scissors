let playerScore = 0
let compScore = 0


const computerPlay = () => {
 const arrOfSelection = ['rock', 'paper', 'scissors'];
 const randomNum = Math.floor(Math.random() * 3);
 const compChoice = arrOfSelection[randomNum];
 return compChoice
}
 
 const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "you and your adversary both picked 'rock' "
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "you and your adversary both picked 'paper' "
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
        return "you and your adversary both picked 'scissors' "
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore ++
        return "you lose!, paper beats rock"
    } else if (playerSelection === 'rock' && computerSelection  === 'scissors') {
        playerScore ++
        return " you win!, rock beats scissors"
    } else if (playerSelection === 'paper' && computerSelection  === 'rock') {
       playerScore ++
        return "you win!, paper beats rock "
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore ++
        return "you loose!, scissors cuts paper"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' ) {
        compScore ++
        return "you loose!, rock beats scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++
        return "you win!, scissors cuts paper"
    } 
} 

const playerSelection = "rock";


const game = () => {
    for (let i = 0; i < 5; i++) {
    const computerSelection  = computerPlay () ;
    const playerSelection = prompt('choose')
   console.log(1,playRound(playerSelection, computerSelection));
    
   }

if (playerScore > compScore) {
    return " you beat your advesary"
 } else if ( playerScore < compScore) {
    return " you advesary wins" 
 } else { 
    return " tie !"
 }
}

console.log(game ());


