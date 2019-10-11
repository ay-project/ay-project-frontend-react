import Card from "../Card";

class Player {
  constructor(data) {
    if (!data.hasOwnProperty("tag")) return;
    console.log(data);
    this.tag = data.tag;
    //this.id = data.id;
    this.deck = data.deck;
    this.hand =
      typeof data.hand == "number" ? data.hand : this.createCards(data.hand);
    this.board = [];
    this.hp = 30;
    this.manapool = 0;
    this.mp = 0;
  }

  createCards(cards) {
    let cardList = [];
    for (let i = 0; i < cards.length; i++) {
      cardList.push(new Card(cards[i]));
    }
    return cardList;
  }
}

export default Player;
