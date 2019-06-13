import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginContainer from "./LoginContainer";
import Barbara from "../../images/01_Barbara_Binderbauer-Owner_and_CEO.png";
import Kathrin from "../../images/02_Kathrin_Hendrix-Owner_and_President.png";
import Andrea from "../../images/03_Andrea_Rosney-Business_Operations_Manager.png";
import Deepshikha from "../../images/04_Deepshikha_Solomon-Regulatory_Compliance_Manager.png";
import Brad from "../../images/05_Brad_Park-Marketing_Associate.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    margin: 10,
    border: "2px solid red"
  },
  img: {
    height: 175
  },
  details: {
    fontSize: 16
  }
});

const BotNavContainer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <LoginContainer />
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <img src={Barbara} className={classes.img} alt="ceo" />
            <p className={classes.details}>Owner and CEO</p>
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <img src={Kathrin} className={classes.img} alt="president" />
            <p className={classes.details}>Owner and President</p>
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <img src={Andrea} className={classes.img} alt="operations" />
            <p className={classes.details}>Business Operations Manager</p>
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <img src={Deepshikha} className={classes.img} alt="regulatory" />
            <p className={classes.details}>Regulatory Compliance Manager</p>
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <img src={Brad} className={classes.img} alt="marketing" />
            <p className={classes.details}>Marketing Associate</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(BotNavContainer);
