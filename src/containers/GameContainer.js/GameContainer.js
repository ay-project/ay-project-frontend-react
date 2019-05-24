import React, { Component } from "react";
import Home from "../../pages/Home";
import { Route, Redirect } from "react-router-dom";
import GameLobby from "../../pages/GameLobby";
import Game from "../../pages/Game";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { username, token } = this.props;

    if (typeof token == "undefined" || !token)
      return <Redirect to={"/login"} />;

    return (
      <div>
        <Route path="/game/home" component={Home} />
        <Route path="/game/lobby" component={GameLobby} />
        <Route path="/game/play" component={Game} />
      </div>
    );
  }
}

export default GameContainer;
