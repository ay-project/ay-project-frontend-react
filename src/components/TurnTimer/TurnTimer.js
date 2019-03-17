import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./timer.css";

const styles = theme => ({});

const iconStyle = { size: 2, color: "black" };
const totaltime = 30;

class TurnTimer extends Component {
  constructor(props) {
    super();
    this.resetTimer();
    this.myCounter();
  }

  resetTimer = () => {
    this.count = 0;
    this.state = {
      timer_style: {
        backgroundImage:
          "linear-gradient(0deg, transparent 50%, #FAFAD2 50%),linear-gradient(0deg, #FAFAD2 50%, transparent 50%)"
      }
    };
  };

  updateTimer = percent => {
    var deg;
    if (percent < totaltime / 2) {
      deg = 90 + (360 * percent) / totaltime;
      this.setState({
        timer_style: {
          backgroundImage:
            "linear-gradient(" +
            deg +
            "deg, transparent 50%, #FAFAD2 50%),linear-gradient(90deg, #FAFAD2 50%, transparent 50%)"
        }
      });
    } else if (percent >= totaltime / 2) {
      deg = -90 + (360 * percent) / totaltime;
      this.setState({
        timer_style: {
          backgroundImage:
            "linear-gradient(" +
            deg +
            "deg, transparent 50%, #d4af37 50%),linear-gradient(90deg, #FAFAD2 50%, transparent 50%)"
        }
      });
    }
  };

  myCounter = () => {
    var self = this;
    self.interval_counter = setInterval(() => {
      self.count += 1;
      self.updateTimer(self.count);
      if (self.count == totaltime) clearInterval(self.interval_counter);
    }, 1000);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="pie" style={this.state.timer_style}>
        <span className="block" />
        <span id="time">{this.count}</span>
      </div>
    );
  }
}

export default withStyles(styles)(TurnTimer);
