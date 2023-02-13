import { Typography } from "@mui/material";
import { ModuleLoaderObject } from "../../Components/ModuleLoader/Utils";
import { app } from "../store";

class HomePage {
  module = new ModuleLoaderObject({
    module: <Typography>Hello</Typography>,
    modulePosition: "left",
    navItems: [
      <Typography>Tab1</Typography>,
      <Typography>Tab2</Typography>,
      <Typography>Tab3</Typography>,
      <Typography>Tab4</Typography>,
    ],
    useRouter: false,
  });
}
const home = new HomePage();
const store = { ...app, home };

export default store;
//@ts-ignore
window["app"] = store;
