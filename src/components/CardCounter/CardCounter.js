import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: "100%",
    textAlign: "center",
    margin: "auto",
    verticalAlign: "middle",
    fontSize: 60,
    paddingTop: "15%",
    color: "#d4af37",
    textShadow:
      "0.025em 0 #fafad2, 0 0.025em #fafad2, -0.025em 0 #fafad2,0 -0.025em #fafad2, -0.025em -0.025em #fafad2, -0.025em 0.025em #fafad2,0.025em -0.025em #fafad2, 0.025em 0.025em #fafad2"
  }
});

class CardCounter extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { classes, cardCount } = this.props;
    return <div className={classes.root}>{cardCount}</div>;
  }
}

export default withStyles(styles)(CardCounter);
