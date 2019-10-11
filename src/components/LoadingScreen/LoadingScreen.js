import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    margin: "auto",
    paddingTop: "20%"
  }
});

class LoadingScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
    );
  }
}

export default withStyles(styles)(LoadingScreen);
