import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import HeaderLink from "./HeaderLink";
import {
  Apple,
  AndroidRounded,
  Facebook,
  Instagram,
  Twitter,
} from "@material-ui/icons";

const secondColumn = ["Framing Process", "Hanging Tips", "For Business", "FAQ"];
const thirdColumn = ["About Us", "Gallery Wall Frames", "Carrers", "Pricing"];
const fourthColumn = ["Gift Card", "Contact Us"];
const fifthColumn = [
  "Term Of Services",
  "Privacy Policy",
  "Accessibility",
  "Sitemap",
];
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    justifyContent: "space-around",
    backgroundColor: "#f9f9f9",
  },
  gridItem: {
    margin: "1em",
  },
  emailFormContainer: {
    display: "flex",
  },
  submitButton: {
    color: "white",
    borderRadius: "0px 50px 50px 0px",
    backgroundColor: "#112d46",
  },

  text: {
    borderRadius: "50px 0px 0px 50px",
    width: "10em",
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#112d46",
    color: "white",
    padding: "1em",
  },
}));
function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid>
      <Grid container className={classes.mainContainer}>
        <Grid direction="column">
          <HeaderLink title={"Get the app"} />
          <Grid item className={classes.gridItem}>
            <Grid container direction="row" spacing="1">
              <Grid>
                <Apple />
              </Grid>
              <Grid style={{ marginLeft: ".4em" }}>
                <AndroidRounded />
              </Grid>
            </Grid>
          </Grid>
          <HeaderLink title={"Follow us"} />
          <Grid item className={classes.gridItem}>
            <Grid container direction="row" spacing="1">
              <Grid>
                <Twitter />
              </Grid>
              <Grid>
                <Facebook style={{ marginLeft: ".4em" }} />
              </Grid>
              <Grid style={{ marginLeft: ".4em" }}>
                <Instagram />
              </Grid>
            </Grid>
          </Grid>
          <HeaderLink title={"Get insprition"} />
          <Grid item className={classes.gridItem}>
            <Grid container direction="row" spacing="1">
              <Grid className={classes.emailFormContainer}>
                <input
                  type="text"
                  className={classes.text}
                  name="cf_email"
                  placeholder="Enter your email"
                  id="email"
                />

                <input
                  type="submit"
                  className={classes.submitButton}
                  value="SUBMIT"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid direction="column">
          {secondColumn.map((item) => (
            <HeaderLink key={item} title={item} />
          ))}
        </Grid>
        <Grid direction="column">
          {thirdColumn.map((item) => (
            <HeaderLink key={item} title={item} />
          ))}
        </Grid>
        <Grid direction="column">
          {fourthColumn.map((item) => (
            <HeaderLink key={item} title={item} />
          ))}
        </Grid>
        <Grid direction="column">
          {fifthColumn.map((item) => (
            <HeaderLink key={item} title={item} />
          ))}
        </Grid>
      </Grid>
      <Grid className={classes.copyrightContainer}>
        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
          &#169;2020 Frameboss
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
