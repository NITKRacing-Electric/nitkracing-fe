import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    sectionHeading: {
      fontSize: "2rem",
      textAlign: "center",
      paddingBottom: "4rem",
    },
    title: {
      fontWeight: "600",
      color: "#fff",
      fontSize: "2.8rem",
      lineHeight: "2.6rem",
    },
    subtitle: {
      fontSize: "1rem",
      letterSpacing: "3px",
    },
    bgText: {
      fontSize: "7.5rem",
      opacity: "0.1",
      lineHeight: "7rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          sectionHeading: "h1",
          title: "h2",
          bgText: "h3",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF1801",
    },
  },
});

export default theme;
