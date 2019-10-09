import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PlayerAvatar from "../../components/PlayerAvatar";
import {
  AppBar,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  Slide
} from "@material-ui/core";
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
const styles = theme => ({
  root: {},
  row: {
    minHeigh: "16vh",
    maxHeight: "16vh",
    height: "16vh",
    margin: "1vh",
    padding: "1vh"
  },
  bar: {
    height: "5vh"
  },
  textBox: {
    margin: "2vh"
  }
});

class GameLobby extends Component {
  constructor() {
    super();
    this.state = {
      startGameDialogOpen: false,
      decks: []
    };
    this.decks = [];

    this.getDeck();
  }

  handleMatchmakerMessage = data => {
    let result = JSON.parse(data);
    console.log(result);
  };

  sendMessage(message) {
    this.refWebSocket.sendMessage(message);
  }

  matchmakerConnect = index => {
    let connection = new WebSocket("ws://matchmaker:8083");
    this.setState({ startGameDialogOpen: true });
    // listen to onmessage event
    connection.onmessage = evt => {
      const received = JSON.parse(evt.data);
      // Start game once connection is established
      console.log(received);
      if (received.message === "Connection Accepted")
        this.startGame(index, connection);
      else if (received.message.hasOwnProperty("gameToken")) {
        const { onStartGame } = this.props;
        onStartGame(received.message.gameToken);
      }
    };
  };

  startGame = (index, connection) => {
    const { token } = this.props;
    console.log(`Deck selected ${index}`);
    connection.send(
      JSON.stringify({
        token: token,
        deck: 1
      })
    );
  };

  cancelStartGame = () => {
    this.setState({ startGameDialogOpen: false });
  };

  getDeck = () => {
    this.decks = [
      { id: 1, name: "Basic deck", JobId: 1 },
      { id: 1, name: "Basic deck", JobId: 1 },
      { id: 1, name: "Basic deck", JobId: 1 },
      { id: 1, name: "Basic deck", JobId: 1 },
      { id: 1, name: "Basic deck", JobId: 1 },
      { id: 1, name: "Basic deck", JobId: 1 }
    ];
  };

  generateRow = (decks, index) => {
    let grid = [];
    if (decks.length > index) {
      grid.push(
        <Grid item md>
          <PlayerAvatar
            clickAction={this.matchmakerConnect}
            index={index}
            tag={decks[index].name}
          />
        </Grid>
      );
    }
    if (decks.length > index + 1) {
      grid.push(
        <Grid item md>
          <PlayerAvatar
            clickAction={this.matchmakerConnect}
            index={index + 1}
            tag={decks[index + 1].name}
          />
        </Grid>
      );
    }
    return grid;
  };

  render() {
    const { token, classes } = this.props;
    const { startGameDialogOpen } = this.state;
    return (
      <div>
        <div className={classes.textBox}>Select deck to start game with :</div>
        <Grid container>
          <Grid container className={classes.row}>
            {this.generateRow(this.decks, 0)}
          </Grid>
          <Grid container className={classes.row}>
            {this.generateRow(this.decks, 2)}
          </Grid>
          <Grid container className={classes.row}>
            {this.generateRow(this.decks, 4)}
          </Grid>
        </Grid>
        <Dialog
          open={startGameDialogOpen}
          TransitionComponent={Transition}
          disableBackdropClick
          disableEscapeKeyDown
          onClose={this.cancelStartGame}
        >
          <DialogTitle>{"Finding a game ..."}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please wait while we find and connect your opponent
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cancelStartGame} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(GameLobby);
