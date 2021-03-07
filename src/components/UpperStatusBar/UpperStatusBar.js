import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import TurnTimer from "../TurnTimer";
import EndTurnSquare from "../EndTurnSquare";
import PlayerAvatar from "../PlayerAvatar";
import StatusBar from "../StatusBar";

const styles = theme => ({
  toolbar: {
    minHeight: "16vh",
    maxHeight: "16vh",
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    shadows: ["none"],
    padding: "5vh",
    margin: "0vh 0vh 0vh 0vh"
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
      adversaryMP,
      adversaryHPMax,
      adversaryMPMax,
      adversaryTag,
      gameTimer,
      selected
    } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.toolbar} elevation={0}>
          <Grid container justify="center">
            <Grid item xs={3} style={{ padding: 15 }}>
              <StatusBar
                mp={adversaryMP}
                hp={adversaryHP}
                hpMax={adversaryHPMax}
                mpMax={adversaryMPMax}
              />
            </Grid>
            <Grid item xs={6}>
              <PlayerAvatar
                clickAction={faceAction}
                tag={adversaryTag}
                selected={selected}
              />
            </Grid>
            <Grid item xs={2} style={{ padding: 3 }}>
              <EndTurnSquare clickAction={endTurnAction} />
            </Grid>
            <Grid item xs style={{ padding: 5 }}>
              <TurnTimer endAction={endTurnAction} time={gameTimer}/>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(UpperStatusBar);
