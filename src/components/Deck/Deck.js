import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    minHeight: "170px",
    maxHeight: "170px",
    minWidth: "114px",
    maxWidth: "114px",
    backgroundImage: `url("https://s3.us-east-2.amazonaws.com/ay-dev-assests/cards/phcardback.png")`,
    background: `no-repeat`,
    backgroundSize: "contain",
    margin: "auto",
    fontSize: 60,
    color: "#d4af37",
    textAlign: "center",
    textShadow:
      "0.025em 0 #fafad2, 0 0.025em #fafad2, -0.025em 0 #fafad2,0 -0.025em #fafad2, -0.025em -0.025em #fafad2, -0.025em 0.025em #fafad2,0.025em -0.025em #fafad2, 0.025em 0.025em #fafad2"
  },
  cardCount: {
    paddingTop: "30%"
  }
});

class Deck extends Component {
  render() {
    const { classes, cardCount } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.cardCount}>{cardCount}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Deck);
