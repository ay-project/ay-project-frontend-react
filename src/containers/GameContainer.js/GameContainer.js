import React, { Component } from "react";
import Home from "../../pages/Home";
import { Route, Redirect, Switch } from "react-router-dom";
import GameLobby from "../../pages/GameLobby";
import Game from "../../pages/Game";
import { AppBar, Button, Grid, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import history from "../../history";

const styles = theme => ({
  root: {},
  bar: {
    height: "5vh"
  }
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: true
    };
  }

  appBar = () => {
    const { username, classes, logout, gameToken } = this.props;
    if (gameToken == null)
      return (
        <AppBar position="static" className={classes.bar}>
          <Grid container>
            <Grid item xs>
              <Button
                onClick={() => {
                  history.push("/game/home");
                }}
                color="secondary"
              >
                Home
              </Button>
            </Grid>
            <Grid item xs>
              {" "}
              <Button onClick={logout} color="secondary">
                Logout
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      );
    else return <div />;
  };

  render() {
    const { username, token, startGame, gameToken } = this.props;
    const { drawerOpened } = this.state;

    if (typeof token == "undefined" || !token)
      return <Redirect to={"/login"} />;

    return (
      <div>
        {this.appBar()}
        <Switch>
          <Route
            path="/game/home"
            component={() => {
              if (gameToken != null) return <Redirect to={"/game/play"} />;
              return <Home />;
            }}
          />
          <Route
            path="/game/lobby"
            component={() => {
              if (gameToken != null) return <Redirect to={"/game/play"} />;
              return <GameLobby onStartGame={startGame} token={token} />;
            }}
          />
          <Route
            path="/game/play"
            component={() => {
              return <Game token={token} gameToken={gameToken} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(GameContainer);
