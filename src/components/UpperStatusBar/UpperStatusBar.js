import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
import TurnTimer from "../TurnTimer";
import EndTurnSquare from "../EndTurnSquare";
import PlayerAvatar from "../PlayerAvatar";
import CardCounter from "../CardCounter";
import AdversaryStatusBar from "../AdversaryStatusBar";

const styles = theme => ({
  toolbar: {
    minHeight: "15vh",
    maxHeight: "15vh",
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    shadows: ["none"]
  }
});

const iconStyle = { size: 2, color: "black" };

class UpperStatusBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.toolbar} elevation={0}>
          <Grid container spacing={48} justify="center">
            <Grid item xs={2} style={{ padding: 15 }}>
              {" "}
              <AdversaryStatusBar />
            </Grid>
            <Grid item xs style={{ padding: 3 }}>
              <CardCounter />
            </Grid>
            <Grid item xs={6} style={{ padding: 3 }}>
              <PlayerAvatar />
            </Grid>
            <Grid item xs={2} style={{ padding: 3 }}>
              <EndTurnSquare />
            </Grid>
            <Grid item xs style={{ padding: 5 }}>
              <TurnTimer />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(UpperStatusBar);
