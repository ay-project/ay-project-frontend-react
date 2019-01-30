import React, { Component } from 'react';
import Login from '../../pages/Login';

class LoginContainer extends Component {
  constructor(props) {
      super(props)
      this.state = {
          username: null,
          pwd: null
      } 
  }
  
  onChangeUsername = (event) => {this.setState({username: event.target.value})}
  onChangePwd = (event) => {this.setState({pwd: event.target.value})}

  render() {
    const { onSubmitLogin } = this.props;
    const { username, pwd } = this.state
    return (
        <Login 
            onSubmit={()=> onSubmitLogin(username, pwd)} 
            onChangeUsername={this.onChangeUsername} 
            onChangePwd={this.onChangePwd} 
        />
    );
  }
}

export default LoginContainer;
