import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    minHeight: "170px",
    maxHeight: "170px",
    minWidth: "114px",
    maxWidth: "114px",
    background: `no-repeat`,
    backgroundSize: "contain",
    padding: "0px"
  }
});

class PlayCard extends Component {
  render() {
    const { classes, clickAction, index, selected, card } = this.props;
    let style = { backgroundImage: `url("${card.img}")` };
    if (card.img == null) {
      style.minHeight = "20px";
      style.maxHeight = "20px";
      style.backgroundColor = "#5577AF";
    }
    if (selected) {
      style = {
        filter: "brightness(125%)"
      };
    }
    return (
      <Button
        fullWidth
        className={classes.root}
        onClick={event => clickAction(index)}
        style={style}
      />
    );
  }
}

export default withStyles(styles)(PlayCard);
