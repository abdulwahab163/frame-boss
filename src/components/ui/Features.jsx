import React from "react";

import { useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

function Features({ image, title, body }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container style={{ marginTop: "2em" }}>
      <Grid item>
        <img src={image} alt={title} />
      </Grid>
      <Grid item style={{ marginTop: 3 }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h4"
          gutterBottom
        >
          {title}
        </Typography>
        <Grid style={{ width: "9em" }}>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="subtitle2"
            gutterBottom
          >
            {body}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Features;
