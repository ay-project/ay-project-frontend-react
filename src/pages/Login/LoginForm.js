import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    justifyContent: "center"
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    margin: theme.spacing.unit
  }
});

class LoginForm extends Component {
  render() {
    const { onChangeUsername, onChangePwd, onSubmit, classes } = this.props;
    return (
      <Paper className={classes.paper} elevation={1} xs={6}>
        <Grid container spacing={12}>
          <TextField
            id="outlined-email-input"
            label="GamerTag"
            className={classes.textField}
            type="text"
            name="gamer_tag"
            margin="normal"
            variant="outlined"
            onChange={onChangeUsername}
            fullWidth
          />
        </Grid>
        <Grid container spacing={12}>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={onChangePwd}
            fullWidth
          />
        </Grid>
        <Grid container spacing={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onSubmit}
            fullWidth
          >
            Log In
          </Button>
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={8}>
            <Button color="secondary" className={classes.button} size="small">
              Forgot password?
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Button color="secondary" className={classes.button} size="small">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(LoginForm);
