import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    minHeight: "100%",
    maxHeight: "100%",
    backgroundImage: `url("https://s3.us-east-2.amazonaws.com/ay-dev-assests/cards/phcardback.png")`,
    background: `no-repeat`,
    backgroundSize: "contain",
    margin: "auto",
    fontSize: 60,
    color: "#d4af37",
    textAlign: "center",
    paddingTop: "40%",
    textShadow:
      "0.025em 0 #fafad2, 0 0.025em #fafad2, -0.025em 0 #fafad2,0 -0.025em #fafad2, -0.025em -0.025em #fafad2, -0.025em 0.025em #fafad2,0.025em -0.025em #fafad2, 0.025em 0.025em #fafad2"
  }
});

class Deck extends Component {
  render() {
    const { classes, cardCount } = this.props;
    return <div className={classes.root}>{cardCount}</div>;
  }
}

export default withStyles(styles)(Deck);
