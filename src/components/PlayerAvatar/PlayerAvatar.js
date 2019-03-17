import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "./blm.png";

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`,
    //"url(https://wallpaperplay.com/walls/full/a/0/4/179353.jpg)",
    minHeight: "14vh",
    maxHeight: "14vh",
    backgroundPosition: "55% 25%",
    borderRadius: "35px",
    border: "2px solid #FAFAD2"
  }
});

class PlayerAvater extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return <Button fullWidth className={classes.root} />;
  }
}

export default withStyles(styles)(PlayerAvater);
