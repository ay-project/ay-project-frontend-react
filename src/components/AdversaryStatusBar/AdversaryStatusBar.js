import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import StatusGauge from "../StatusGauge";

const styles = theme => ({
  root: {}
});

class AdversaryStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, hp, mp } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column">
          <Grid item xs>
            <StatusGauge type={"hp"} value={hp} maxValue={30} />
          </Grid>
          <Grid item xs>
            <StatusGauge type={"mp"} value={mp} maxValue={10} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AdversaryStatusBar);
