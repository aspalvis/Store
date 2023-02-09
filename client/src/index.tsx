import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App/App";
import reportWebVitals from "./Vitals/reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: { default: "#002b6e", paper: "#fefffe" },
    primary: { main: "#002b6e" },
    secondary: { main: "#b38b53" },
    action: { disabledBackground: "#b38b53" },
  },

  typography: {
    fontSize: 16,
    fontFamily: "monospace",
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    allVariants: { color: "#fefffe" },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
