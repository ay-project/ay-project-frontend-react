import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
const iconStyle = { size: 2, color: "black" };

const styles = theme => ({
  root: {
    color: "#FAFAD2"
  },
  hprow: {
    padding: "10px 20px",
    backgroundImage: "linear-gradient(to left, #A0DC60 , #286709)",
    borderRadius: "25px",
    border: "2px solid #FAFAD2"
  },
  mprow: {
    padding: "10px 20px",
    backgroundImage: "linear-gradient(to left, #DD86AD , #773139)",
    borderRadius: "25px",
    border: "2px solid #FAFAD2"
  }
});

class AdversaryStatusBar extends Component {
  constructor(props) {
    super();
    this.state = {
      HP: 30,
      MP: 0
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column">
          <Grid item xs>
            <div className={classes.hprow}>HP {this.state.HP}</div>
          </Grid>
          <Grid item xs>
            <div className={classes.mprow}>MP {this.state.MP}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AdversaryStatusBar);
