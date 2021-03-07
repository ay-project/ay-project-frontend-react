import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    background: `no-repeat`,
    backgroundSize: "contain",
    backgroundColor: "#d3b885",
    minHeight: "37vh",
    maxHeight: "37vh",
    borderRadius: "35px"
  }
});

class CardPreview extends Component {
  generateCard = () => {
    const { card, classes } = this.props;
    if (card == null) return <div></div>;
    if (card.img !== "default") return <div></div>;
    if (card.type === "creature")
      return (
        <div className={classes.textCard}>
          <p>{card.name}</p>
          <p>cost : {card.cost}</p>
          <p>hp : {card.hp}</p>
          <p>atk : {card.atk}</p>
          <p>family : {card.family}</p>
          <p>{this.generateAbilityString(card.subtext)}</p>
        </div>
      );
    if (card.type === "spell")
      return (
        <div>
          <p>{card.name}</p>
          <p>cost : {card.cost}</p>
          <p>{this.generateAbilityString(card.subtext)}</p>
        </div>
      );
  };

  generateAbilityString = subtext => {
    // TODO make this cleaner
    let finalText = "";
    for (let key in subtext) {
      switch (key) {
        case "battlecry":
          finalText += "Battlecry : " + subtext[key][0] + " ";
          break;
        case "effects":
          finalText += "Effect : " + subtext[key][0] + " ";
          break;
        case "bonus":
          finalText += "Bonus : " + subtext[key][0] + " ";
          break;
        default:
          break;
      }
    }
    return finalText;
  };

  render() {
    const { classes, card, selected, index, clickAction } = this.props;
    let style = {};
    if (card != null) style.backgroundImage = `url("${card.img}")`;
    if (selected) {
      style.filter = "brightness(125%)";
    }
    return (
      <div style={{ marginLeft: "20px" }}>
        <Button
          fullWidth
          className={classes.root}
          style={style}
          onClick={() => clickAction(index)}
        >
          {this.generateCard()}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CardPreview);
