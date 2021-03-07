import React, { Component } from "react";
import LoginContainer from "./containers/LoginContainer";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import { instanceOf } from "prop-types";
import axios from "axios";
import GameContainer from "./containers/GameContainer.js";

axios.defaults.baseURL = "http://172.17.218.145:3002";
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//axios.defaults.headers.post["Content-Type"] = "application/json";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token") || null,
      gameToken: sessionStorage.getItem("gameToken") || null
    };
  }

  getToken = async (username, password) => {
    let res = await axios.post(`/signin`, { username, password });
    if (!res.data.hasOwnProperty("error")) {
      sessionStorage.setItem("token", res.data.token);
      this.setState({ token: res.data.token });
      history.push("/game/home");
    } else {
      console.log("Handle wrong login");
    }
  };

  getGameToken = gameToken => {
    sessionStorage.setItem("gameToken", gameToken);
    this.setState({ gameToken: gameToken });
    //  history.push("/game/play");
  };

  logout = () => {
    sessionStorage.clear();
    this.setState({ token: null, gameToken: null });
  };

  render() {
    console.log("Render App");
    return (
      <Router history={history}>
        <Switch>
          <Route
            component={() => {
              return (
                <LoginContainer
                  onSubmitLogin={this.getToken}
                  token={this.state.token}
                />
              );
            }}
            path="/login"
          />
          <Route
            component={() => {
              return (
                <GameContainer
                  token={this.state.token}
                  logout={this.logout}
                  gameToken={this.state.gameToken}
                  startGame={this.getGameToken}
                />
              );
            }}
            path="/game/*"
          />
          <Route render={() => <Redirect to="/game/home" />} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
