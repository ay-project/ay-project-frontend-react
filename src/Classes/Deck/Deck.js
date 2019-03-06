import Card from "../Card";

class Deck {
  constructor(data) {
    this.id = data.id;
    this.cards = [];
    for (let i = 0; i < data.Cards.length; i++)
      this.cards[i] = new Card(data.Cards[i]);
    this.job = data.Job;
  }
}

export default Deck;
