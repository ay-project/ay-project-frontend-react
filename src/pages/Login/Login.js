import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import LoginForm from "./LoginForm";

const imgUrl =
  "https://s3.us-east-2.amazonaws.com/ay-dev-assests/general/log-paper.jpg";
const styles = theme => ({
  root: {
    justifyContent: "center",
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "hidden"
  },
  paper: {
    maxWidth: 450,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    margin: theme.spacing.unit
  }
});

class Login extends Component {
  render() {
    const {
      onChangeUsername,
      onChangePwd,
      onSubmit,
      classes,
      className
    } = this.props;

    return (
      <Grid
        className={classNames(classes.root, className)}
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <LoginForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
