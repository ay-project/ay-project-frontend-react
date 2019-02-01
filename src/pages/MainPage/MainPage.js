import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {}
});

class MainPage extends Component {
  render() {
    const { onChangeUsername, onChangePwd, onSubmit, classes } = this.props;
    return <Grid />;
  }
}

export default withStyles(styles)(MainPage);
