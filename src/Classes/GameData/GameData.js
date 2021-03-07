class Game {
  constructor(gameData) {
    this.gameId = gameData.id;
    this.adversary = gameData.adversary;
    this.local = gameData.local;
    this.gameTimer = 0
  }
}

export default Game;
