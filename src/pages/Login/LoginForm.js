import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../../history";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import color_theme from '../../theme'
import CssBaseline from '@material-ui/core/CssBaseline';

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
      <MuiThemeProvider theme={color_theme}>
      <CssBaseline />
        <Paper className={classes.paper} elevation={1} xs={6}>
          <Grid container spacing={12}>
            <TextField
              id="gamertag-input"
              label="GamerTag"
              className={classes.textField}
              type="text"
              name="gamer_tag"
              variant="outlined"
              onChange={onChangeUsername}
              fullWidth
            />
          </Grid>
          <Grid container spacing={12}>
            <TextField
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
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
              <Button
                color="secondary"
                className={classes.button}
                size="small"
                onClick={() => history.push("/forgotpassword")}
              >
                Forgot password?
              </Button>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <Button
                color="secondary"
                className={classes.button}
                size="small"
                onClick={() => history.push("/signup")}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(LoginForm);
