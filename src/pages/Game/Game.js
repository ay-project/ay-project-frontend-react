import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";
import PlayArea from "../../components/PlayArea";
import Card from "../../Classes/Card";
import HandArea from "../../components/HandArea";
import BottomStatusBar from "../../components/BottomStatusBar";
import CardSelectScreen from "../../components/CardSelectScreen";

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
        new Card(defaultCardData)
      ]
    );
    this.state = {
      game: game,
      currentLocalSelection: false,
      currentAdvSelection: false,
      currentHandSelection: false,
      swapDialogOpened: true
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

  /**Action when face is targetted */
  setLocalFaceSelect = () => {
    console.log("clicked local");
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
    const game = { ...this.state.game };
    let currentHandSelection = this.state.currentHandSelection;
    let targetState = !game.local.hand[cardIndex].selected;
    if (currentHandSelection !== false) {
      game.local.hand[currentHandSelection].selected = false;
    }
    game.local.hand[cardIndex].selected = targetState;
    currentHandSelection = cardIndex;
    this.setState({ game, currentHandSelection });
  };

  swapCardSelectAction = cardIndex => {
    console.log("clicked : " + cardIndex);
    const game = { ...this.state.game };
    game.local.hand[cardIndex].selected = !game.local.hand[cardIndex].selected;
    this.setState({ game });
  };

  handleSwapCards = () => {
    this.setState({ swapDialogOpened: false });
    const game = { ...this.state.game };
    /// Tempo
    let swaps = [];
    for (let card of game.local.hand) {
      if (card.selected) {
        swaps.push(card.id);
        card.selected = false;
      }
    }
    console.log(`Cards to swap : ${swaps}`);
    //
  };

  render() {
    const { token, classes } = this.props;
    const { game, swapDialogOpened } = this.state;
    return (
      <div className={classes.root}>
        <CardSelectScreen
          open={swapDialogOpened}
          handleClose={this.handleSwapCards}
          cards={game.local.hand}
          clickAction={this.swapCardSelectAction}
        />
        <UpperStatusBar
          adversaryHP={game.adversary.hp}
          adversaryMP={game.adversary.mp}
          adversaryHand={game.adversary.hand}
          adversaryTag={game.adversary.tag}
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
          localHP={game.local.hp}
          localMP={game.local.mp}
          localTag={game.local.tag}
          faceAction={this.setLocalFaceSelect}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Game);
