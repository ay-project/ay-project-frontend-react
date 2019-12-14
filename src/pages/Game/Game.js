import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";
import PlayArea from "../../components/PlayArea";
import HandArea from "../../components/HandArea";
import BottomStatusBar from "../../components/BottomStatusBar";
import CardSelectScreen from "../../components/CardSelectScreen";
import LoadingScreen from "../../components/LoadingScreen";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const styles = theme => ({
  root: {
    backgroundColor: "#718792",
    minHeight: "100vh"
  }
});

class Game extends Component {
  constructor() {
    super();
    this.state = {
      currentLocalSelection: false,
      currentAdvSelection: false,
      currentHandSelection: false,
      swapDialogOpened: true,
      connected: false,
      waitingSwapDialog: false,
      waitingTurnDialog: false,
      previewedCard: null
    };
  }

  gameConnect = (gameToken, connectionToken) => {
    let connection = new WebSocket("ws://main_service:8084");
    this.setState({ connection });
    // listen to onmessage event
    connection.onmessage = evt => {
      const received = JSON.parse(evt.data);
      // Start game once connection is established
      console.log(received);
      if (received.message === "Connection Accepted") {
        connection.send(
          JSON.stringify({
            target: "lobby-manager",
            message: {
              command: "start-game",
              token: connectionToken,
              gameToken: gameToken
            }
          })
        );
      } else if (received.hasOwnProperty("command")) {
        this.routeMessage(received);
      }
    };
  };

  send = message => {
    const { connection, game } = this.state;
    message.gameId = game.gameId;
    message.playerId = game.local.id;
    console.log(message);
    connection.send(
      JSON.stringify({
        target: "game-manager",
        message
      })
    );
  };

  routeMessage = message => {
    console.log("message", message);
    if (message.type === "error" || message.command === "error") {
      // error
      console.log("ERROR " + JSON.stringify(message));
    } else if (message.issuer === "sys") {
      // sys
      console.log("SYS " + message);
    } else if (message.issuer === "authenticator") {
      //
      console.log(message);
    } else if (message.issuer === "matchmaker") {
      // matchmaker
      console.log("MATCHMAKER " + message);
    } else if (message.issuer === "game-manager") {
      console.log(message);
      if (message.command === "init-game") {
        // init
        this.initGame(message.message);
      } else if (message.command === "swap-cards") {
        // swap
      } else if (message.command === "swap-cards-completed") {
        this.setState({ waitingSwapDialog: false });
        // adversary is done swapping
      } else if (message.command === "start-turn") {
        // set up new turn
        this.setState({ waitingTurnDialog: false });
        this.handleStartTurn(message.message);
      } else if (message.command === "start-turn-adversary") {
        // set up new turn adversary
        this.setState({ waitingTurnDialog: true });
        console.log(message.message);
        this.handleStartTurnAdversary(message.message);
      } else if (message.command === "update-game") {
        // update game object
        this.updateGame(message.message);
      } else if (message.command === "update-board") {
        // update boards
        this.updateBoard(message.message);
      } else if (message.command === "update-hp") {
        // update players HP
        this.updateAdvHP(message.message.adversary);
      } else if (message.command === "update-mana") {
        // update players mana
      } else if (message.command === "end-game") {
        // game over
      }
    }
  };

  handleStartTurn = data => {
    const game = { ...this.state.game };
    game.local.mp = data.mana;
    game.local.manapool = data.manapool;
    game.local.deck = data.deck;
    game.local.hand = Player.createCards(data.hand);
    game.local.board = Player.createCards(data.localBoard);
    game.adversary.board = Player.createCards(data.adversaryBoard);
    this.setState({ game });
  };

  handleStartTurnAdversary = data => {
    const game = { ...this.state.game };
    game.adversary.mp = data.mana;
    game.adversary.manapool = data.manapool;
    game.adversary.deck = data.deck;
    game.adversary.hand = data.hand;
    game.local.board = Player.createCards(data.localBoard);
    game.adversary.board = Player.createCards(data.adversaryBoard);
    this.setState({ game });
  };

