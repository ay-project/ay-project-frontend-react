import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: "10px 20px",
    borderRadius: "25px",
    border: "2px solid #FAFAD2",
    color: "#FAFAD2"
  },
  hp: {
    backgroundImage: "linear-gradient(to left, #A0DC60 , #286709)"
  },
  mp: {
    backgroundImage: "linear-gradient(to left, #DD86AD , #773139)"
  }
});

class StatusGauge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, type, value, maxValue } = this.props;
    return (
      <div className={[classes[type], classes.root].join(" ")}>
        {type.toUpperCase()} {value} / {maxValue}
      </div>
    );
  }
}

export default withStyles(styles)(StatusGauge);
