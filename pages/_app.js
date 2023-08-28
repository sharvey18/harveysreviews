// pages/_app.js
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
