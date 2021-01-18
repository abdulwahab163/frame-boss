import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },

  frame: {
    height: "12em",
    transition: ".5s ease",
    backfaceVisibility: " hidden",
    "&:hover": {
      opacity: 0.3,
    },
  },
  titleContainer: {
    marginTop: 15,
  },
  middle: {
    transition: ".5s ease",
    opacity: 0,
    position: "absolute",
    top: "45%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      opacity: 1,
    },
  },

  text: {
    backgroundColor: "#112d46",
    color: "white",
    fontSize: "14px",
    padding: "6px 38px",
  },
}));
function Frame({ image, title }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.frame} src={image} alt={title}></img>
      <div className={classes.middle}>
        <div className={classes.text}>Frame Now</div>
      </div>
      <Grid item className={classes.titleContainer}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
    </div>
  );
}

export default Frame;
