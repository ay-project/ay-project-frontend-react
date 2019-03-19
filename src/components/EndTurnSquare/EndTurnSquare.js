import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    minHeight: "99%",
    maxHeight: "99%",
    borderRadius: "35px",
    border: "2px solid #FAFAD2",
    color: "#FAFAD2",
    backgroundColor: "#0094cc",
    "&:hover": {
      backgroundColor: "#40c4ff"
    }
  }
});

class EndTurnSquare extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, clickAction } = this.props;
    return (
      <Button
        variant="contained"
        className={classes.button}
        fullWidth
        onClick={clickAction}
      >
        End Turn
      </Button>
    );
  }
}

export default withStyles(styles)(EndTurnSquare);
