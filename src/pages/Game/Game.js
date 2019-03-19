import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";
import PlayArea from "../../components/PlayArea";

const styles = theme => ({
  root: {
    backgroundColor: "#718792",
    minHeight: "200vh" // Temp
  }
});

class Game extends Component {
  constructor() {
    super();
    const game = new GameData({
      id: 1,
      adversary: new Player({ id: 1, tag: "Livvy", deck: 11 }),
      local: new Player({ id: 2, tag: "phil714", deck: 12 })
    });
    game.adversary.board.push(...["asd", "asd", "asd"]);
    game.local.board.push(
      ...["asd", "asd", "asd", "asdasd", "asdasd", "asdasd"]
    );
    this.state = {
      game: game
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

  targetAdversaryCard = cardIndex => {
    console.log("clicked : " + cardIndex);
  };

  targetLocalCard = cardIndex => {
    console.log("clicked : " + cardIndex);
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
        <PlayArea
          adversaryBoard={this.state.game.adversary.board}
          adversaryDeck={this.state.game.adversary.deck}
          localBoard={this.state.game.local.board}
          localDeck={this.state.game.local.deck}
          adversaryCardSelectAction={this.targetAdversaryCard}
          localCardSelectAction={this.targetLocalCard}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Game);
