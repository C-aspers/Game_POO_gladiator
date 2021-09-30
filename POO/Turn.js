// tour de jeu
class Turn extends Game {
  constructor(turnLeft = game.turnLeft, firstTurn = game.firstTurn) {
    super(turnLeft, firstTurn);
    this.currentTurn = ((firstTurn + 1) - turnLeft)
  }

  startTurn() {
    console.log(`--------Tour n° ${this.currentTurn}--------`)
  }
}
