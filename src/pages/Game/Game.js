import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GameData from "../../Classes/GameData";
import Player from "../../Classes/Player";
import UpperStatusBar from "../../components/UpperStatusBar";

const styles = theme => ({
  root: {}
});

class Game extends Component {
  render() {
    const { token, classes } = this.props;
    let game = new GameData({
      id: 1,
      adversary: new Player({ id: 1, tag: "Livvy", deck: [] }),
      local: new Player({ id: 2, tag: "Phil714", deck: [] })
    });
    return <UpperStatusBar />;
  }
}

export default withStyles(styles)(Game);
