import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchContainer from "./SearchContainer";
import MainLogo from "../../images/GermMainLogo.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    margin: 10
  },
  right: {
    display: "flex"
  },
  img: {
    height: 125
  }
});

const MidNavContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={MainLogo} alt="main_logo_img" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SearchContainer />
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.right}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <p>Since 1988</p>
                  </Paper>
                </Grid>
                <Grid item xs={9}>
                  <Paper className={classes.paper}>
                    <p>Keeping your family germ-free</p>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MidNavContainer);
