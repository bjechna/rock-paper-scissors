const play = document.getElementById("play");
const enemyCard = document.querySelector(".enemy-card");
const enemyBackCard = document.querySelector(".back")
const playerCards = Array.prototype.slice.call(document.querySelector(".player-cards-container").children, 0); // Turning collection into array

let playerChoose;
let enemyChoose;
let enemyScore = 0;
let playerScore = 0;

playerCards.forEach(child => {
    child.addEventListener("click", function() {setActive(child)});
});

play.addEventListener("click", showCard);

function showCard() {
    drawEnemyCard();

    enemyCard.style.transform = "rotateY(180deg)";
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