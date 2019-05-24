import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import history from "../../history";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  goToLobby = () => {
    history.push("/game/lobby");
  };
  render() {
    const { token, classes } = this.props;
    return (
      <Grid>
        <h2>HOME</h2>
        <Button fullWidth onClick={this.goToLobby} color="secondary">
          To lobby
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