  updateGame = data => {
    const game = { ...this.state.game };
    game.adversary.mp = data.adversaryMana;
    game.adversary.hp = data.adversaryHP;
    game.adversary.hand = data.adversaryHand;
    game.local.hand = Player.createCards(data.localHand);
    game.local.mp = data.localMana;
    game.local.hp = data.localHP;
    game.local.board = Player.createCards(data.localBoard);
    game.adversary.board = Player.createCards(data.adversaryBoard);
    this.setState({ game });
  };

  /**Update adversary hp */
  updateAdvHP = value => {
    console.log("update hp");
    const game = { ...this.state.game };
    game.adversary.hp = value;
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
    const game = { ...this.state.game };
    this.send({
      command: "end-turn"
    });
  };

  /** Update adversary hand*/
  updateHand = value => {
    console.log("update hand");
    const game = { ...this.state.game };
    game.adversary.hand1 += value;
    this.setState({ game });
  };

  updateBoard = data => {
    const game = { ...this.state.game };
    game.local.board = Player.createCards(data.local);
    game.adversary.board = Player.createCards(data.adversary);
    this.setState({ game });
  };

  /**Action when face is targetted */
  setAdvFaceSelect = () => {
    const game = { ...this.state.game };
    let currentAdvSelection = this.state.currentAdvSelection;
    let targetState = !game.adversary.selected;
    if (currentAdvSelection !== false && currentAdvSelection !== -1) {
      game.adversary.board[currentAdvSelection].selected = false;
    }
    game.adversary.selected = targetState;
    if (targetState) currentAdvSelection = -1;
    else currentAdvSelection = false;
    this.setState({ game, currentAdvSelection });
    this.handleAttack(currentAdvSelection, this.state.currentLocalSelection);
  };

  /**Action when face is targetted */
  setLocalFaceSelect = () => {
    console.log("clicked local");
  };

  /**Toogle the selected adversary card */
  targetAdversaryCard = cardIndex => {
    const game = { ...this.state.game };
    let currentAdvSelection = this.state.currentAdvSelection;
    let targetState = !game.adversary.board[cardIndex].selected;
    if (currentAdvSelection === -1) game.adversary.selected = false;
    else if (currentAdvSelection !== false) {
      game.adversary.board[currentAdvSelection].selected = false;
    }
    game.adversary.board[cardIndex].selected = targetState;
    if (targetState) currentAdvSelection = cardIndex;
    else currentAdvSelection = false;
    this.setState({ game, currentAdvSelection });
    this.handleAttack(currentAdvSelection, this.state.currentLocalSelection);
  };

  /**Toogle the selected local card */
  targetLocalCard = cardIndex => {
    const game = { ...this.state.game };
    let currentLocalSelection = this.state.currentLocalSelection;
    let targetState = !game.local.board[cardIndex].selected;
    if (currentLocalSelection !== false) {
      game.local.board[currentLocalSelection].selected = false;
    }
    game.local.board[cardIndex].selected = targetState;
    if (targetState) currentLocalSelection = cardIndex;
    else currentLocalSelection = false;
    this.setState({ game, currentLocalSelection });
    this.handleAttack(this.state.currentAdvSelection, currentLocalSelection);
  };

  // command: partials[0],
  // gameId: game.gameId,
  // playerId: currentPlayer.id,
  // defender: defender,
  // attacker: attacker

