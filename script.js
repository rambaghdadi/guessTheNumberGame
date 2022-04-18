'use strict';
/*
document.querySelector(".number").textContent = "0"
document.querySelector(".score").textContent = "20"
document.querySelector(".guess").value = 20
*/

let randomNumber = Math.floor(Math.random()*20) + 1
let secretNumber = document.querySelector(".number")
let scoreElement = document.querySelector(".score")
let mainMessage = document.querySelector(".message")
let guess = document.querySelector(".guess")
let highScoreElement = document.querySelector(".highscore")

 let score = 20
 let highscore = 0

function displayMainMessage(message) {
    mainMessage.textContent = message
}

let checkButton = document.querySelector(".check")
checkButton.addEventListener("click", function() {
    let myGuess = Number(guess.value)

    if (!myGuess) {
        displayMainMessage("Insert Number")
    } else if (myGuess === randomNumber) {
        displayMainMessage("You Win!")
        secretNumber.textContent = randomNumber
        guess.value = ""
        document.querySelector("body").style.background="green"
        if (score > highscore) {
            highscore = score
            highScoreElement.textContent = highscore
        }
    
    } else if (myGuess !== randomNumber) {
        if (score > 1) {
            mainMessage.textContent = myGuess > randomNumber ? "Guess is too high!" : "Guess is too low"
            score--
            scoreElement.textContent = score
            guess.value = ""
        } else {
            document.querySelector("body").style.background="red"
            displayMainMessage("You lost!")
            scoreElement.textContent = 0
            guess.value = ""
        }
    }
})

let restartButton = document.querySelector("#restart")
restartButton.addEventListener("click", function() {
    document.querySelector("body").style.background="#222"
    mainMessage.textContent = "Start guessing..."
    score = 20
    scoreElement.textContent = score
    guess.value = ""
    secretNumber.textContent = "?"
    randomNumber = Math.floor(Math.random()*20) + 1
})
