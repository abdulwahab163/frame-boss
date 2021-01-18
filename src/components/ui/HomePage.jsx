import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import SpringFrame from "./SpringFrame.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Frame from "./Frame.jsx";
import Button from "./../Button.jsx";
import ChooseSection from "./ChooseSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Blog from "./Blog";
import FeatureFrame from "./FeatureFrame.jsx";

import orignal from "./../../assets/orignal.png";
import object from "./../../assets/object.png";
import something from "./../../assets/something.png";
import jersey from "./../../assets/jersey.png";
import photography from "./../../assets/photography.png";
import textile from "./../../assets/textile.png";
import framingSteps from "./../../assets/framing-steps.png";
import client from "./../../assets/client.png";
import doubleArrows from "./../../assets/double-arrows.png";
import blog1 from "./../../assets/blog1.png";
import blog2 from "./../../assets/blog2.png";
import impressive1 from "./../../assets/impressive1.png";
import impressive2 from "./../../assets/impressive2.png";
import impressive3 from "./../../assets/impressive3.png";
import impressive4 from "./../../assets/impressive4.png";
import featuref1 from "./../../assets/feature-f1.png";
import dover from "./../../assets/dover.png";
import marquette from "./../../assets/marquette.png";
import wren from "./../../assets/wren.png";
import mercer from "./../../assets/mercer.png";
import everett from "./../../assets/everett.png";
import mandalay from "./../../assets/mandalay.png";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "13em",
    paddingRight: "19em",
    marginBottom: "3em",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },

  frame: {
    height: "12em",
  },
  titleContainer: {
    marginTop: 15,
  },
  line: {
    width: "10em",
    height: "inherit",
    borderBottom: "3px solid #101050",
  },
  avatar: {
    maxWidth: "64em",
    paddingRight: "3em",
    [theme.breakpoints.down("sm")]: {
      width: "28em",
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      {/* First Section Start */}
      <SpringFrame />
      {/* First Section End */}
      {/* Customize Frame  Section Start */}
      <SectionHeading
        title={"What You Wish To Frame?"}
        subTitle={
          "Customize Your Frame To Fit Artworks, Photos, And Many More!"
        }
      />

      <Grid
        item
        conatiner
        className={classes.rowContainer}
        align={matchesMD ? "center" : undefined}
        style={{ flexDirection: matchesMD ? "column" : "row" }}
      >
        <div>
          <img
            className={classes.frame}
            src={orignal}
            alt={"Orignal Art"}
          ></img>
          <Grid item className={classes.titleContainer}>
            <Typography variant="h4">{"Orignal Art"}</Typography>
          </Grid>
        </div>
        <Frame image={object} title={"Object"} />
        <Frame image={textile} title={"Textile"} />
        <Frame image={jersey} title={"Jersey"} />
        <Frame image={photography} title={"Photography"} />
        <Frame image={something} title={"Something Else"} />
      </Grid>
      {/* Customize Frame Section End */}

      {/*  Featured Products Section Start */}
      <SectionHeading
        title={"Our Featured Products"}
        subTitle={"Browse Through Our Range Of Featured Products"}
      />
      <Grid container style={{ marginTop: "1em", justifyContent: "center" }}>
        <Grid item>
          <img
            style={{ height: "30rem", width: "30rem" }}
            src={featuref1}
            alt={"title"}
          />
        </Grid>
        <Grid item>
          <Grid item container>
            <FeatureFrame image={dover} title={"Dover"} />
            <FeatureFrame image={marquette} title={"Marquette"} />
            <FeatureFrame image={wren} title={"Wren"} />
          </Grid>
          <Grid item container style={{ marginTop: "2em" }}>
            <FeatureFrame image={mercer} title={"Mercer"} />
            <FeatureFrame image={everett} title={"Everett"} />
            <FeatureFrame image={mandalay} title={"Mandalay"} />
          </Grid>
        </Grid>
      </Grid>
      {/* Featured Products Section End */}

      {/*  Custom Framing Steps Section Start */}
      <SectionHeading
        title={"Custom Framing Steps"}
        subTitle={"True Custom Framing Made Truly Simple."}
      />
      <Grid item className={classes.centered}>
        <img
          className={classes.avatar}
          alt={"framing steps"}
          src={framingSteps}
        />
      </Grid>
      <Grid
        item
        className={classes.centered}
        style={{ display: matchesSM ? "none" : "flex" }}
      >
        <Grid>
          <Typography align={matchesMD ? "center" : undefined} variant="h3">
            Select Your Frame
          </Typography>
        </Grid>
        <Grid>
          <Typography
            style={{
              textAlign: "center",
              width: "13em",
              marginLeft: "7em",
              marginRight: "7em",
            }}
            align={matchesMD ? "center" : undefined}
            variant="h3"
          >
            Upload your photo or artwork and send
          </Typography>
        </Grid>
        <Grid>
          <Typography
            style={{
              textAlign: "center",
              width: "13em",
            }}
            align={matchesMD ? "center" : undefined}
            variant="h3"
          >
            We build custom frame and ship to you
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.centered}
        style={{ marginRight: "5em", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Button title={"START FRAMING"} />
      </Grid>

      {/*  Custom Framing Steps Section End */}

      {/*  Impresive Work Section Start */}
      <SectionHeading
        title={"Our Impresive Works"}
        subTitle={"Design A Custom Frame For Photos, Art, And More."}
      />
      <Grid container style={{ marginTop: "1em", justifyContent: "center" }}>
        <Grid item>
          <img src={impressive1} alt={"title"} />
        </Grid>
        <Grid item direstion="column">
          <Grid item>
            <img src={impressive2} alt={"title"} />
            <img src={impressive3} alt={"title"} />
          </Grid>
          <Grid item className={classes.imagezoom}>
            <img src={impressive4} alt={"title"} />
          </Grid>
        </Grid>
      </Grid>

      {/*  Impresive Work Section End */}

      {/* Why Choose Frame Boss Section Start */}
      <ChooseSection />
      {/* Why Choose Frame Boss Section End */}

      {/* Our Clients Section Start */}
      <SectionHeading
        title={"That's Why Our Clients Love Us"}
        subTitle={"Read What Our Clients Have To Say About Our Frames"}
      />
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{
          marginTop: "2em",
          marginBottom: "2em",
        }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={client}
              alt="client"
              style={{
                maxHeight: matchesMD ? 200 : "16em",
                paddingRight: "1em",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg
          style={{ paddingTop: "3em" }}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              JERMEY CROUSE
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "1em" }}>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              gutterBottom
            >
              (Graphic Designer)
            </Typography>
          </Grid>

          <Grid item container>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
            >
              <FontAwesomeIcon
                style={{ fontSize: "1.2rem", marginRight: ".5rem" }}
                icon={faQuoteLeft}
              />
              I must say that Frame Boss is the best framing service online.
              They are not only affordable but deliver the finest quality frames
              within a quick time frame. I ordered an oversized frame of an
              artwork that they delivered with professionalism and perfection.
              Highly recommended!
              <FontAwesomeIcon
                style={{ fontSize: "1.2rem", marginLeft: ".5rem" }}
                icon={faQuoteRight}
              />
            </Typography>
          </Grid>

          <Grid>
            <img src={doubleArrows} alt="arrows" />
          </Grid>
        </Grid>
      </Grid>
      {/* Our Clients Section End */}

      {/* Blog Section Start */}
      <SectionHeading
        title={"Our Blog"}
        subTitle={
          "We Offer Numerous Custom Framing Options Which Enable You To Create High-Quality Frames In Simple Steps."
        }
      />
      <Grid className={classes.rowContainer}>
        <Grid container>
          <Blog image={blog1} />
        </Grid>
        <Grid container>
          <Blog image={blog2} />
        </Grid>
      </Grid>
      {/* Blog Section End */}
    </div>
  );
}

export default HomePage;
