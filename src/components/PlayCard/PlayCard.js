import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundImage: `url("https://s3.us-east-2.amazonaws.com/ay-dev-assests/cards/phcard.png")`,
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
    const { classes, clickAction, index, selected } = this.props;
    let style = {};
    if (selected) {
      style = { filter: "brightness(125%)" };
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
