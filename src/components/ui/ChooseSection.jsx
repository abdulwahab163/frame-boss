import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Button from "./../Button.jsx";
import Features from "./Features";

import chooseFrame from "./../../assets/choose-frame.png";
import ready from "./../../assets/ready.png";
import advice from "./../../assets/advice.png";
import guarentee from "./../../assets/guarentee.png";
import returns from "./../../assets/returns.png";

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
}));

function ChooseSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
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
      justify="space-between"
    >
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
            Why Choose Frame Boss
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" align={matchesMD ? "center" : undefined}>
            At Frames Boss, We Promise To Provide You With The Simplest And Most
            Affordable Way To Design Custom Frames With Care!
          </Typography>
        </Grid>
        <Grid>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Features
              image={ready}
              title={"Ready To Use"}
              body={
                "We deliver ready to use frames build by hand shiped for free at your doorsteps"
              }
            />
            <Features
              image={advice}
              title={"Enjoy Free  Advice"}
              body={
                "We deliver ready to use frames build by hand shiped for free at your doorsteps"
              }
            />
          </Grid>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Features
              image={guarentee}
              title={"Lowest Price Guarantee"}
              body={
                "We deliver ready to use frames build by hand shiped for free at your doorsteps"
              }
            />
            <Features
              image={returns}
              title={"Free Returns"}
              body={
                "We deliver ready to use frames build by hand shiped for free at your doorsteps"
              }
            />
          </Grid>
          <Button title={"START FRAMING"} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={chooseFrame}
            alt="chooseFrame"
            style={{ maxHeight: matchesMD ? 200 : "30em" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ChooseSection;
