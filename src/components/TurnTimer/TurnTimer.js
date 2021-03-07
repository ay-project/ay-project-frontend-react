import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./timer.css";

const styles = theme => ({});

class TurnTimer extends Component {
  constructor(props) {
    super(props);
    this.totaltime = this.props.time;
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
    if (percent < this.totaltime / 2) {
      deg = 90 + (360 * percent) / this.totaltime;
      this.setState({
        timer_style: {
          backgroundImage:
            "linear-gradient(" +
            deg +
            "deg, transparent 50%, #FAFAD2 50%),linear-gradient(90deg, #FAFAD2 50%, transparent 50%)"
        }
      });
    } else if (percent >= this.totaltime / 2) {
      deg = -90 + (360 * percent) / this.totaltime;
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
      if (self.count == this.totaltime) {
        clearInterval(self.interval_counter);
        //  this.props.endAction();
      }
    }, 1000);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="pie" style={this.state.timer_style}>
        <div id="time">{this.count}</div>
      </div>
    );
  }
}

export default withStyles(styles)(TurnTimer);
