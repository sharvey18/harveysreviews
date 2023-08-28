// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: '"Arial", "Helvetica", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    // ... other typography options or customizations
  },
  // ... any other custom theme configurations
});

export default theme;
