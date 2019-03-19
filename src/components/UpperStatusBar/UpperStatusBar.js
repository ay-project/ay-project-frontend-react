import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import TurnTimer from "../TurnTimer";
import EndTurnSquare from "../EndTurnSquare";
import PlayerAvatar from "../PlayerAvatar";
import CardCounter from "../CardCounter";
import AdversaryStatusBar from "../AdversaryStatusBar";

const styles = theme => ({
  toolbar: {
    minHeight: "16vh",
    maxHeight: "16vh",
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    shadows: ["none"]
  }
});

class UpperStatusBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      classes,
      endTurnAction,
      faceAction,
      adversaryHP,
      adversaryHand,
      adversaryMP
    } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.toolbar} elevation={0}>
          <Grid container spacing={40} justify="center">
            <Grid item xs={2} style={{ padding: 15 }}>
              {" "}
              <AdversaryStatusBar mp={adversaryMP} hp={adversaryHP} />
            </Grid>
            <Grid item xs style={{ padding: 3 }}>
              <CardCounter cardCount={adversaryHand} />
            </Grid>
            <Grid item xs={6} style={{ padding: 3 }}>
              <PlayerAvatar clickAction={faceAction} />
            </Grid>
            <Grid item xs={2} style={{ padding: 3 }}>
              <EndTurnSquare clickAction={endTurnAction} />
            </Grid>
            <Grid item xs style={{ padding: 5 }}>
              <TurnTimer endAction={endTurnAction} time={10} />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(UpperStatusBar);
