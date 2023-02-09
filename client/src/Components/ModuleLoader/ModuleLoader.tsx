import { Box, Button, Typography } from "@mui/material";
import { ModuleLoaderObject } from "./Utils";
import { Topbar } from "../Topbar/Topbar";

interface Props {
  initialData: ModuleLoaderObject;
}

const ModuleLoader = (props: Props) => {
  const { initialData } = props;

  return (
    <Box>
      <Box>
        <Topbar>
          {/* {initialData.tabs} */}
          <Button variant="contained">
            <Typography variant="button">Start</Typography>
          </Button>
          <Button variant="contained">
            <Typography variant="button">Start</Typography>
          </Button>
        </Topbar>
      </Box>
      <Box>
        <Typography>{initialData.module}</Typography>
      </Box>
    </Box>
  );
};

export default ModuleLoader;
