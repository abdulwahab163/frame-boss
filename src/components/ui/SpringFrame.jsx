import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Button from "../Button.jsx";
import frameImage from "./../../assets/cartimage.jpeg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "12em",
    paddingRight: "20em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  verticalLine: {
    width: 300,
    height: "inherit",
    borderLeft: "3px solid #101050",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },
}));

function SpringFrame() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      className={classes.rowContainer}
      style={{
        marginTop: "5em",
        marginBottom: "2em",
      }}
      direction={matchesMD ? "column" : "row"}
      alignItems={matchesMD ? "center" : undefined}
      justify="space-around"
    >
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={frameImage}
            alt="history"
            style={{ maxHeight: matchesMD ? 200 : "30em" }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        lg
        style={{ maxWidth: "27em", paddingTop: "10%" }}
      >
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
            CUSTOM FRAMES TO TELL YOUR UNIQUE STORY
          </Typography>
        </Grid>

        <Grid item style={{ maxWidth: "20em" }}>
          <Grid item container>
            <Grid item className={classes.verticalLine}>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesMD ? "center" : undefined}
                  style={{ marginLeft: 15 }}
                >
                  We Make It Simple Hassle-Free And Affordable For You To Share
                  Your Story With Custom Frames!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={matchesSM ? classes.centered : null}
          style={{ marginTop: 8 }}
        >
          <Button title={"START FRAMING"} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpringFrame;
