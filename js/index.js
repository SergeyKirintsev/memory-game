import { getArray } from "./data.js";
import Card from "./card.js";

const cardsArr = getArray();
const cardsContainerEl = document.querySelector(".cards");
const startGameBtn = document.querySelector(".header__btn_type_start");
const createCardsBtn = document.querySelector(".header__btn_type_create");

startGameBtn.addEventListener("click", startGame);
createCardsBtn.addEventListener("click", createGame);
cardsContainerEl.addEventListener("click", checkGame);

function checkGame() {
  const activeCards = document.querySelectorAll("[data-ingame=true]");
  if (activeCards.length === 2) {
    const firstCardSrc = activeCards[0].querySelector(".img-card").src;
    const secondCardSrc = activeCards[1].querySelector(".img-card").src;
    if (firstCardSrc === secondCardSrc) {
      setTimeout(() => {
        activeCards.forEach((el) => {
          el.dataset.ingame = false;
          const cardEl = el.closest(".flip-card");
          cardEl.classList.add("flip-card_disabled");
        });
      }, 1400);
    } else {
      setTimeout(() => {
        activeCards.forEach((el) => {
          el.classList.remove("flip-card_active");
          el.dataset.ingame = false;
        });
      }, 1200);
    }
  } else {
  }
}

function createGame() {
  cardsContainerEl.textContent = "";
  const cardsArr = getArray();
  cardsArr.forEach((element) => {
    renderCard(getCard(element));
  });
  setTimeout(() => showCards(), 0);
}

function showCards() {
  const cardsList = document.querySelectorAll(".flip-card");
  cardsList.forEach((cardEl) => {
    const inner = cardEl.querySelector(".flip-card-inner");
    inner.classList.add("flip-card_active");
  });
}

function hideCards() {
  const cardsList = document.querySelectorAll(".flip-card");
  cardsList.forEach((cardEl) => {
    const inner = cardEl.querySelector(".flip-card-inner");
    inner.classList.remove("flip-card_active");
  });
}

function startGame() {
  hideCards();
}

function getCard(data) {
  const card = new Card(data, ".template-card");
  return card.generateCard();
}

function renderCard(cardEl) {
  cardsContainerEl.append(cardEl);
}

cardsArr.forEach((element) => {
  renderCard(getCard(element));
});
