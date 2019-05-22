import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import LoginForm from "./LoginForm";
import ProjectInfo from "../../components/ProjectInfo";

const imgUrl =
  "https://s3.us-east-2.amazonaws.com/ay-dev-assests/general/log-paper.jpg";
const styles = theme => ({
  root: {
    minHeight: "100vh"
  },
  main: {
    justifyContent: "center",
    backgroundSize: "cover",
    overflow: "hidden"
  }
});

class Login extends Component {
  render() {
    const { onSubmit, onChangeUsername, onChangePwd, classes } = this.props;
    return (
      <div className={classNames(classes.root)}>
        <Grid
          className={classNames(classes.main)}
          container
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh" }}
        >
          <Grid item xs={3}>
            <LoginForm
              onSubmit={onSubmit}
              onChangePwd={onChangePwd}
              onChangeUsername={onChangeUsername}
            />
          </Grid>
        </Grid>
        <Grid>
          <ProjectInfo />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
