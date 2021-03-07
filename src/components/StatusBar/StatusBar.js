import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import StatusGauge from "../StatusGauge";

const styles = theme => ({
  root: {}
});

class StatusBar extends Component {
  render() {
    const { classes, hp, mp, hpMax, mpMax } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column">
          <Grid item xs>
            <StatusGauge type={"hp"} value={hp} maxValue={hpMax} />
          </Grid>
          <Grid item xs>
            <StatusGauge type={"mp"} value={mp} maxValue={mpMax} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StatusBar);
