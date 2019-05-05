import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import TurnTimer from "../TurnTimer";
import EndTurnSquare from "../EndTurnSquare";
import PlayerAvatar from "../PlayerAvatar";
import CardCounter from "../CardCounter";
import AdversaryStatusBar from "../AdversaryStatusBar";
import HeroPower from "../HeroPower";

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
    margin: "0vh 0vh 2vh 0vh"
  }
});

class BottomStatusBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, faceAction, adversaryHP, adversaryMP } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.toolbar} elevation={0}>
          <Grid container justify="center">
            <Grid item xs={3} style={{ paddingRight: 5 }}>
              <HeroPower clickAction={faceAction} />
            </Grid>
            <Grid item xs={6}>
              <PlayerAvatar clickAction={faceAction} />
            </Grid>
            <Grid item xs />
            <Grid item xs={3} style={{ padding: 15 }}>
              <AdversaryStatusBar mp={adversaryMP} hp={adversaryHP} />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(BottomStatusBar);
