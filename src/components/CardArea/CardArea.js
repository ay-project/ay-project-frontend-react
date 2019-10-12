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
  generateCardArea = () => {
    const { clickAction, cards, midClickAction, hoverAction } = this.props;
    let board = [];
    console.log(cards);
    if (typeof cards != "number") {
      if (midClickAction !== null) {
        board.push(
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
      for (let i = 0; i < cards.length; i++) {
        board.push(
          <Grid item xs={1}>
            <PlayCard
              clickAction={clickAction}
              index={i}
              selected={cards[i].selected}
              card={cards[i]}
              hoverAction={hoverAction}
            />
          </Grid>
        );
        if (midClickAction !== null) {
          board.push(
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
      for (let i = 0; i < cards; i++) {
        board.push(
          <Grid item xs={1}>
            <PlayCard
              clickAction={() => {}}
              index={i}
              selected={false}
              card={{ img: null }}
              hoverAction={hoverAction}
            />
          </Grid>
        );
      }
    }
    return board;
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
