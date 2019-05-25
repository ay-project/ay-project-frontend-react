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

  startGame = index => {
    this.setState({ startGameDialogOpen: true });
    console.log(`Deck selected ${index}`);
    this.props.startGame();
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
            clickAction={this.startGame}
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
            clickAction={this.startGame}
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
