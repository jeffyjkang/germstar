import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FaqContainer from "./FaqContainer";
import Registered from "../../images/US_FDA_Registered.png";
import Biobased from "../../images/USDA_Biobased.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    border: "2px solid red"
  },
  img: {
    height: 250
  }
});

const FloorNavContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FaqContainer />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src={Registered} className={classes.img} alt="us_fda" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src={Biobased} className={classes.img} alt="usda" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(FloorNavContainer);
