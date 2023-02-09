import { observer } from "mobx-react";
import AppWrapper from "../Components/AppWrapper/AppWrapper";
import ColorPallete from "../Components/ColorPallete/ColorPallete";
import Router from "./Router";
import { ThemeProvider, createTheme } from "@mui/material";
import { app } from "./store";

const App = () => {
  console.log("sss");

  return (
    <ThemeProvider theme={createTheme(app.theme.theme)}>
      <AppWrapper>
        <ColorPallete />
        <Router />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default observer(App);
