import { ModuleLoaderObject } from "../../Components/ModuleLoader/Utils";
import { app } from "../store";

class HomePage {
  module = new ModuleLoaderObject({
    module: <div>Hello</div>,
    modulePosition: "left",
    tabs: [<div>Tab1</div>, <div>Tab2</div>, <div>Tab3</div>, <div>Tab4</div>],
    useRouter: false,
  });
}
const home = new HomePage();
const store = { ...app, home };

export default store;
//@ts-ignore
window["app"] = store;
