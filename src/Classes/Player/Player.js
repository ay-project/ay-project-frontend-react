class Player {
  constructor(data) {
    this.tag = data.tag;
    this.id = data.id;
    this.deck = data.deck;
    this.hand = [];
    this.board = [];
    this.HP = 30;
    this.manapool = 0;
    this.mana = 0;
  }
}

export default Player;
