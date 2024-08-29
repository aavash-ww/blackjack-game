const messageDiv = document.querySelector("#message");
const cardDiv = document.querySelector("#card-div");
const sumDiv = document.querySelector("#sum-div");
const startGameBtn = document.querySelector("#start-game");
const playerDiv = document.querySelector("#player");

let cards = [];
let sum = 0;
message = "";
let hasBlackJack = false;
let isAlive = false;
let player = {
  name: "Aavash",
  chips: 123,
};

playerDiv.textContent += `${player.name}: $${player.chips}`;

//generate random numbers in gameplay
function getRandomCard() {
  let randomNum = Math.ceil(Math.random() * 13);
  if (randomNum === 1) return 11;
  if (randomNum > 10) return 10;
  return randomNum;
}

//start game button
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  renderGame();
  startGameBtn.classList.add("clicked");
  startGameBtn.disabled = true;
}

//check game conditions
function renderGame() {
  cardDiv.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardDiv.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Want to add Card?";
  } else if (sum === 21) {
    message = "You Won!";
    hasBlackJack = true;
  } else {
    message = "You've lost";
    hasBlackJack = false;
  }
  messageDiv.textContent = message;
  sumDiv.textContent = `Cards: ${sum} `;
}

//new card button
function newCard() {
  if (sum >= 21) return null;
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

//event for start game button
startGameBtn.addEventListener("click", startGame);
