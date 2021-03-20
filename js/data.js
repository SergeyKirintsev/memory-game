function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const initialCards = [
  "card00.jpg",
  "card01.jpg",
  "card02.jpg",
  "card03.jpg",
  "card04.jpg",
  "card05.jpg",
  "card06.jpg",
  "card07.jpg",
];

const getArray = () => {
  const firstHalf = [...initialCards];
  const secondHalf = [...initialCards];
  shuffle(firstHalf);
  shuffle(secondHalf);
  return [...firstHalf, ...secondHalf];
};

export { getArray };
