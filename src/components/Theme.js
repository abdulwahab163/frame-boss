import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#112d46";
const arcOrange = "#FFBA60";
const acrGrey = "#868686";
export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "1.2rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h4: {
      fontSize: ".8rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.5rem",
      color: acrGrey,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: ".7rem",
      color: acrGrey,
      fontWeight: 300,
    },
    body1: {
      fontSize: ".9rem",
      color: acrGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      color: acrGrey,
      fontWeight: 300,
    },
  },
});
