import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PlayCard from "../PlayCard";
import { Grid, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    minHeight: "100%",
    maxHeight: "100%",
    padding: "0vh",
    margin: "0vh"
  }
});

class CardArea extends Component {
  generateCardArea = (board, clickAction, midClickAction) => {
    let cards = [];
    if (typeof board != "undefined") {
      if (midClickAction !== null) {
        cards.push(
          <Grid item xs>
            <Button
              fullWidth
              style={{ height: "100%" }}
              onClick={() => {
                midClickAction(0);
              }}
            />
          </Grid>
        );
      }
      for (let i = 0; i < board.length; i++) {
        cards.push(
          <Grid item xs={1}>
            <PlayCard
              clickAction={clickAction}
              index={i}
              selected={board[i].selected}
              card={board[i]}
            />
          </Grid>
        );
        if (midClickAction !== null) {
          cards.push(
            <Grid item xs>
              <Button
                fullWidth
                style={{ height: "100%" }}
                onClick={() => {
                  midClickAction(i + 1);
                }}
              />
            </Grid>
          );
        }
      }
    } else {
      for (let i = 0; i < board; i++) {
        cards.push(
          <Grid item xs={1}>
            <PlayCard
              clickAction={() => {}}
              index={i}
              selected={false}
              card={{ img: null }}
            />
          </Grid>
        );
      }
    }
    return cards;
  };

  render() {
    const { classes, clickAction, cards, midClickAction } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify={"center"}>
          {this.generateCardArea(cards, clickAction, midClickAction)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardArea);
