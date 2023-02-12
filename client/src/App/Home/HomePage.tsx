import Button from "@mui/material/Button";
import ModuleLoader from "../../Components/ModuleLoader/ModuleLoader";
import app from "./store";
import Typography from "@mui/material/Typography";
import { Topbar } from "../../Components/Topbar/Topbar";

const HomePage = () => {
  // return (
  //   <div>
  //     <Button variant="contained">button 1</Button>
  //     <Button variant="contained">button 2</Button>
  //     <Button variant="contained" color="secondary">
  //       button 3
  //     </Button>
  //     <Typography>
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, eum quam exercitationem praesentium ipsa
  //       error eveniet corporis vitae, omnis nesciunt reiciendis maxime commodi vero libero delectus debitis? Earum,
  //       officia magnam?
  //     </Typography>
  //     <Topbar>
  //       <Typography>This is menu panel</Typography>
  //     </Topbar>
  //   </div>
  // );
  return <ModuleLoader initialData={app.home.module} />;
};

export default HomePage;
