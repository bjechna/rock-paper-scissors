const play = document.getElementById("play");
const enemyCard = document.querySelector(".enemy-card");
const playerCards = Array.prototype.slice.call(document.querySelector(".player-cards-container").children, 0); // Turning collection into array
let active;

playerCards.forEach(child => {
    child.addEventListener("click", function() {setActive(child)});
});

play.addEventListener("click", showCard);

function showCard() {
    enemyCard.style.transform = "rotateY(180deg)";
}

function setActive(item) {
    document.querySelectorAll(".active").forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.toggle("active");
        }
    })

    item.classList.toggle("active");
    active = item;
}