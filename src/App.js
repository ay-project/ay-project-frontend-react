import React, { Component } from "react";
import LoginContainer from "./containers/LoginContainer";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameLobby from "./pages/GameLobby";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//axios.defaults.headers.post["Content-Type"] = "application/json";

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };
  }

  getToken = (user, pwd) => {
    axios.post(`/signin`, { username: user, password: pwd }).then(res => {
      console.log(res);
      if (!res.data.hasOwnProperty("error")) {
        this.setState({ token: res.data.token });
        history.push("/game/lobby");
      }
    });
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            path="/"
            exact
            component={() => <LoginContainer onSubmitLogin={this.getToken} />}
          />
          <Route path="/Home/" component={Home} />
          <Route path="/Game/Board" component={Game} />
          <Route path="/Game/Lobby" component={GameLobby} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
