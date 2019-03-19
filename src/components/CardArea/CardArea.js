import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PlayCard from "../PlayCard";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    minHeight: "100%",
    maxHeight: "100%",
    padding: "0vh",
    margin: "0vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class CardArea extends Component {
  generateBoard = (board, clickAction) => {
    let cards = [];
    for (let i = 0; i < board.length; i++) {
      //Inner loop to create children
      cards.push(
        <Grid item xs>
          <PlayCard clickAction={clickAction} index={i} />{" "}
        </Grid>
      );

      //Create the parent and add the children
    }
    return cards;
  };

  render() {
    const { classes, clickAction, cards } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify={"center"}>
          {this.generateBoard(cards, clickAction)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardArea);
