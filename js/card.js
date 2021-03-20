export default class Card {
  constructor(link) {
    this._link = link;
  }

  _getTemplate() {
    return document
      .querySelector(".template-card")
      .content.querySelector(".flip-card")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imgEl = this._element.querySelector(".img-card");
    this._imgEl.src = `../img/${this._link}`;

    this._inner = this._element.querySelector(".flip-card-inner");
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._inner.addEventListener("click", () => {
      this._inner.classList.add("flip-card_active");
      this._inner.dataset.ingame = true;
    });
  }
}
