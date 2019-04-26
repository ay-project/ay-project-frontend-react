import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardArea from "../CardArea";
import { Grid } from "@material-ui/core";
import Deck from "../Deck";

const styles = theme => ({
  root: {
    minHeight: "39vh",
    maxHeight: "39vh",
    backgroundColor: "#E8CA92",
    margin: "0vh 4vh",
    borderRadius: "35px"
  },
  rootGrid: {
    padding: "0px 10px"
  },
  grid: {
    margin: "0vh",
    paddingTop: "15px",
    minHeight: "100%",
    maxHeight: "100%"
  },
  area: {
    margin: "0vh",
    padding: "0vh",
    minHeight: "50%",
    maxHeight: "50%"
  }
});

class PlayArea extends Component {
  render() {
    const {
      classes,
      adversaryBoard,
      adversaryDeck,
      localBoard,
      localDeck,
      adversaryCardSelectAction,
      localCardSelectAction,
      midClickAction
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container className={classes.rootGrid}>
          <Grid container spacing={0} className={classes.area}>
            <Grid item xs className={classes.grid}>
              {" "}
              <CardArea
                cards={adversaryBoard}
                clickAction={adversaryCardSelectAction}
                midClickAction={midClickAction}
              />
            </Grid>
            <Grid item xs={1} className={classes.grid}>
              {" "}
              <Deck cardCount={adversaryDeck} />{" "}
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.area}>
            <Grid item xs className={classes.grid}>
              {" "}
              <CardArea
                cards={localBoard}
                clickAction={localCardSelectAction}
                midClickAction={midClickAction}
              />
            </Grid>
            <Grid item xs={1} className={classes.grid}>
              {" "}
              <Deck cardCount={localDeck} />{" "}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PlayArea);
