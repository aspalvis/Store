import { observer } from "mobx-react";
import ColorPallete from "../Components/ColorPallete/ColorPallete";
import Router from "./Router";
import { ThemeProvider, createTheme } from "@mui/material";

import { themes } from "../Styles/Themes";

const App = () => {
  console.log("sss");

  return (
    <ThemeProvider theme={createTheme(themes.theme)}>
      <ColorPallete />
      <Router />
    </ThemeProvider>
  );
};

export default observer(App);
