import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    marginLeft: "1em",
  },

  frame: {
    height: "12em",
    transition: ".5s ease",
    backfaceVisibility: " hidden",
  },
  titleContainer: {
    marginTop: 15,
  },
  middle: {
    transition: ".5s ease",
    display: "none",
    position: "absolute",
    top: "80%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
  },

  text: {
    backgroundColor: "#112d46",
    color: "white",
    fontSize: "10px",
    padding: "0px 57px",
  },
}));
function FeatureFrame({ image, title }) {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={classes.container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className={classes.frame} src={image} alt={title}></img>
      <div className={classes.middle}>
        <div
          className={classes.text}
          style={{ display: hovered ? "flex" : "none" }}
        >
          Frame Now
        </div>
      </div>
      <Grid item className={classes.titleContainer}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
    </div>
  );
}

export default FeatureFrame;
