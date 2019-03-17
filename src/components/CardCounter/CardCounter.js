import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    height: "100%",
    textAlign: "center",
    margin: "auto",
    verticalAlign: "middle",
    fontSize: 40,
    paddingTop: "28%",
    color: "black"
  }
});

class CardCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      cardCount: 30
    };
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{this.state.cardCount}</div>;
  }
}

export default withStyles(styles)(CardCounter);
