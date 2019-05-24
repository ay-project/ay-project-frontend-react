import React, { Component } from "react";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      pwd: null
    };
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  onChangePwd = event => {
    this.setState({ pwd: event.target.value });
  };

  render() {
    const {} = this.props;
    const { token } = this.state;
    console.log("fetching decks?");
    return <div />;
  }
}

export default MainContainer;
