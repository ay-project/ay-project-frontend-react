import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  render() {
    const { token, classes } = this.props;
    return <Grid> <h2>HOME</h2></Grid>;
  }
}

export default withStyles(styles)(Home);
