import React, { Component } from "react";
import LoginContainer from "./containers/LoginContainer";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameLobby from "./pages/GameLobby";
import { instanceOf } from "prop-types";
import axios from "axios";
import GameContainer from "./containers/GameContainer.js";
import {
  CookiesProvider,
  withCookies,
  useCookies,
  Cookies
} from "react-cookie";

axios.defaults.baseURL = "http://localhost:3001";
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//axios.defaults.headers.post["Content-Type"] = "application/json";

class AppRouter extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      token: cookies.get("token") || null,
      gameToken: cookies.get("gameToken") || null
    };
  }

  getToken = (user, pwd) => {
    axios.post(`/signin`, { username: user, password: pwd }).then(res => {
      if (!res.data.hasOwnProperty("error")) {
        const { cookies } = this.props;
        cookies.set("token", res.data.token, { path: "/" });

        this.setState({ token: res.data.token });

        history.push("/game/home");
      } else {
        console.log("Handle wrong login");
      }
    });
  };

  getGameToken = gameToken => {
    const { cookies } = this.props;
    cookies.set("gameToken", gameToken, { path: "/" });
    this.setState({ gameToken: gameToken });
    history.push("/game/play");
  };

  logout = () => {
    const { cookies } = this.props;
    cookies.remove("token", { path: "/" });

    this.setState({ token: null });
  };

  render() {
    return (
      <CookiesProvider>
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
      </CookiesProvider>
    );
  }
}

export default withCookies(AppRouter);
