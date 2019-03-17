class Player {
  constructor(data) {
    this.tag = data.tag;
    this.id = data.id;
    this.deck = data.deck;
    this.hand = [];
    this.board = [];
    this.hp = 30;
    this.manapool = 0;
    this.mp = 0;
  }
}

export default Player;
