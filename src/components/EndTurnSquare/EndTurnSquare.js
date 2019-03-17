import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    minHeight: "14vh",
    maxHeight: "14vh",
    borderRadius: "35px",
    border: "2px solid #FAFAD2"
  }
});

class EndTurnSquare extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        fullWidth
      >
        End Turn
      </Button>
    );
  }
}

export default withStyles(styles)(EndTurnSquare);
