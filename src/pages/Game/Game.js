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

class Game extends Component {
  constructor() {
    super();
    this.state = {
      game: new GameData({
        id: 1,
        adversary: new Player({ id: 1, tag: "Livvy", deck: [] }),
        local: new Player({ id: 2, tag: "phil714", deck: [] })
      })
    };
  }

  updateAdvHP = value => {
    console.log("update hp");
    const game = { ...this.state.game };
    game.adversary.hp += value;
    this.setState({ game });
  };

  updateAdvMP = value => {
    console.log("update mp");
    const game = { ...this.state.game };
    game.adversary.mp += value;
    this.setState({ game });
  };

  endTurn = () => {
    console.log("end turn");
    this.updateAdvMP(2);
  };

  updateHand = value => {
    console.log("update hand");
    const game = { ...this.state.game };
    for (var i = 0; i < value; i++) game.adversary.hand.push("");
    this.setState({ game });
  };

  setAdvFaceSelect = () => {
    console.log("clicked adv");
  };

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
