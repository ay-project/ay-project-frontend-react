import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    minHeight: "170px",
    maxHeight: "170px",
    minWidth: "114px",
    maxWidth: "114px",
    background: `no-repeat`,
    backgroundSize: "contain",
    padding: "0px"
  },
  textCard: {
    fontSize: "10px"
  }
});

class PlayCard extends Component {
  generateCard = () => {
    const { card, classes } = this.props;
    if (card.img !== "default") return <div></div>;
    if (card.type === "creature")
      return (
        <div className={classes.textCard}>
          <p>{card.name}</p>
          <p>cost : {card.cost}</p>
          <p>hp : {card.hp}</p>
          <p>atk : {card.atk}</p>
          <p>family : {card.family}</p>
        </div>
      );
    if (card.type === "spell")
      return (
        <div>
          <p>{card.name}</p>
          <p>cost : {card.cost}</p>
        </div>
      );
  };
  render() {
    const {
      classes,
      clickAction,
      index,
      selected,
      card,
      hoverAction
    } = this.props;
    let style = {};
    if (card.img == null) {
      style.minHeight = "20px";
      style.maxHeight = "20px";
      style.backgroundColor = "#5577AF";
    } else if (card.img === "default") {
      style.backgroundColor = "#5577AF";
    } else {
      style = { backgroundImage: `url("${card.img}")` };
    }
    if (selected) {
      style.filter = "brightness(125%)";
    }
    return (
      <Button
        fullWidth
        className={classes.root}
        onClick={() => clickAction(index)}
        style={style}
        onMouseEnter={() => hoverAction(card)}
      >
        {this.generateCard()}
      </Button>
    );
  }
}

export default withStyles(styles)(PlayCard);
