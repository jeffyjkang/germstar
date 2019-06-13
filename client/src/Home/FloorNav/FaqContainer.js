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
    textAlign: "center"
    // border: "2px solid red"
  }
});

const FaqContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>Frequently Asked Menu</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Frequently asked Questions
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Member Benefits
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Notice
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              View New Products
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              1:1 Contact
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Overseas Delivery
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              See All Products
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Delivery Tracking
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(FaqContainer);
