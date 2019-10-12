class Card {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.img =
      "default"; /*
      data.img == null
        ? "https://ay-dev-assests.s3.us-east-2.amazonaws.com/cards/phcard.png"
        : data.img;*/
    if (data.type === "creature") {
      this.hp = data.specs.HP;
      this.atk = data.specs.Atk;
      this.cHP = data.specs.HP;
      this.cAtk = data.specs.Atk;
      this.abilities = data.specs.abilities;
      this.family = data.specs.hasOwnProperty("family")
        ? data.specs.family
        : "none";
    } else if (data.type === "spell") {
      this.effects = data.effects;
    }
    this.cost = data.specs.cost;
    this.type = data.type;
    this.uid = data.uid;
    this.selected = false;
    this.subtext = data.specs.hasOwnProperty("subtext")
      ? data.specs.subtext
      : {};
  }
}

export default Card;
