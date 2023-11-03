import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    fontFamily2: 'Outfit, sans-serif',
    body1: {
      fontFamily: '"Outfit", sans-serif',
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
    },
    // Use the custom font family for subtitle1 and subtitle2
    subtitle1: {
      fontFamily: '"Outfit", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Outfit", sans-serif',
    },
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
      fontSize: "10rem",
      color: "rgba(255, 255, 255, 0.1)",
      lineHeight: "10rem",
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
          subtitle: "p",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF1801",
    },
    gradient: {
      dark: "linear-gradient(to right, #434343 0%, black 100%)",
    },
  },
});

export default theme;
