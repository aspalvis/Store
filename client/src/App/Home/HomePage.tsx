import ModuleLoader from "../../Components/ModuleLoader/ModuleLoader";
import app from "./store";

const HomePage = () => {
  return <ModuleLoader initialData={app.home.module} />;
};

export default HomePage;
