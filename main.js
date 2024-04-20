const play = document.getElementById("play");
const enemyCard = document.querySelector(".enemy-card");
const playerCards = document.querySelector(".player-cards-container").children;

Array.prototype.slice.call(playerCards, 0 ).forEach(child => {
    child.addEventListener("click", function() {setActive(child)});
});

play.addEventListener("click", showCard);

function showCard() {
    enemyCard.style.transform = "rotateY(180deg)";
}

function setActive(item) {
    item.classList.toggle("active");
}