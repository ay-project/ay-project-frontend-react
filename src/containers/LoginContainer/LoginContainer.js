import React, { Component } from "react";
import Login from "../../pages/Login";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
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

  keyPress = e => {
    if (e.key === "Enter") {
      const { onSubmitLogin } = this.props;
      const { username, pwd } = this.state;
      onSubmitLogin(username, pwd);
    }
  };

  render() {
    const { onSubmitLogin, token } = this.props;
    const { username, pwd } = this.state;

    if (typeof token != "undefined" && token != null)
      return <Redirect to={"/game/home"} />;

    return (
      <div>
        <Login
          onSubmit={() => onSubmitLogin(username, pwd)}
          onChangeUsername={this.onChangeUsername}
          onChangePwd={this.onChangePwd}
          keyPress={this.keyPress}
        />
      </div>
    );
  }
}

export default LoginContainer;
