function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const initialCards = [
  "00.jpg",
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
];

const getArray = () => {
  const firstHalf = [...initialCards];
  const secondHalf = [...initialCards];
  shuffle(firstHalf);
  shuffle(secondHalf);
  return [...firstHalf, ...secondHalf];
};

export { getArray };
