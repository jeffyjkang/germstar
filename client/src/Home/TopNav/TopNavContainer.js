import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    margin: 10,
    backgroundImage:
      "linear-gradient(141deg, #FBB68D 0%, #FBAA8B 51%, #B45C80 95%)",
    border: "2px solid red"
  },
  button: {
    margin: theme.spacing(0.5),
    color: "white",
    borderColor: "white"
  }
});
const TopNavContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button variant="outlined" className={classes.button}>
              Login
            </Button>
            <Button variant="outlined" className={classes.button}>
              Sign Up
            </Button>
            <Button variant="outlined" className={classes.button}>
              Shopping Basket
            </Button>
            <Button variant="outlined" className={classes.button}>
              Order Inquiry
            </Button>
            <Button variant="outlined" className={classes.button}>
              My Page
            </Button>
            <Button variant="outlined" className={classes.button}>
              Service Center
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(TopNavContainer);
