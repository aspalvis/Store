import * as Contorls from "../../Components/Controls/Controls";
import { Module } from "../../Components/ModuleLoader/Module";
import { ModuleObject } from "../../Components/ModuleLoader/Utils";
import app from "./store";

const HomePage = () => {
  return (
    <Module initialData={new ModuleObject()}>
      <Contorls.TextInput
        mutable={{
          item: app.home.testMutations,
          propertyName: "username",
          onChange: (item) => {
            console.log(item);
          },
        }}
      />
    </Module>
  );
};

export default HomePage;
