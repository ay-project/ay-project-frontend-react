import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardArea from "../CardArea";

const styles = theme => ({
  root: {
    backgroundColor: "#abb2bc",
    margin: "1vh 4vh",
    padding: "1vh",
    borderRadius: "35px"
  },
  rootGrid: {
    padding: "0px 10px"
  },
  grid: {
    margin: "0vh",
    paddingTop: "15px",
    minHeight: "100%",
    maxHeight: "100%"
  },
  area: {
    margin: "0vh",
    padding: "0vh",
    minHeight: "50%",
    maxHeight: "50%"
  }
});

class HandArea extends Component {
  render() {
    const { classes, hand, handSelectAction } = this.props;

    return (
      <div className={classes.root}>
        <CardArea
          cards={hand}
          clickAction={handSelectAction}
          midClickAction={null}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HandArea);
