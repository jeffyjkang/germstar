import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    margin: 10
    // border: "2px solid red"
  },
  textField: {
    marginLeft: 10
  },
  button: {
    margin: theme.spacing(1)
  },
  check: {
    paddingTop: 10
  },
  text: {
    fontSize: 22
  }
});

const LoginContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>Welcome to Germstar!</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              label="User ID Input"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Checkbox className={classes.check} />

            <span className={classes.text}>ID Master</span>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              label="Password Input"
              className={classes.textField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.button}>
              Submit Login
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button variant="outlined" className={classes.button}>
                User ID / Password Search Button
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(LoginContainer);