  midClickAction = index => {
    console.log(`clicked in between ${index} and ${index + 1}`);
    const {
      currentHandSelection,
      game,
      currentAdvSelection,
      currentLocalSelection
    } = this.state;
    let defender = 0;
    console.log(currentAdvSelection);
    console.log(currentLocalSelection);
    if (currentHandSelection !== false) {
      if (currentAdvSelection === -1) defender = -1;
      else if (currentAdvSelection !== false)
        defender = game.adversary.board[currentAdvSelection].id;
      else if (currentLocalSelection !== false)
        defender = game.local.board[currentLocalSelection].id;
      this.send({
        command: "play-card",
        card: game.local.hand[currentHandSelection].id,
        index,
        defender
      });
      this.setState({
        currentAdvSelection: false,
        currentLocalSelection: false
      });
    }
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
    if (targetState) currentHandSelection = cardIndex;
    else currentHandSelection = false;
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
    let swaps = [];
    for (let card of game.local.hand) {
      if (card.selected) {
        swaps.push(card.id);
        card.selected = false;
      }
    }
    console.log(`Cards to swap : ${swaps}`);
    this.send({
      command: "swap-cards",
      gameId: game.gameId,
      playerId: game.local.id,
      swaps: swaps
    });
    this.setState({ waitingSwapDialog: true });
  };

  handleAttack = (currentAdvSelection, currentLocalSelection) => {
    console.log(
      "handleAttack",
      "currentAdvSelection",
      currentAdvSelection,
      "currentLocalSelection",
      currentLocalSelection
    );
    const { game } = this.state;
    if (
      currentAdvSelection !== false &&
      currentLocalSelection !== false &&
      currentLocalSelection !== -1
    ) {
      const defender =
        currentAdvSelection !== -1
          ? game.adversary.board[currentAdvSelection].uid
          : -1;
      const attacker = game.local.board[currentLocalSelection].uid;
      this.send({
        command: "attack",
        attacker,
        defender
      });
      this.setState({
        currentAdvSelection: false,
        currentLocalSelection: false
      });
    }
  };

  updatePreview = previewedCard => {
    this.setState({ previewedCard });
  };

  initGame = gameSettings => {
    let game = new GameData({
      id: gameSettings.id,
      adversary: new Player(gameSettings.adversary),
      local: new Player(gameSettings.local)
    });
    this.setState({ game: game });
    this.setState({ connected: true });
  };

  componentDidMount() {
    const { token, gameToken } = this.props;
    this.gameConnect(gameToken, token);
  }

  render() {
    console.log("Render game");
    const { classes } = this.props;
    const {
      game,
      swapDialogOpened,
      connected,
      waitingSwapDialog,
      waitingTurnDialog,
      previewedCard
    } = this.state;
    if (!connected || typeof game == "undefined") return <LoadingScreen />;
    else
      return (
        <div className={classes.root}>
          <CardSelectScreen
            open={swapDialogOpened}
            handleClose={this.handleSwapCards}
            cards={game.local.hand}
            clickAction={this.swapCardSelectAction}
          />
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={waitingSwapDialog}
          >
            Please wait for the other player ...
          </Dialog>
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={waitingTurnDialog}
          ></Dialog>
          <UpperStatusBar
            adversaryHP={game.adversary.hp}
            adversaryMP={game.adversary.mp}
            adversaryHPMax={30}
            adversaryMPMax={game.adversary.manapool}
            adversaryHand={game.adversary.hand}
            adversaryTag={game.adversary.tag}
            faceAction={this.setAdvFaceSelect}
            endTurnAction={this.endTurn}
            selected={game.adversary.selected}
          />
          <HandArea
            hand={game.adversary.hand}
            handSelectAction={null}
            hoverAction={() => {}}
          />
          <PlayArea
            adversaryBoard={game.adversary.board}
            adversaryDeck={game.adversary.deck}
            localBoard={game.local.board}
            localDeck={game.local.deck}
            adversaryCardSelectAction={this.targetAdversaryCard}
            localCardSelectAction={this.targetLocalCard}
            midClickAction={this.midClickAction}
            hoverAction={this.updatePreview}
            previewedCard={previewedCard}
          />
          <HandArea
            hand={game.local.hand}
            handSelectAction={this.handCardSelectAction}
            hoverAction={this.updatePreview}
          />
          <BottomStatusBar
            localHP={game.local.hp}
            localMP={game.local.mp}
            localHPMax={30}
            localMPMax={game.local.manapool}
            localTag={game.local.tag}
            faceAction={this.setLocalFaceSelect}
            selected={game.local.selected}
          />
        </div>
      );
  }
}

export default withStyles(styles)(Game);
