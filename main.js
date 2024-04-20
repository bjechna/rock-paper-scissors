const play = document.getElementById("play");
const enemyCard = document.querySelector(".enemy-card");
const enemyBackCard = document.querySelector(".back")
const endScreen = document.getElementById("endscreen");
const info = document.getElementById("info");
const playerCards = Array.prototype.slice.call(document.querySelector(".player-cards-container").children, 0); // Turning collection into array
const enemyStars = Array.prototype.slice.call(document.querySelector(".enemy-stars-container").children, 0);
const playerStars = Array.prototype.slice.call(document.querySelector(".player-stars-container").children, 0);

let playerChoose;
let enemyChoose;
let enemyScore = 0;
let playerScore = 0;
let isActive = true;

playerCards.forEach(child => {
    child.addEventListener("click", function() {setActive(child)});
});

play.addEventListener("click", function() {
    if (playerChoose && isActive) {
        showCard();
    }
});

function showCard() {
    drawEnemyCard();

    if (playerChoose == 'rock' && enemyChoose == 'scissors') {
        playerScore++;
        fillStar('p');
    } else if (playerChoose == 'scissors' && enemyChoose == 'paper') {
        playerScore++;
        fillStar('p');
    } else if (playerChoose == 'paper' && enemyChoose == 'rock') {
        playerScore++;
        fillStar('p');
    } else if (playerChoose == enemyChoose) {
        console.log("Draw");
    } else {
        enemyScore++;
        fillStar('e');
    }

    enemyCard.style.transform = "rotateY(180deg)";
    isActive = false;

    setTimeout(function() {
        enemyCard.style.transform = "rotateY(0deg)";
        isActive = true;
    }, 2000)

    if (enemyScore == 3 || playerScore == 3) endGame();
}

function setActive(item) {
    document.querySelectorAll(".active").forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.toggle("active");
        }
    })

    playerChoose = item.classList[1];
    item.classList.toggle("active");
}

function drawEnemyCard() {
    const options = ['paper', 'scissors', 'rock'];

    enemyChoose = options[Math.floor(Math.random() * 3)];

    enemyBackCard.style.background = `url(img/${enemyChoose}.png)`;
}

function fillStar(side) {
    if (side == 'e') {
        enemyStars[enemyScore-1].classList.toggle('filled');
    } else {
        playerStars[playerScore-1].classList.toggle('filled');
    }
}

function endGame() {
    isActive = false;

    endScreen.style.display = "flex";

    if (playerScore > enemyScore) {
        info.innerHTML = "YOU WON";
        info.style.color = "#1919E2";
    } else {
        info.innerHTML = "YOU LOST";
        info.style.color = "#E21919";
    }
}

function restart() {
    endScreen.style.display = "none";

    playerScore = 0;
    enemyScore = 0;

    playerStars.forEach(element => {
        if (element.classList.contains('filled')) element.classList.toggle('filled');
    })

    enemyStars.forEach(element => {
        if (element.classList.contains('filled')) element.classList.toggle('filled');
    })

    isActive = true;
}