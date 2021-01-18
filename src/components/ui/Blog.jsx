import React from "react";

import { useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Button from "./../Button.jsx";

function Blog({ image }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container style={{ marginTop: "2em" }}>
      <Grid item>
        <img style={{ maxWidth: "15em" }} src={image} alt={"title"} />
      </Grid>
      <Grid item style={{ marginTop: "1em", maxWidth: "15em" }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="subtitle2"
          gutterBottom
          style={{ marginTop: ".7em", marginBottom: ".7em" }}
        >
          Category Blog
        </Typography>

        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h4"
          gutterBottom
        >
          A Very Anthropologie Holiday With Jodie Harrison
        </Typography>
        <Grid container>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="subtitle2"
            gutterBottom
            style={{ marginRight: "5em" }}
          >
            By admin
          </Typography>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="subtitle2"
            gutterBottom
          >
            30/3/2020
          </Typography>
        </Grid>
        <Grid>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="subtitle2"
            gutterBottom
            style={{ marginTop: "1em" }}
          >
            One of my favourite illustrators, dan who goes by the creative name
            of roach graphics...
          </Typography>
        </Grid>
        <Grid style={{ marginTop: "2em" }} item>
          <Button title={"READ MORE"} size="141px" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Blog;
