import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "./meteor.jpg";

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

class HeroPower extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, clickAction, powerIsUsed } = this.props;
    let style = {};
    if (powerIsUsed) {
      style.filter = "brightness(10%)";
    }
    else {
      style.filter = "brightness(100%)";
    }
    return <Button fullWidth className={classes.root} onClick={clickAction} style={style} />;
  }
}

export default withStyles(styles)(HeroPower);
