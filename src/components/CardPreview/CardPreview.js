import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    background: `no-repeat`,
    backgroundSize: "contain",
    backgroundColor: "#d3b885",
    margin: "10px",
    minHeight: "37vh",
    maxHeight: "37vh",
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
    const { classes, cardDetail, selected, index, clickAction } = this.props;
    let style = {
      backgroundImage: `url("${cardDetail}")`
    };
    if (selected) {
      style.filter = "brightness(125%)";
    }
    return (
      <Button
        fullWidth
        className={classes.root}
        style={style}
        onClick={event => clickAction(index)}
      />
    );
  }
}

export default withStyles(styles)(CardPreview);
