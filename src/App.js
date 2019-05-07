import React, { Component } from "react";
import LoginContainer from "./containers/LoginContainer";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameLobby from "./pages/GameLobby";

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };
  }

  getToken = (user, pwd) => {
    setTimeout(() => {
      this.setState({ token: `user: ${user}, pwd: ${pwd}` });
      console.log(this.state.token);
    }, 1000);
    history.push("/game/lobby");
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
