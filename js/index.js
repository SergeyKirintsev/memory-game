import initialCards from "./data.js";
import Card from "./card.js";

const doubleArr = [...initialCards, ...initialCards];
shuffle(doubleArr);

const cardsContainerEl = document.querySelector(".page");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getCard(data) {
  const card = new Card(data, ".template-card");
  return card.generateCard();
}

function renderCard(cardEl) {
  cardsContainerEl.append(cardEl);
}

doubleArr.forEach((element) => {
  renderCard(getCard(element));
});
