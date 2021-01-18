import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    margin: "1em",
  },
}));
function HeaderLink({ title }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid item className={classes.gridItem}>
      <Grid container direction="column" spacing="1">
        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HeaderLink;
