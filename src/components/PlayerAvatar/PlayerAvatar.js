import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "./blm.png";

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`, // TODO image is prop and s3 hosted
    minHeight: "100%",
    maxHeight: "100%",
    backgroundPosition: "55% 25%", // TODO remove once images are created
    borderRadius: "35px",
    border: "2px solid #FAFAD2"
  }
});

class PlayerAvater extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, clickAction, tag } = this.props;
    return (
      <Button fullWidth className={classes.root} onClick={clickAction}>
        {tag}
      </Button>
    );
  }
}

export default withStyles(styles)(PlayerAvater);
