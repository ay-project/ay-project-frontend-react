import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    background: `no-repeat`,
    backgroundSize: "contain",
    backgroundColor: "#d3b885",
    minHeight: "37vh",
    maxHeight: "37vh",
    borderRadius: "35px"
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
      <div style={{ marginLeft: "20px" }}>
        <Button
          fullWidth
          className={classes.root}
          style={style}
          onClick={event => clickAction(index)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CardPreview);
