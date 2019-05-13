import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Grid } from "@material-ui/core";
import CardPreview from "../CardPreview";

const styles = theme => ({
  root: {},
  cardPreview: {
    marginLeft: "5px"
  }
});

class CardSelectScreen extends Component {
  constructor() {
    super();
  }

  generateCardArea = (board, clickAction, style) => {
    let cards = [];
    for (let i = 0; i < board.length; i++) {
      cards.push(
        <Grid item xs={3}>
          <CardPreview
            clickAction={clickAction}
            index={i}
            selected={board[i].selected}
            card={board[i]}
          />
        </Grid>
      );
    }
    return cards;
  };

  render() {
    const { classes, handleClose, open, cards, clickAction } = this.props;
    return (
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"lg"}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle>Pick cards to swap</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={1}>
              {this.generateCardArea(cards, clickAction, classes.cardPreview)}
            </Grid>
          </DialogContentText>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              fullWidth
              variant="contained"
            >
              Confirm choice
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CardSelectScreen);
