import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { green, orange, pink, grey } from "@mui/material/colors";
const themeVariables = createTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    customColor: {
      main: grey[500],
      superDark: grey[900],
      superLight: grey[100],
    },
  },
  typography: {
    customVariant: {
      fontSize: "2.5rem",
      color: orange[300],
    },
    newVariant: {
      fontSize: "5rem",
      color: green[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeVariables}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
