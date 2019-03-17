import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";

const styles = theme => ({
  root: {
    backgroundColor: "#718792",
    minHeight: "200vh" // Temp
  }
});

let game = new GameData({
  id: 1,
  adversary: new Player({ id: 1, tag: "Livvy", deck: [] }),
  local: new Player({ id: 2, tag: "Phil714", deck: [] })
});

class Game extends Component {
  constructor() {
    super();
    this.state = {
      game: game
    };

    this.updateAdvHP = this.updateAdvHP.bind(this);
    this.updateAdvMP = this.updateAdvMP.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.setAdvFaceSelect = this.setAdvFaceSelect.bind(this);
  }

  updateAdvHP(value) {
    console.log("update hp");
    game.adversary.hp += value;
    this.setGame();
  }

  updateAdvMP(value) {
    console.log("update mp");
    game.adversary.mp += value;
    this.setGame();
  }

  endTurn() {
    console.log("end turn");
  }

  updateHand(value) {
    console.log("update hand");
    for (var i = 0; i < value; i++) game.adversary.hand.push("");
    this.setGame();
  }

  setAdvFaceSelect() {
    console.log("clicked adv");
  }

  setGame() {
    this.setState({
      game: game
    });
  }

  render() {
    const { token, classes } = this.props;
    return (
      <div className={classes.root}>
        <UpperStatusBar
          adversaryHP={this.state.game.adversary.hp}
          adversaryMP={this.state.game.adversary.mp}
          adversaryHand={this.state.game.adversary.hand.length}
          faceAction={this.setAdvFaceSelect}
          endTurnAction={this.endTurn}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Game);
