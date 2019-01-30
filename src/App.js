import React, { Component } from "react";
import LoginContainer from './containers/LoginContainer'
import { Router, Route, Link } from "react-router-dom";
import history from './history';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    }
  }

  getToken = (user, pwd) => {
    setTimeout(() => { this.setState({ token: `user: ${user}, pwd: ${pwd}`}); console.log(this.state.token)}, 1000)
    history.push("/about")
  }
  
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" exact component={() => <LoginContainer onSubmitLogin={this.getToken} />} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    ) 
  }
};

export default AppRouter;