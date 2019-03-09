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

const styles = theme => ({
  toolbar: {
    minHeight: "15vh",
    maxHeight: "15vh",
    background: "#2E3B55",
    justifyContent: "center",
    backgroundSize: "cover",
    overflow: "hidden"
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
        <AppBar position="static" className={classes.toolbar}>
          <Grid container spacing={24}>
            <Grid item xs={2} style={{ backgroundColor: "black" }}>
              {" "}
              <p>Adversary status</p>
            </Grid>
            <Grid item xs={1} style={{ backgroundColor: "cyan" }}>
              {" "}
              <p>Card number</p>
            </Grid>
            <Grid item xs={6} style={{ backgroundColor: "blue" }}>
              {" "}
              <p>Adversary avatar</p>
            </Grid>
            <Grid item xs={2} style={{ backgroundColor: "pink" }}>
              {" "}
              <p>End turn</p>
            </Grid>
            <Grid item xs={1} style={{ padding: 5 }}>
              <TurnTimer />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(UpperStatusBar);
