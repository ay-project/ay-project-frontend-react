import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Icon from "@mdi/react";
import {
  mdiGithubCircle,
  mdiEmoticonOutline,
  mdiBookOpenPageVariant
} from "@mdi/js";

const styles = theme => ({
  root: {
    justifyContent: "center"
  },
  paper: {
    maxWidth: 150,
    margin: `${theme.spacing.unit}px auto`,
    padding: 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  }
});

const iconStyle = { size: 2, color: "black" };

class ProjectInfo extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} elevation={1} xs={6}>
        <a href="https://github.com/ay-project">
          <Icon path={mdiGithubCircle} size={2} {...iconStyle} />
        </a>
        <a href="https://github.com/ay-project/ay-project-backend/wiki">
          <Icon path={mdiBookOpenPageVariant} {...iconStyle} />
        </a>
        <a href="/">
          <Icon path={mdiEmoticonOutline} {...iconStyle} />
        </a>
      </Paper>
    );
  }
}

export default withStyles(styles)(ProjectInfo);
