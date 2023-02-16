import { ModuleObject } from "../../Components/ModuleLoader/Utils";
import { app } from "../store";
import { makeObservable, observable } from "mobx";

class HomePage {
  constructor() {
    makeObservable(this, { testMutations: observable });
  }
  module = new ModuleObject();
  testMutations = {
    username: "andris",
    age: 20,
  };
}

const home = new HomePage();
const store = { ...app, home };

export default store;
//@ts-ignore
window["app"] = store;
