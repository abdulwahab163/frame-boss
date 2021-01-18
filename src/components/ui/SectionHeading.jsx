import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },
  line: {
    width: "10em",
    height: "inherit",
    borderBottom: "3px solid #101050",
  },
}));

function SectionHeading({ title, subTitle }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid>
      <Grid item className={classes.centered}>
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.centered}>
        <Grid item className={classes.line}></Grid>
      </Grid>
      <Grid item className={classes.centered}>
        <Typography
          style={{ maxWidth: "31rem", textAlign: "center" }}
          align={matchesMD ? "center" : undefined}
          variant="caption"
        >
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SectionHeading;
