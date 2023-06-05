import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        sectionHeading: {
            fontSize: '2rem',
            textAlign: 'center',
            paddingBottom: '4rem'
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    // Map the new variant to render a <h1> by default
                    sectionHeading: 'h1',
                },
            },
        },
    },
    palette: {
        mode: 'dark'
    }
});

export default theme
