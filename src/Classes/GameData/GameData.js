class Game {
  constructor(gameData) {
    this.gameId = gameData.id;
    this.adversary = gameData.adversary;
    this.local = gameData.local;
  }
}

export default Game;
