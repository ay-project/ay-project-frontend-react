import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";
import PlayArea from "../../components/PlayArea";
import Card from "../../Classes/Card";
import HandArea from "../../components/HandArea";
import BottomStatusBar from "../../components/BottomStatusBar";

const defaultCardData = {
  id: 1,
  name: "ok",
  img: "https://s3.us-east-2.amazonaws.com/ay-dev-assests/cards/phcard.png",
  type: "spell",
  effects: "none",
  specs: {
    cost: 2
  },
  uid: 11
};

const styles = theme => ({
  root: {
    backgroundColor: "#718792",
    minHeight: "100vh"
  }
});

class Game extends Component {
  constructor() {
    super();
    const game = new GameData({
      id: 1,
      adversary: new Player({ id: 1, tag: "Livvy", deck: 4 }),
      local: new Player({ id: 2, tag: "phil714", deck: 12 })
    });
    game.adversary.hand = 3;
    game.adversary.board.push(
      ...[
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData)
      ]
    );
    game.local.board.push(
      ...[
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData)
      ]
    );
    game.local.hand.push(
      ...[
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData),
        new Card(defaultCardData)
      ]
    );
    this.state = {
      game: game,
      currentLocalSelection: false,
      currentAdvSelection: false
    };
  }

  /**Update adversary hp */
  updateAdvHP = value => {
    console.log("update hp");
    const game = { ...this.state.game };
    game.adversary.hp += value;
    this.setState({ game });
  };

  /**Update adversary mp */
  updateAdvMP = value => {
    console.log("update mp");
    const game = { ...this.state.game };
    game.adversary.mp += value;
    this.setState({ game });
  };

  /**End a turn */
  endTurn = () => {
    console.log("end turn");
    this.updateAdvMP(2);
  };

  /** Update adversary hand*/
  updateHand = value => {
    console.log("update hand");
    const game = { ...this.state.game };
    game.adversary.hand1 += value;
    this.setState({ game });
  };

  /**Action when face is targetted */
  setAdvFaceSelect = () => {
    console.log("clicked adv");
  };

  /**Toogle the selected adversary card */
  targetAdversaryCard = cardIndex => {
    console.log("clicked : " + cardIndex);
    const game = { ...this.state.game };
    let currentAdvSelection = this.state.currentAdvSelection;
    let targetState = !game.adversary.board[cardIndex].selected;
    if (currentAdvSelection !== false) {
      game.adversary.board[currentAdvSelection].selected = false;
    }
    game.adversary.board[cardIndex].selected = targetState;
    currentAdvSelection = cardIndex;
    this.setState({ game, currentAdvSelection });
  };

  /**Toogle the selected local card */
  targetLocalCard = cardIndex => {
    console.log("clicked : " + cardIndex);
    const game = { ...this.state.game };
    let currentLocalSelection = this.state.currentLocalSelection;
    let targetState = !game.local.board[cardIndex].selected;
    if (currentLocalSelection !== false) {
      game.local.board[currentLocalSelection].selected = false;
    }
    game.local.board[cardIndex].selected = targetState;
    currentLocalSelection = cardIndex;
    this.setState({ game, currentLocalSelection });
  };

  midClickAction = index => {
    console.log(`clicked in between ${index} and ${index + 1}`);
  };

  handCardSelectAction = cardIndex => {
    console.log("clicked : " + cardIndex);
  };

  render() {
    const { token, classes } = this.props;
    const { game } = this.state;
    return (
      <div className={classes.root}>
        <UpperStatusBar
          adversaryHP={game.adversary.hp}
          adversaryMP={game.adversary.mp}
          adversaryHand={game.adversary.hand}
          faceAction={this.setAdvFaceSelect}
          endTurnAction={this.endTurn}
        />
        <HandArea hand={game.adversary.hand} handSelectAction={null} />
        <PlayArea
          adversaryBoard={game.adversary.board}
          adversaryDeck={game.adversary.deck}
          localBoard={game.local.board}
          localDeck={game.local.deck}
          adversaryCardSelectAction={this.targetAdversaryCard}
          localCardSelectAction={this.targetLocalCard}
          midClickAction={this.midClickAction}
        />
        <HandArea
          hand={game.local.hand}
          handSelectAction={this.handCardSelectAction}
        />
        <BottomStatusBar
          adversaryHP={game.adversary.hp}
          adversaryMP={game.adversary.mp}
          adversaryHand={game.adversary.hand}
          faceAction={this.setAdvFaceSelect}
          endTurnAction={this.endTurn}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Game);
