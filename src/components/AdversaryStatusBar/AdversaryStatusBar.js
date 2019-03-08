import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

const iconStyle = { size: 2, color: "black" };

class AdversaryStatusBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return <div />;
  }
}

export default withStyles(styles)(AdversaryStatusBar);
