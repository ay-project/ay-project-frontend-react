import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    background: `no-repeat`,
    backgroundSize: "contain",
    backgroundColor: "#d3b885",
    margin: "10px",
    minHeight: "100%",
    maxHeight: "100%",
    fontSize: 60,
    color: "#d4af37",
    textAlign: "center",
    borderRadius: "35px",
    textShadow:
      "0.025em 0 #fafad2, 0 0.025em #fafad2, -0.025em 0 #fafad2,0 -0.025em #fafad2, -0.025em -0.025em #fafad2, -0.025em 0.025em #fafad2,0.025em -0.025em #fafad2, 0.025em 0.025em #fafad2"
  }
});

class CardPreview extends Component {
  render() {
    const { classes, cardDetail } = this.props;
    let style = {
      backgroundImage: `url("${cardDetail}")`
    };
    return (
      <div className={classes.root}>
        <div className={classes.cardCount} style={style} />
      </div>
    );
  }
}

export default withStyles(styles)(CardPreview);
