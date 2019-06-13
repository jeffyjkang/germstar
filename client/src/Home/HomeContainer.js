import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TopNavContainer from "./TopNav/TopNavContainer";
import MidNavContainer from "./MidNav/MidNavContainer";
import BotNavContainer from "./BotNav/BotNavContainer";
import FloorNavContainer from "./FloorNav/FloorNavContainer";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "90vh",
    width: "90vw",
    marginTop: 50,
    border: "2px solid red"
  }
});

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TopNavContainer />
              <MidNavContainer />
              <BotNavContainer />
              <FloorNavContainer />
            </Paper>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomeContainer);
