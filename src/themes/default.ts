import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1971c2",
      dark: "#1766af", 
      light: "#75aada"
    },
    secondary: {
      main: "#e64980",
      light: "#fdedf2"
    },
    text: {
      primary: "#555555"
    }
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: "3rem"
    },
    h2: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8
    },
    caption: {
      lineHeight: 0.5
    }
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          paddingTop: theme.spacing(1),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1)
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          border: "1px solid",
          borderColor: theme.palette.grey[300]
        }),
      },
      defaultProps: {
        elevation: 0
      }
    },
  }
});

export default defaultTheme;