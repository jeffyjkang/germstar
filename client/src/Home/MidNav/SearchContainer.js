import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
// import { Input } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center"
    // color: theme.palette.text.secondary,
    // margin: 2
  },
  button: {
    margin: theme.spacing(0.5)
  },
  inputRoot: {
    color: "inherit",
    border: "1px solid lightgray",
    borderRadius: "5px",
    margin: 5
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 7),
    // transition: theme.transitions.create("width"),
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: 200
    // }
  }
});

const SearchContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" className={classes.button}>
              Popular Searches
            </Button>
            <Button variant="outlined" className={classes.button}>
              Lux Spray
            </Button>
            <Button variant="outlined" className={classes.button}>
              Noro 59ml Spray
            </Button>
          </Paper>
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" className={classes.button}>
              All products examples
            </Button>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
            <SearchIcon />
          </Paper>
          {/* </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
          </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SearchContainer);
