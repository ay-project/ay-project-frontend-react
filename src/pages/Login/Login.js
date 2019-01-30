import React, { Component } from 'react';

class Login extends Component {
  render() {
    const {onChangeUsername, onChangePwd, onSubmit} = this.props
    return (
      <div className="Login_Box">
        <label>
            GamerTag:
            <input type="text" name="gamer_tag" onChange={onChangeUsername} />
        </label>
        <label>
            Password:
            <input type="password" name="pwd" onChange={onChangePwd} />
        </label>
        <button onClick={onSubmit}>Ok</button>
      </div>
    );
  }
}

export default Login;
